"use strict";

const FILES = {
  usuarios: "usuarios.json",
  vacas: "vacas.json",
  observaciones: "observaciones_sanitarias.json",
  ordenes: "ordenes.json",
  lotes: "lotes.json",
  auditoria: "auditoria.json",
  documentacion: "documentacion.json"
};

const state = {
  data: Object.fromEntries(Object.keys(FILES).map(key => [key, []])),
  directoryHandle: null,
  writable: false,
  user: null,
  view: "dashboard",
  selectedLotId: null,
  filters: { cowText: "", cowState: "TODOS" },
  dialogSubmit: null
};

const ROLE_LABELS = {
  ADMINISTRADOR: "Administración",
  ENCARGADO: "Encargado",
  OPERARIO: "Operario de ordeñe",
  VETERINARIO: "Veterinario"
};

const COW_STATES = {
  EN_PRODUCCION: "En producción",
  SECADO: "Secado",
  TRATAMIENTO: "En tratamiento",
  BAJA: "Baja"
};

const LOT_STATES = {
  BORRADOR: "Borrador",
  PENDIENTE_ANALISIS: "Pendiente de análisis",
  COMPLETO: "Completo",
  CERRADO: "Cerrado"
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const esc = value => String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
const today = () => new Date().toISOString().slice(0, 10);
const now = () => new Date().toISOString();
const nextId = list => Math.max(0, ...list.map(item => Number(item.id) || 0)) + 1;
const currentUserName = () => state.user?.nombreCompleto || "Sistema";
const hasRole = (...roles) => roles.includes(state.user?.rol);
const formatDate = value => value ? new Intl.DateTimeFormat("es-UY", { dateStyle: "medium" }).format(new Date(`${value}`.length === 10 ? `${value}T12:00:00` : value)) : "—";
const formatDateTime = value => value ? new Intl.DateTimeFormat("es-UY", { dateStyle: "short", timeStyle: "short" }).format(new Date(value)) : "—";
const getUser = id => state.data.usuarios.find(item => item.id === Number(id));
const getCow = id => state.data.vacas.find(item => item.id === Number(id));
const getMilking = id => state.data.ordenes.find(item => item.id === Number(id));
const getLot = id => state.data.lotes.find(item => item.id === Number(id));

document.addEventListener("DOMContentLoaded", init);

async function init() {
  await loadBundledData();
  bindStaticEvents();
  renderStorageStatus();
}

async function loadBundledData() {
  try {
    const entries = await Promise.all(Object.entries(FILES).map(async ([key, file]) => {
      const response = await fetch(`data/${file}`, { cache: "no-store" });
      if (!response.ok) throw new Error(`No se pudo leer ${file}`);
      return [key, await response.json()];
    }));
    Object.assign(state.data, Object.fromEntries(entries));
  } catch (error) {
    $("#loginError").textContent = "Abrí la demo desde un servidor local para cargar los archivos JSON. Consultá README.md.";
    console.error(error);
  }
}

function bindStaticEvents() {
  $("#loginForm").addEventListener("submit", login);
  $("#connectFromLogin").addEventListener("click", connectFolder);
  $("#connectFolder").addEventListener("click", connectFolder);
  $("#logoutButton").addEventListener("click", logout);
  $("#menuButton").addEventListener("click", toggleSidebar);
  $("#sidebarScrim").addEventListener("click", closeSidebar);
  $("#appDialog form").addEventListener("submit", submitDialog);

  document.addEventListener("click", event => {
    const nav = event.target.closest("[data-view]");
    if (nav) return showView(nav.dataset.view);
    const action = event.target.closest("[data-action]");
    if (action) handleAction(action.dataset.action, action.dataset);
  });

  document.addEventListener("input", event => {
    if (event.target.id === "cowSearch") {
      state.filters.cowText = event.target.value;
      renderCowsTable();
    }
  });

  document.addEventListener("change", event => {
    if (event.target.id === "cowStateFilter") {
      state.filters.cowState = event.target.value;
      renderCowsTable();
    }
    if (event.target.matches("[data-exclusion-toggle]")) {
      const reason = event.target.closest(".check-row").querySelector("[data-exclusion-reason]");
      reason.disabled = event.target.checked;
      if (event.target.checked) reason.value = "";
    }
  });
}

async function login(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const username = String(form.get("username") || "").trim().toLowerCase();
  const passwordHash = await sha256(String(form.get("password") || ""));
  const user = state.data.usuarios.find(item => item.nombreUsuario.toLowerCase() === username && item.passwordHash === passwordHash);
  if (!user || !user.activo) {
    $("#loginError").textContent = "Usuario, contraseña o estado de cuenta incorrectos.";
    return;
  }
  state.user = user;
  $("#loginError").textContent = "";
  $("#loginScreen").hidden = true;
  $("#appShell").hidden = false;
  configureSession();
  renderAll();
  showView("dashboard");
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, "0")).join("");
}

function logout() {
  state.user = null;
  state.view = "dashboard";
  $("#appShell").hidden = true;
  $("#loginScreen").hidden = false;
  closeSidebar();
  $("#loginForm [name=password]").value = "demo123";
}

function configureSession() {
  const initials = state.user.nombreCompleto.split(/\s+/).slice(0, 2).map(part => part[0]).join("").toUpperCase();
  $("#userAvatar").textContent = initials;
  $("#userName").textContent = state.user.nombreCompleto;
  $("#userRole").textContent = ROLE_LABELS[state.user.rol] || state.user.rol;
  $$('[data-roles]').forEach(item => {
    item.hidden = !item.dataset.roles.split(",").includes(state.user.rol);
  });
}

function showView(view) {
  const nav = $(`[data-view="${view}"]`);
  if (nav?.hidden) return showView("dashboard");
  state.view = view;
  $$(".view").forEach(section => { section.hidden = section.id !== `view-${view}`; });
  $$(".nav-item").forEach(item => item.classList.toggle("is-active", item.dataset.view === view));
  renderView(view);
  closeSidebar();
  $("#mainContent").focus({ preventScroll: true });
}

function renderAll() {
  ["dashboard", "vacas", "ordenes", "lotes", "trazabilidad", "usuarios", "auditoria", "documentacion"].forEach(renderView);
  renderStorageStatus();
}

function renderView(view) {
  const renderers = {
    dashboard: renderDashboard,
    vacas: renderCows,
    ordenes: renderMilkings,
    lotes: renderLots,
    trazabilidad: renderTraceability,
    usuarios: renderUsers,
    auditoria: renderAudit,
    documentacion: renderDocumentation
  };
  renderers[view]?.();
}

function pageHead(kicker, title, description, actions = "") {
  return `<header class="page-head"><div><p class="eyebrow">${esc(kicker)}</p><h1>${esc(title)}</h1><p>${esc(description)}</p></div>${actions ? `<div class="head-actions">${actions}</div>` : ""}</header>`;
}

function renderDashboard() {
  if (!state.user) return;
  const production = state.data.vacas.filter(cow => cow.estado === "EN_PRODUCCION").length;
  const openLots = state.data.lotes.filter(lot => lot.estado !== "CERRADO").length;
  const closedLots = state.data.lotes.filter(lot => lot.estado === "CERRADO").length;
  const latest = [...state.data.auditoria].sort((a, b) => new Date(b.fechaHora) - new Date(a.fechaHora)).slice(0, 5);
  $("#view-dashboard").innerHTML = `
    <section class="hero-panel"><div><p class="eyebrow">${esc(ROLE_LABELS[state.user.rol])}</p><h1>Buen día, ${esc(state.user.nombreCompleto.split(" ")[0])}.</h1><p>Cada registro de esta pantalla existe porque antes hubo una necesidad relevada, un requerimiento acordado y una historia priorizada.</p>${hasRole("ADMINISTRADOR") ? `<button class="button" style="margin-top:18px" data-action="backup">Crear respaldo JSON</button>` : ""}</div></section>
    <section class="stat-grid" aria-label="Indicadores principales">
      <article class="stat-card"><span>Vacas activas</span><strong>${state.data.vacas.filter(c => c.estado !== "BAJA").length}</strong><small>${production} en producción</small></article>
      <article class="stat-card"><span>Ordeñes</span><strong>${state.data.ordenes.length}</strong><small>registros acumulados</small></article>
      <article class="stat-card"><span>Lotes abiertos</span><strong>${openLots}</strong><small>requieren seguimiento</small></article>
      <article class="stat-card"><span>Lotes cerrados</span><strong>${closedLots}</strong><small>trazabilidad protegida</small></article>
    </section>
    <section class="content-grid">
      <article class="panel"><header class="panel-header"><h2>Flujo documentado del producto</h2><button class="button button--small" data-view="documentacion">Ver matriz</button></header><div class="panel-body flow-list">
        <div class="flow-step" data-step="1"><div><strong>Registrar animales</strong><small>La caravana identifica cada origen posible.</small></div><span class="requirement-chip">RF3 · HU3</span></div>
        <div class="flow-step" data-step="2"><div><strong>Registrar el ordeñe</strong><small>Fecha, turno, tanque y participación.</small></div><span class="requirement-chip">RF5–RF7</span></div>
        <div class="flow-step" data-step="3"><div><strong>Generar el lote</strong><small>Se conserva una foto de incluidos y excluidos.</small></div><span class="requirement-chip">RF8 · HU9</span></div>
        <div class="flow-step" data-step="4"><div><strong>Completar y cerrar</strong><small>La calidad debe estar completa antes del cierre.</small></div><span class="requirement-chip">HU20–HU21</span></div>
        <div class="flow-step" data-step="5"><div><strong>Demostrar trazabilidad</strong><small>El reporte reconstruye todo el recorrido.</small></div><span class="requirement-chip">RF12 · HU13</span></div>
      </div></article>
      <article class="panel"><header class="panel-header"><h2>Actividad reciente</h2><span class="requirement-chip">RNF7</span></header><div class="panel-body">${latest.length ? latest.map(item => `<div class="flow-step" data-step="·"><div><strong>${esc(item.accion)}</strong><small>${esc(item.usuarioNombre)} · ${formatDateTime(item.fechaHora)}</small></div></div>`).join("") : `<p class="muted">Todavía no hay cambios registrados.</p>`}</div></article>
    </section>`;
}

function renderCows() {
  const canCreate = hasRole("ADMINISTRADOR", "ENCARGADO");
  $("#view-vacas").innerHTML = `
    ${pageHead("EP2 · Gestión de animales", "Vacas", "Registro, búsqueda, estado productivo y antecedentes sanitarios derivados de RF3, RF4 y RF13.", canCreate ? `<button class="button button--primary" data-action="new-cow">+ Registrar vaca</button>` : "")}
    <div class="toolbar"><input class="search" id="cowSearch" type="search" value="${esc(state.filters.cowText)}" placeholder="Buscar por caravana o nombre…" aria-label="Buscar vacas"><select id="cowStateFilter" aria-label="Filtrar por estado">${["TODOS", ...Object.keys(COW_STATES)].map(value => `<option value="${value}" ${state.filters.cowState === value ? "selected" : ""}>${value === "TODOS" ? "Todos los estados" : COW_STATES[value]}</option>`).join("")}</select></div>
    <div id="cowTable"></div>`;
  renderCowsTable();
}

function renderCowsTable() {
  const host = $("#cowTable");
  if (!host) return;
  const query = state.filters.cowText.trim().toLowerCase();
  const cows = state.data.vacas.filter(cow => {
    const matchesText = !query || cow.caravana.toLowerCase().includes(query) || (cow.nombre || "").toLowerCase().includes(query);
    const matchesState = state.filters.cowState === "TODOS" || cow.estado === state.filters.cowState;
    return matchesText && matchesState;
  });
  const canEdit = hasRole("ADMINISTRADOR", "ENCARGADO");
  const canHealth = hasRole("ADMINISTRADOR", "VETERINARIO");
  host.innerHTML = cows.length ? `<div class="table-wrap"><table><thead><tr><th>Animal</th><th>Raza / nacimiento</th><th>Estado</th><th>Observaciones</th><th>Acciones</th></tr></thead><tbody>${cows.map(cow => {
    const healthCount = state.data.observaciones.filter(note => note.vacaId === cow.id).length;
    return `<tr><td><span class="cell-title mono">#${esc(cow.caravana)}</span><span class="cell-note">${esc(cow.nombre || "Sin nombre")}</span></td><td>${esc(cow.raza)}<span class="cell-note">${formatDate(cow.fechaNacimiento)}</span></td><td>${stateBadge(cow.estado, COW_STATES)}</td><td>${esc(cow.observaciones || "—")}<span class="cell-note">${healthCount} registros sanitarios</span></td><td><div class="row-actions">${canEdit ? `<button class="button button--small" data-action="cow-status" data-id="${cow.id}">Cambiar estado</button>` : ""}${canHealth ? `<button class="button button--small" data-action="health" data-id="${cow.id}">Sanidad</button>` : ""}</div></td></tr>`;
  }).join("")}</tbody></table></div>` : emptyState("No se encontraron vacas con esos criterios.");
}

function renderMilkings() {
  const canCreate = hasRole("ADMINISTRADOR", "ENCARGADO", "OPERARIO");
  $("#view-ordenes").innerHTML = `
    ${pageHead("EP3 · Registro de ordeñes", "Ordeñes", "Una carga rápida para sala de ordeñe: agrega automáticamente las vacas en producción y exige justificar cada exclusión.", canCreate ? `<button class="button button--primary" data-action="new-milking">+ Registrar ordeñe</button>` : "")}
    ${state.data.ordenes.length ? `<div class="table-wrap"><table><thead><tr><th>Ordeñe</th><th>Turno / tanque</th><th>Responsable</th><th>Participación</th><th>Lote</th></tr></thead><tbody>${[...state.data.ordenes].sort((a, b) => b.fecha.localeCompare(a.fecha)).map(milking => {
      const included = milking.participaciones.filter(p => p.participo).length;
      const excluded = milking.participaciones.length - included;
      const lot = state.data.lotes.find(item => item.ordeneId === milking.id);
      return `<tr><td><span class="cell-title">Ordeñe #${milking.id}</span><span class="cell-note">${formatDate(milking.fecha)}</span></td><td>${esc(milking.turno === "MANANA" ? "Mañana" : "Tarde")}<span class="cell-note">Tanque ${esc(milking.tanque)}</span></td><td>${esc(getUser(milking.responsableId)?.nombreCompleto || "Usuario desconocido")}</td><td><strong>${included}</strong> incluidas<span class="cell-note">${excluded} excluidas</span></td><td>${lot ? `<button class="button button--small" data-action="trace-lot" data-id="${lot.id}">${esc(lot.codigo)}</button>` : (hasRole("ADMINISTRADOR", "ENCARGADO") ? `<button class="button button--small" data-action="new-lot" data-milking-id="${milking.id}">Crear lote</button>` : `<span class="muted">Pendiente</span>`)}</td></tr>`;
    }).join("")}</tbody></table></div>` : emptyState("Todavía no hay ordeñes registrados.")}`;
}

function renderLots() {
  $("#view-lotes").innerHTML = `
    ${pageHead("EP4 + EP5", "Lotes de leche", "El estado hace visible qué falta. Un lote solo puede cerrarse cuando sus propiedades obligatorias están completas.")}
    ${state.data.lotes.length ? `<div class="cards-grid">${[...state.data.lotes].sort((a, b) => b.id - a.id).map(lot => {
      const milking = getMilking(lot.ordeneId);
      const qualityReady = isQualityComplete(lot.calidad);
      return `<article class="data-card"><span class="badge ${lot.estado === "CERRADO" ? "badge--ok" : qualityReady ? "badge--ok" : "badge--warn"}">${esc(LOT_STATES[lot.estado])}</span><h3>${esc(lot.codigo)}</h3><p>${formatDate(milking?.fecha)} · ${esc(milking?.turno === "MANANA" ? "Mañana" : "Tarde")} · Tanque ${esc(lot.tanque)}<br>${esc(lot.litrosEstimados)} litros estimados</p><footer><button class="button button--small" data-action="trace-lot" data-id="${lot.id}">Ver trazabilidad</button>${lot.estado !== "CERRADO" && hasRole("ADMINISTRADOR", "ENCARGADO") ? `<button class="button button--small" data-action="quality" data-id="${lot.id}">${qualityReady ? "Editar calidad" : "Cargar calidad"}</button><button class="button button--small" data-action="close-lot" data-id="${lot.id}">Cerrar</button>` : ""}</footer></article>`;
    }).join("")}</div>` : emptyState("Los lotes se crean desde un ordeñe registrado.")}`;
}

function renderTraceability() {
  const lots = [...state.data.lotes].sort((a, b) => b.id - a.id);
  if (!state.selectedLotId && lots[0]) state.selectedLotId = lots[0].id;
  const selected = getLot(state.selectedLotId) || lots[0];
  $("#view-trazabilidad").innerHTML = `
    ${pageHead("EP6 · Trazabilidad y reportes", "Trazabilidad", "Una consulta reúne el lote, el ordeñe, el responsable, los animales y la calidad para responder una auditoría.")}
    ${lots.length ? `<div class="trace-layout"><aside class="lot-selector" aria-label="Seleccionar lote">${lots.map(lot => `<button class="lot-option ${selected?.id === lot.id ? "is-active" : ""}" data-action="select-lot" data-id="${lot.id}"><strong>${esc(lot.codigo)}</strong><small>${esc(LOT_STATES[lot.estado])}</small></button>`).join("")}</aside>${traceReport(selected)}</div>` : emptyState("No hay lotes disponibles para consultar.")}`;
}

function traceReport(lot) {
  if (!lot) return "";
  const milking = getMilking(lot.ordeneId);
  const responsible = getUser(milking?.responsableId);
  const included = lot.participaciones.filter(item => item.tipo === "INCLUIDA");
  const excluded = lot.participaciones.filter(item => item.tipo === "EXCLUIDA");
  const quality = lot.calidad || {};
  return `<article class="trace-report"><header class="report-head"><div><p class="eyebrow">Reporte básico · RF12 / HU13</p><h2>${esc(lot.codigo)}</h2></div><span class="badge ${lot.estado === "CERRADO" ? "badge--ok" : "badge--warn"}">${esc(LOT_STATES[lot.estado])}</span></header><div class="report-body">
    <div class="row-actions"><button class="button button--small" data-action="print">Imprimir / PDF</button><button class="button button--small" data-action="download-json" data-id="${lot.id}">Exportar JSON</button><button class="button button--small" data-action="download-csv" data-id="${lot.id}">Exportar CSV</button></div>
    <section class="report-section"><h3>Identificación y origen</h3><div class="report-grid"><div class="report-item"><span>Fecha</span><strong>${formatDate(milking?.fecha)}</strong></div><div class="report-item"><span>Turno</span><strong>${esc(milking?.turno === "MANANA" ? "Mañana" : "Tarde")}</strong></div><div class="report-item"><span>Tanque</span><strong>${esc(lot.tanque)}</strong></div><div class="report-item"><span>Responsable</span><strong>${esc(responsible?.nombreCompleto || "—")}</strong></div><div class="report-item"><span>Volumen</span><strong>${esc(lot.litrosEstimados)} L</strong></div><div class="report-item"><span>Cierre</span><strong>${formatDateTime(lot.fechaCierre)}</strong></div></div></section>
    <section class="report-section"><h3>Propiedades de calidad</h3><div class="report-grid"><div class="report-item"><span>Temperatura</span><strong>${valueOrDash(quality.temperatura, " °C")}</strong></div><div class="report-item"><span>Grasa</span><strong>${valueOrDash(quality.grasa, " %")}</strong></div><div class="report-item"><span>Proteína</span><strong>${valueOrDash(quality.proteina, " %")}</strong></div><div class="report-item"><span>Células somáticas</span><strong>${valueOrDash(quality.celulasSomaticas)}</strong></div><div class="report-item"><span>Antibióticos</span><strong>${esc(quality.resultadoAntibioticos || "—")}</strong></div><div class="report-item"><span>Carga</span><strong>${formatDateTime(quality.fechaCarga)}</strong></div></div></section>
    <section class="report-section"><h3>Vacas incluidas (${included.length})</h3><div class="animal-list">${included.map(item => animalChip(item, false)).join("") || `<span class="muted">Sin registros</span>`}</div></section>
    <section class="report-section"><h3>Vacas excluidas (${excluded.length})</h3><div class="animal-list">${excluded.map(item => animalChip(item, true)).join("") || `<span class="muted">Ninguna</span>`}</div></section>
    ${quality.observaciones ? `<section class="report-section"><h3>Observaciones</h3><p class="muted">${esc(quality.observaciones)}</p></section>` : ""}
  </div></article>`;
}

function animalChip(participation, excluded) {
  const cow = getCow(participation.vacaId);
  return `<span class="animal-chip ${excluded ? "animal-chip--excluded" : ""}">#${esc(cow?.caravana || participation.vacaId)} ${esc(cow?.nombre || "")} ${excluded ? `· ${esc(participation.motivoExclusion || "sin motivo")}` : ""}</span>`;
}

function renderUsers() {
  if (!hasRole("ADMINISTRADOR")) return;
  $("#view-usuarios").innerHTML = `
    ${pageHead("EP1 · Usuarios y seguridad", "Usuarios", "Los roles limitan acciones y mantienen la responsabilidad de cada cambio.", `<button class="button button--primary" data-action="new-user">+ Crear usuario</button>`)}
    <div class="table-wrap"><table><thead><tr><th>Persona</th><th>Usuario</th><th>Rol</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>${state.data.usuarios.map(user => `<tr><td><span class="cell-title">${esc(user.nombreCompleto)}</span><span class="cell-note">${esc(user.email)}</span></td><td class="mono">${esc(user.nombreUsuario)}</td><td>${esc(ROLE_LABELS[user.rol])}</td><td><span class="badge ${user.activo ? "badge--ok" : "badge--danger"}">${user.activo ? "Activo" : "Inactivo"}</span></td><td><button class="button button--small" data-action="toggle-user" data-id="${user.id}" ${user.id === state.user.id ? "disabled" : ""}>${user.activo ? "Desactivar" : "Activar"}</button></td></tr>`).join("")}</tbody></table></div>`;
}

function renderAudit() {
  if (!hasRole("ADMINISTRADOR")) return;
  const records = [...state.data.auditoria].sort((a, b) => new Date(b.fechaHora) - new Date(a.fechaHora));
  $("#view-auditoria").innerHTML = `
    ${pageHead("EP7 · Auditoría básica", "Historial de cambios", "RNF7 exige registrar fecha, hora y usuario en los cambios críticos. El historial se guarda en auditoria.json.")}
    ${records.length ? `<div class="table-wrap"><table><thead><tr><th>Fecha y hora</th><th>Usuario</th><th>Entidad</th><th>Acción</th><th>Cambio</th></tr></thead><tbody>${records.map(item => `<tr><td>${formatDateTime(item.fechaHora)}</td><td>${esc(item.usuarioNombre)}</td><td><span class="cell-title">${esc(item.entidad)} #${esc(item.entidadId)}</span></td><td>${esc(item.accion)}</td><td><span class="cell-note">${esc(item.detalle)}</span></td></tr>`).join("")}</tbody></table></div>` : emptyState("No hay cambios registrados.")}`;
}

function renderDocumentation() {
  const docs = state.data.documentacion;
  const items = Array.isArray(docs) ? docs : docs.trazabilidad || [];
  const files = Array.isArray(docs) ? [] : docs.archivos || [];
  $("#view-documentacion").innerHTML = `
    ${pageHead("Documentación viva", "¿Por qué existe cada pantalla?", "La documentación evita programar por intuición: permite justificar funciones, datos, reglas de negocio, pruebas y decisiones de alcance.")}
    <section class="hero-panel"><div><p class="eyebrow">Necesidad → evidencia</p><h1>Si no se puede rastrear, no se puede defender.</h1><p>Esta demo vincula la aplicación con los artefactos que le dieron origen. Compará cada función con su épica, requerimiento e historia de usuario.</p></div></section>
    <section class="cards-grid" style="margin-top:16px">${items.map(item => `<article class="data-card"><span class="requirement-chip">${esc(item.epica)}</span><h3>${esc(item.modulo)}</h3><p>${esc(item.decision)}</p><footer>${item.requerimientos.map(code => `<span class="requirement-chip">${esc(code)}</span>`).join("")}${item.historias.map(code => `<span class="requirement-chip">${esc(code)}</span>`).join("")}</footer></article>`).join("")}</section>
    <section class="panel" style="margin-top:16px"><header class="panel-header"><h2>Persistencia visible: archivos JSON</h2><span class="requirement-chip">Sin base de datos</span></header><div class="panel-body"><div class="flow-list">${files.map((file, index) => `<div class="flow-step" data-step="${index + 1}"><div><strong class="mono">${esc(file.nombre)}</strong><small>${esc(file.proposito)}</small></div><span class="requirement-chip">${esc(file.origen)}</span></div>`).join("")}</div><div class="explain-box" style="margin-top:18px"><strong>Ejercicio sugerido:</strong> registrá un ordeñe, generá su lote y observá qué archivos cambian. Después buscá los códigos RF/HU relacionados y verificá si el comportamiento cumple lo documentado.</div></div></section>`;
}

function stateBadge(value, labels) {
  const cls = ["EN_PRODUCCION", "COMPLETO", "CERRADO"].includes(value) ? "badge--ok" : ["TRATAMIENTO", "PENDIENTE_ANALISIS"].includes(value) ? "badge--warn" : value === "BAJA" ? "badge--danger" : "";
  return `<span class="badge ${cls}">${esc(labels[value] || value)}</span>`;
}

function emptyState(message) {
  return `<div class="empty-state"><div><strong>No hay datos para mostrar.</strong><p>${esc(message)}</p></div></div>`;
}

function valueOrDash(value, suffix = "") {
  return value === null || value === undefined || value === "" ? "—" : `${esc(value)}${suffix}`;
}

async function connectFolder() {
  if (!("showDirectoryPicker" in window)) {
    toast("Este navegador no permite escritura directa. Usá Chrome o Edge desde localhost.", true);
    return;
  }
  try {
    const handle = await window.showDirectoryPicker({ mode: "readwrite", id: "tambotrace-data" });
    const loaded = {};
    for (const [key, fileName] of Object.entries(FILES)) {
      const fileHandle = await handle.getFileHandle(fileName, { create: true });
      const file = await fileHandle.getFile();
      if (file.size) {
        try { loaded[key] = JSON.parse(await file.text()); }
        catch { throw new Error(`${fileName} no contiene JSON válido.`); }
      } else {
        await writeHandle(fileHandle, state.data[key]);
        loaded[key] = state.data[key];
      }
    }
    state.directoryHandle = handle;
    state.writable = true;
    Object.assign(state.data, loaded);
    renderStorageStatus();
    if (state.user) renderAll();
    toast(`Carpeta “${handle.name}” conectada. Los cambios se guardarán en JSON.`);
  } catch (error) {
    if (error.name !== "AbortError") toast(error.message || "No fue posible conectar la carpeta.", true);
  }
}

async function writeHandle(fileHandle, data) {
  const writable = await fileHandle.createWritable();
  await writable.write(`${JSON.stringify(data, null, 2)}\n`);
  await writable.close();
}

async function persist(key) {
  if (!state.writable || !state.directoryHandle) throw new Error("Conectá la carpeta tambotrace/data para guardar cambios.");
  const fileHandle = await state.directoryHandle.getFileHandle(FILES[key], { create: true });
  await writeHandle(fileHandle, state.data[key]);
}

function renderStorageStatus() {
  const title = state.writable ? `Carpeta ${state.directoryHandle.name}` : "Datos de demostración";
  const subtitle = state.writable ? "Lectura y escritura en archivos JSON" : "Solo lectura · conectá la carpeta data para guardar";
  $("#storageTitle").textContent = title;
  $("#storageSubtitle").textContent = subtitle;
  $("#storageDot").classList.toggle("is-connected", state.writable);
  $("#loginStorageHelp").innerHTML = state.writable ? `Carpeta <code>${esc(state.directoryHandle.name)}</code> conectada: los cambios se guardarán en archivos JSON.` : `Podés explorar los datos incluidos en modo lectura. Para guardar cambios, elegí la carpeta <code>tambotrace/data</code>.`;
}

function ensureWritable() {
  if (state.writable) return true;
  toast("Primero conectá la carpeta tambotrace/data para habilitar escrituras.", true);
  return false;
}

function handleAction(action, data) {
  const actions = {
    "new-cow": openNewCow,
    "cow-status": () => openCowStatus(Number(data.id)),
    health: () => openHealth(Number(data.id)),
    "new-milking": openNewMilking,
    "new-lot": () => openNewLot(Number(data.milkingId)),
    quality: () => openQuality(Number(data.id)),
    "close-lot": () => closeLot(Number(data.id)),
    "trace-lot": () => { state.selectedLotId = Number(data.id); showView("trazabilidad"); },
    "select-lot": () => { state.selectedLotId = Number(data.id); renderTraceability(); },
    print: () => window.print(),
    "download-json": () => downloadLotJson(Number(data.id)),
    "download-csv": () => downloadLotCsv(Number(data.id)),
    backup: createBackup,
    "new-user": openNewUser,
    "toggle-user": () => toggleUser(Number(data.id))
  };
  Promise.resolve(actions[action]?.()).catch(error => toast(error.message || "La operación no pudo completarse.", true));
}

function openDialog(title, eyebrow, body, onSubmit, submitLabel = "Guardar") {
  $("#dialogTitle").textContent = title;
  $("#dialogEyebrow").textContent = eyebrow;
  $("#dialogBody").innerHTML = body;
  $("#dialogFooter").innerHTML = `<button class="button" value="cancel">Cancelar</button><button class="button button--primary" value="submit">${esc(submitLabel)}</button>`;
  state.dialogSubmit = onSubmit;
  $("#appDialog").showModal();
}

async function submitDialog(event) {
  event.preventDefault();
  if (event.submitter?.value === "cancel") {
    $("#appDialog").close();
    return;
  }
  if (!state.dialogSubmit) return;
  try {
    const shouldClose = await state.dialogSubmit(new FormData(event.currentTarget), event.currentTarget);
    if (shouldClose !== false) $("#appDialog").close();
  } catch (error) {
    toast(error.message || "No se pudo guardar.", true);
  }
}

function openNewCow() {
  if (!ensureWritable()) return;
  openDialog("Registrar vaca", "RF3 · HU3", `<div class="form-grid"><label>Caravana<input name="caravana" required placeholder="UY-0290"></label><label>Nombre opcional<input name="nombre" placeholder="Mora"></label><label>Raza<input name="raza" value="Holando" required></label><label>Fecha de nacimiento<input name="fechaNacimiento" type="date" required></label><label>Estado<select name="estado">${Object.entries(COW_STATES).map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}</select></label><label class="full">Observaciones<textarea name="observaciones" placeholder="Información general del animal"></textarea></label></div>`, async form => {
    const caravana = String(form.get("caravana")).trim();
    if (state.data.vacas.some(cow => cow.caravana.toLowerCase() === caravana.toLowerCase())) throw new Error("Ya existe una vaca con esa caravana.");
    const cow = { id: nextId(state.data.vacas), caravana, nombre: String(form.get("nombre")).trim(), raza: String(form.get("raza")).trim(), fechaNacimiento: form.get("fechaNacimiento"), estado: form.get("estado"), observaciones: String(form.get("observaciones")).trim() };
    state.data.vacas.push(cow);
    await persist("vacas");
    await audit("Vaca", cow.id, "Alta de animal", `Caravana ${cow.caravana}; estado ${cow.estado}`);
    renderAll(); toast("Vaca registrada en vacas.json.");
  });
}

function openCowStatus(id) {
  if (!ensureWritable()) return;
  const cow = getCow(id);
  openDialog("Cambiar estado", `RF4 · HU5 · #${cow.caravana}`, `<div class="form-grid"><label class="full">Nuevo estado<select name="estado">${Object.entries(COW_STATES).map(([value, label]) => `<option value="${value}" ${cow.estado === value ? "selected" : ""}>${label}</option>`).join("")}</select></label><label class="full">Motivo<textarea name="motivo" required placeholder="Justificación del cambio"></textarea></label></div>`, async form => {
    const previous = cow.estado;
    cow.estado = form.get("estado");
    await persist("vacas");
    await audit("Vaca", cow.id, "Cambio de estado", `${previous} → ${cow.estado}. ${form.get("motivo")}`);
    renderAll(); toast("Estado actualizado y auditado.");
  });
}

function openHealth(id) {
  const cow = getCow(id);
  const notes = state.data.observaciones.filter(note => note.vacaId === id).sort((a, b) => b.fecha.localeCompare(a.fecha));
  const canAdd = hasRole("ADMINISTRADOR", "VETERINARIO") && state.writable;
  openDialog("Observaciones sanitarias", `HU15 · #${cow.caravana}`, `<div class="flow-list">${notes.map(note => `<div class="flow-step" data-step="+"><div><strong>${formatDate(note.fecha)}</strong><small>${esc(note.descripcion)} · ${esc(getUser(note.usuarioId)?.nombreCompleto || "Usuario")}</small></div></div>`).join("") || `<p class="muted">Sin observaciones sanitarias.</p>`}</div>${canAdd ? `<div class="form-grid" style="margin-top:18px"><label>Fecha<input name="fecha" type="date" value="${today()}" required></label><label class="full">Nueva observación<textarea name="descripcion" required></textarea></label></div>` : `<p class="explain-box">Conectá la carpeta JSON y usá un perfil autorizado para agregar observaciones.</p>`}`, canAdd ? async form => {
    const note = { id: nextId(state.data.observaciones), vacaId: id, fecha: form.get("fecha"), descripcion: String(form.get("descripcion")).trim(), usuarioId: state.user.id };
    state.data.observaciones.push(note);
    await persist("observaciones");
    await audit("Vaca", id, "Observación sanitaria", note.descripcion);
    renderAll(); toast("Observación guardada en observaciones_sanitarias.json.");
  } : null, canAdd ? "Agregar observación" : "Cerrar");
  if (!canAdd) {
    $("#dialogFooter").innerHTML = `<button class="button button--primary" value="cancel">Cerrar</button>`;
  }
}

function openNewMilking() {
  if (!ensureWritable()) return;
  const cows = state.data.vacas.filter(cow => ["EN_PRODUCCION", "TRATAMIENTO"].includes(cow.estado));
  if (!cows.length) return toast("No hay vacas en producción para registrar el ordeñe.", true);
  const responsibleUsers = state.data.usuarios.filter(user => user.activo && ["ADMINISTRADOR", "ENCARGADO", "OPERARIO"].includes(user.rol));
  openDialog("Registrar ordeñe", "RF5–RF7 · HU6–HU8 · HU19", `<div class="form-grid"><label>Fecha<input name="fecha" type="date" value="${today()}" required></label><label>Turno<select name="turno"><option value="MANANA">Mañana</option><option value="TARDE">Tarde</option></select></label><label>Tanque<input name="tanque" value="T1" required></label><label>Responsable<select name="responsableId">${responsibleUsers.map(user => `<option value="${user.id}" ${user.id === state.user.id ? "selected" : ""}>${esc(user.nombreCompleto)}</option>`).join("")}</select></label><label class="full">Observaciones<textarea name="observaciones"></textarea></label></div><div class="explain-box" style="margin:18px 0">HU19 agrega automáticamente todas las vacas en producción. Los animales en tratamiento aparecen excluidos y RF7 exige conservar el motivo.</div><div class="check-list">${cows.map(cow => { const production = cow.estado === "EN_PRODUCCION"; return `<div class="check-row"><input type="checkbox" name="cow_${cow.id}" ${production ? "checked" : ""} data-exclusion-toggle aria-label="Incluir ${esc(cow.nombre || cow.caravana)}"><strong>#${esc(cow.caravana)} · ${esc(cow.nombre || "Sin nombre")}</strong><input type="text" name="reason_${cow.id}" data-exclusion-reason ${production ? "disabled" : ""} value="${production ? "" : `Estado: ${esc(COW_STATES[cow.estado])}`}" placeholder="Motivo de exclusión"></div>`; }).join("")}</div>`, async (form, formElement) => {
    const participations = cows.map(cow => {
      const included = formElement.elements[`cow_${cow.id}`].checked;
      const reason = String(form.get(`reason_${cow.id}`) || "").trim();
      if (!included && !reason) throw new Error(`Indicá el motivo de exclusión para #${cow.caravana}.`);
      return { vacaId: cow.id, participo: included, motivoExclusion: included ? "" : reason };
    });
    const milking = { id: nextId(state.data.ordenes), fecha: form.get("fecha"), turno: form.get("turno"), tanque: String(form.get("tanque")).trim(), responsableId: Number(form.get("responsableId")), observaciones: String(form.get("observaciones")).trim(), participaciones: participations, creadoEn: now() };
    state.data.ordenes.push(milking);
    await persist("ordenes");
    await audit("Ordeñe", milking.id, "Alta de ordeñe", `${milking.fecha} ${milking.turno}; ${participations.filter(p => p.participo).length} vacas incluidas`);
    renderAll(); toast("Ordeñe guardado en ordenes.json.");
  });
}

function openNewLot(milkingId) {
  if (!ensureWritable()) return;
  const available = state.data.ordenes.filter(milking => !state.data.lotes.some(lot => lot.ordeneId === milking.id));
  const chosen = milkingId || available[0]?.id;
  if (!available.length) return toast("Todos los ordeñes ya tienen un lote asociado.", true);
  openDialog("Crear lote desde ordeñe", "RF8 · HU9–HU10", `<div class="form-grid"><label class="full">Ordeñe<select name="ordeneId">${available.map(item => `<option value="${item.id}" ${item.id === chosen ? "selected" : ""}>#${item.id} · ${formatDate(item.fecha)} · ${item.turno === "MANANA" ? "Mañana" : "Tarde"} · Tanque ${esc(item.tanque)}</option>`).join("")}</select></label><label>Litros estimados<input name="litros" type="number" min="1" step="0.1" required></label><label>Código de lote<input name="codigo" value="LOT-${today().replaceAll("-", "")}-${String(nextId(state.data.lotes)).padStart(3, "0")}" required></label></div><p class="explain-box">Al crear el lote se copia una foto de las vacas incluidas y excluidas. Así, un cambio posterior en el ordeñe no altera un lote cerrado.</p>`, async form => {
    const milking = getMilking(Number(form.get("ordeneId")));
    const lot = { id: nextId(state.data.lotes), codigo: String(form.get("codigo")).trim(), ordeneId: milking.id, fechaCreacion: now(), tanque: milking.tanque, litrosEstimados: Number(form.get("litros")), estado: "PENDIENTE_ANALISIS", fechaCierre: null, creadoPorId: state.user.id, cerradoPorId: null, participaciones: milking.participaciones.map(item => ({ vacaId: item.vacaId, tipo: item.participo ? "INCLUIDA" : "EXCLUIDA", motivoExclusion: item.motivoExclusion })), calidad: { temperatura: null, grasa: null, proteina: null, celulasSomaticas: null, resultadoAntibioticos: "", observaciones: "", fechaCarga: null, cargadoPorId: null } };
    state.data.lotes.push(lot);
    await persist("lotes");
    await audit("Lote", lot.id, "Creación de lote", `${lot.codigo} generado desde ordeñe #${milking.id}`);
    renderAll(); toast("Lote creado con snapshot de participación.");
  });
}

function openQuality(id) {
  if (!ensureWritable()) return;
  const lot = getLot(id);
  if (lot.estado === "CERRADO") return toast("Un lote cerrado no puede modificarse.", true);
  const q = lot.calidad || {};
  openDialog("Propiedades de calidad", `RF9–RF10 · HU11 · ${lot.codigo}`, `<div class="form-grid"><label>Temperatura (°C)<input name="temperatura" type="number" step="0.1" value="${q.temperatura ?? ""}" required></label><label>Grasa (%)<input name="grasa" type="number" step="0.01" value="${q.grasa ?? ""}" required></label><label>Proteína (%)<input name="proteina" type="number" step="0.01" value="${q.proteina ?? ""}" required></label><label>Células somáticas<input name="celulas" type="number" min="0" value="${q.celulasSomaticas ?? ""}" required></label><label>Resultado de antibióticos<select name="antibioticos" required><option value="">Seleccionar…</option><option value="NEGATIVO" ${q.resultadoAntibioticos === "NEGATIVO" ? "selected" : ""}>Negativo</option><option value="POSITIVO" ${q.resultadoAntibioticos === "POSITIVO" ? "selected" : ""}>Positivo</option></select></label><label class="full">Observaciones<textarea name="observaciones">${esc(q.observaciones || "")}</textarea></label></div>`, async form => {
    lot.calidad = { temperatura: Number(form.get("temperatura")), grasa: Number(form.get("grasa")), proteina: Number(form.get("proteina")), celulasSomaticas: Number(form.get("celulas")), resultadoAntibioticos: form.get("antibioticos"), observaciones: String(form.get("observaciones")).trim(), fechaCarga: now(), cargadoPorId: state.user.id };
    lot.estado = isQualityComplete(lot.calidad) ? "COMPLETO" : "PENDIENTE_ANALISIS";
    await persist("lotes");
    await audit("Lote", lot.id, "Carga de calidad", `Estado actualizado a ${lot.estado}`);
    renderAll(); toast("Calidad guardada; el estado del lote fue recalculado.");
  });
}

function isQualityComplete(quality = {}) {
  return [quality.temperatura, quality.grasa, quality.proteina, quality.celulasSomaticas].every(value => value !== null && value !== undefined && value !== "") && Boolean(quality.resultadoAntibioticos);
}

async function closeLot(id) {
  if (!ensureWritable()) return;
  const lot = getLot(id);
  if (!isQualityComplete(lot.calidad)) return toast("HU21: no se puede cerrar el lote porque faltan datos de calidad.", true);
  if (lot.estado === "CERRADO") return;
  lot.estado = "CERRADO";
  lot.fechaCierre = now();
  lot.cerradoPorId = state.user.id;
  await persist("lotes");
  await audit("Lote", lot.id, "Cierre de lote", `${lot.codigo} quedó bloqueado para edición`);
  renderAll(); toast("Lote cerrado. Su trazabilidad quedó protegida.");
}

function openNewUser() {
  if (!ensureWritable()) return;
  openDialog("Crear usuario", "RF2 · HU2", `<div class="form-grid"><label>Nombre completo<input name="nombre" required></label><label>Usuario<input name="usuario" required></label><label>Correo<input name="email" type="email" required></label><label>Rol<select name="rol">${Object.entries(ROLE_LABELS).map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}</select></label><label class="full">Contraseña temporal<input name="password" type="password" minlength="6" required></label></div>`, async form => {
    const username = String(form.get("usuario")).trim().toLowerCase();
    if (state.data.usuarios.some(user => user.nombreUsuario.toLowerCase() === username)) throw new Error("Ese nombre de usuario ya existe.");
    const user = { id: nextId(state.data.usuarios), nombreUsuario: username, passwordHash: await sha256(String(form.get("password"))), nombreCompleto: String(form.get("nombre")).trim(), email: String(form.get("email")).trim(), rol: form.get("rol"), activo: true };
    state.data.usuarios.push(user);
    await persist("usuarios");
    await audit("Usuario", user.id, "Alta de usuario", `${user.nombreUsuario}; rol ${user.rol}`);
    renderAll(); toast("Usuario creado en usuarios.json.");
  });
}

async function toggleUser(id) {
  if (!ensureWritable()) return;
  const user = getUser(id);
  if (!user || user.id === state.user.id) return;
  user.activo = !user.activo;
  await persist("usuarios");
  await audit("Usuario", user.id, user.activo ? "Activación de usuario" : "Baja de acceso", user.nombreUsuario);
  renderAll(); toast(`Usuario ${user.activo ? "activado" : "desactivado"}.`);
}

async function audit(entity, entityId, action, detail) {
  const record = { id: nextId(state.data.auditoria), entidad: entity, entidadId, accion: action, detalle: detail, fechaHora: now(), usuarioId: state.user.id, usuarioNombre: currentUserName() };
  state.data.auditoria.push(record);
  await persist("auditoria");
}

function lotExport(id) {
  const lot = structuredClone(getLot(id));
  const milking = structuredClone(getMilking(lot.ordeneId));
  return {
    generadoEn: now(),
    generadoPor: currentUserName(),
    lote: { ...lot, creadoPor: getUser(lot.creadoPorId)?.nombreCompleto, cerradoPor: getUser(lot.cerradoPorId)?.nombreCompleto },
    ordene: { ...milking, responsable: getUser(milking.responsableId)?.nombreCompleto },
    animales: lot.participaciones.map(item => ({ ...item, caravana: getCow(item.vacaId)?.caravana, nombre: getCow(item.vacaId)?.nombre }))
  };
}

function downloadLotJson(id) {
  const report = lotExport(id);
  downloadBlob(`${report.lote.codigo}-trazabilidad.json`, JSON.stringify(report, null, 2), "application/json");
}

function downloadLotCsv(id) {
  const report = lotExport(id);
  const rows = [["lote", "fecha", "turno", "tanque", "responsable", "caravana", "nombre", "participacion", "motivo"], ...report.animales.map(animal => [report.lote.codigo, report.ordene.fecha, report.ordene.turno, report.lote.tanque, report.ordene.responsable, animal.caravana, animal.nombre, animal.tipo, animal.motivoExclusion])];
  const csv = rows.map(row => row.map(value => `"${String(value ?? "").replaceAll('"', '""')}"`).join(",")).join("\n");
  downloadBlob(`${report.lote.codigo}-trazabilidad.csv`, csv, "text/csv;charset=utf-8");
}

function downloadBlob(name, content, type) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const link = document.createElement("a");
  link.href = url; link.download = name; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function createBackup() {
  if (!ensureWritable() || !hasRole("ADMINISTRADOR")) return;
  const stamp = now().replaceAll(":", "-").replaceAll(".", "-");
  await audit("Sistema", 0, "Respaldo manual", `Respaldo creado por ${currentUserName()}`);
  const fileName = `respaldo-tambotrace-${stamp}.json`;
  const fileHandle = await state.directoryHandle.getFileHandle(fileName, { create: true });
  await writeHandle(fileHandle, {
    metadata: { creadoEn: now(), creadoPor: currentUserName(), formato: "TamboTrace demo v1" },
    datos: state.data
  });
  renderAll();
  toast(`Respaldo creado: ${fileName}`);
}

function toggleSidebar() {
  const open = !$("#sidebar").classList.contains("is-open");
  $("#sidebar").classList.toggle("is-open", open);
  $("#sidebarScrim").hidden = !open;
  $("#menuButton").setAttribute("aria-expanded", String(open));
}

function closeSidebar() {
  $("#sidebar").classList.remove("is-open");
  $("#sidebarScrim").hidden = true;
  $("#menuButton").setAttribute("aria-expanded", "false");
}

function toast(message, error = false) {
  const node = document.createElement("div");
  node.className = `toast ${error ? "toast--error" : ""}`;
  node.textContent = message;
  $("#toastRegion").append(node);
  setTimeout(() => node.remove(), 4300);
}
