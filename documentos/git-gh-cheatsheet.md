# Git + GitHub CLI (`gh`) Cheatsheet

> A practical, copy-ready command reference for everyday Git and GitHub work.

---

## Quick navigation

[Setup](#1-one-time-setup) · [Start a repository](#2-start-a-repository) · [Daily workflow](#3-the-everyday-workflow) · [Inspect changes](#4-inspect-your-work) · [Branches](#5-branches) · [Remotes](#6-remotes-and-synchronization) · [Undo](#7-undo-without-panic) · [Stash](#8-temporarily-shelve-work) · [Conflicts](#9-resolve-merge-conflicts) · [`gh` repositories](#10-github-repositories-with-gh) · [Pull requests](#11-pull-requests) · [Issues](#12-issues) · [Actions](#13-github-actions) · [Releases](#14-releases) · [Search](#15-search-github) · [Workflows](#16-copy-ready-workflows) · [Troubleshooting](#17-common-problems)

---

## Git or `gh`?

| Tool | Use it for | Examples |
|---|---|---|
| **`git`** | Local version control and repository synchronization | Stage, commit, branch, merge, fetch, pull, push |
| **`gh`** | GitHub features from the terminal | Authenticate, create repositories, manage PRs/issues, inspect Actions |

> **Memory aid:** Git manages the code history. `gh` manages GitHub.

### Placeholder legend

| Placeholder | Replace with |
|---|---|
| `<branch>` | A branch name, such as `feature/login` |
| `<file>` | A file path, such as `src/app.py` |
| `<commit>` | A commit hash, such as `a1b2c3d` |
| `<owner>/<repo>` | A GitHub repository, such as `octocat/hello-world` |
| `<number>` | An issue, PR, or run number |

---

# 1. One-time setup

## Install Git and GitHub CLI

| Platform | Commands |
|---|---|
| macOS with Homebrew | `brew install git gh` |
| Windows with WinGet | `winget install --id Git.Git -e`<br>`winget install --id GitHub.cli -e` |
| Ubuntu / Debian | `sudo apt update`<br>`sudo apt install git gh` |

For alternative or distribution-specific methods, see the official [Git installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [`gh` installation instructions](https://github.com/cli/cli#installation).

## Check the clients

```bash
git --version
gh --version
```

## Configure your Git identity

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

Review the active configuration:

```bash
git config --global --list
git config --list --show-origin
```

## Configure line endings

Choose the command for your operating system:

```bash
# macOS / Linux
git config --global core.autocrlf input

# Windows
git config --global core.autocrlf true
```

## Authenticate GitHub CLI

```bash
gh auth login
gh auth status
gh auth setup-git
```

Useful account commands:

```bash
gh auth switch
gh auth logout
```

---

# 2. Start a repository

## Clone an existing GitHub repository

```bash
gh repo clone <owner>/<repo>
cd <repo>
```

Traditional Git equivalent:

```bash
git clone https://github.com/<owner>/<repo>.git
```

## Create a new local repository

```bash
mkdir my-project
cd my-project
git init
```

After adding project files:

```bash
git add .
git commit -m "Initial commit"
```

## Publish the current folder to GitHub

```bash
gh repo create my-project --private --source=. --remote=origin --push
```

Change `--private` to `--public` when appropriate.

## Create, clone, and enter a new GitHub repository

```bash
gh repo create my-project --public --clone
cd my-project
```

---

# 3. The everyday workflow

```bash
git status
git switch -c feature/short-description

# Edit files

git diff
git add <file>
git commit -m "Add a concise description"
git push -u origin feature/short-description
gh pr create --fill
```

### The short version

```text
Edit → Inspect → Stage → Commit → Push → Pull request
```

> Run `git status` frequently. It explains the repository state and often suggests the next command.

---

# 4. Inspect your work

## Repository status

| Goal | Command |
|---|---|
| Show branch and file states | `git status` |
| Compact status | `git status --short` |
| Show current branch | `git branch --show-current` |
| Show tracked files | `git ls-files` |

## Compare changes

| Goal | Command |
|---|---|
| Unstaged changes | `git diff` |
| Staged changes | `git diff --staged` |
| Changes in one file | `git diff -- <file>` |
| Compare two branches | `git diff <branch-1>...<branch-2>` |
| Summary of changed files | `git diff --stat` |
| Word-level changes | `git diff --word-diff` |

## Read history

```bash
git log --oneline --decorate --graph --all
git log -5
git log -- <file>
git show <commit>
git blame <file>
```

A compact, colorful graph alias:

```bash
git config --global alias.lg "log --graph --oneline --decorate --all"
git lg
```

---

# 5. Branches

## Create and move between branches

| Goal | Command |
|---|---|
| List local branches | `git branch` |
| List local and remote branches | `git branch --all` |
| Create and switch | `git switch -c <branch>` |
| Switch branch | `git switch <branch>` |
| Return to previous branch | `git switch -` |
| Rename current branch | `git branch -m <new-name>` |

## Merge a branch

```bash
git switch main
git pull --ff-only
git merge <branch>
git push
```

## Delete branches

```bash
# Delete a merged local branch
git branch -d <branch>

# Force-delete an unmerged local branch — verify first
git branch -D <branch>

# Delete a remote branch
git push origin --delete <branch>
```

## Update your branch from `main`

### Merge: preserves the existing history

```bash
git fetch origin
git switch <branch>
git merge origin/main
```

### Rebase: produces a linear history

```bash
git fetch origin
git switch <branch>
git rebase origin/main
```

> Rebasing rewrites commit identities. Avoid rebasing a shared branch unless your team explicitly uses that workflow.

---

# 6. Remotes and synchronization

## Inspect and manage remotes

| Goal | Command |
|---|---|
| List remotes and URLs | `git remote -v` |
| Add a remote | `git remote add origin <url>` |
| Change a remote URL | `git remote set-url origin <url>` |
| Show remote details | `git remote show origin` |
| Remove a remote | `git remote remove <name>` |

## Download and integrate changes

| Command | What it does |
|---|---|
| `git fetch origin` | Downloads remote history without changing your branch |
| `git fetch --all --prune` | Updates all remotes and removes stale remote references |
| `git pull --ff-only` | Fetches and updates only when no merge commit is required |
| `git pull --rebase` | Fetches and rebases local commits onto the remote branch |

## Upload commits

```bash
# First push of a branch: set its upstream
git push -u origin <branch>

# Later pushes
git push
```

Inspect tracking information:

```bash
git branch -vv
```

> Prefer a normal `git push`. If rewritten history must be pushed, `git push --force-with-lease` is safer than `--force` because it checks for unexpected remote changes.

---

# 7. Undo without panic

## Choose the right level

| Situation | Command | Effect |
|---|---|---|
| Discard unstaged changes in one file | `git restore <file>` | Replaces the working copy with the indexed version |
| Unstage a file | `git restore --staged <file>` | Keeps the file changes |
| Restore a deleted tracked file | `git restore <file>` | Recreates it from the index |
| Correct the latest local commit | `git commit --amend` | Replaces the latest commit |
| Undo a shared commit safely | `git revert <commit>` | Adds a new inverse commit |
| Remove last commit, keep changes staged | `git reset --soft HEAD~1` | Moves `HEAD`; preserves index and files |
| Remove last commit, keep changes unstaged | `git reset HEAD~1` | Moves `HEAD`; preserves files |
| Find lost branch/commit positions | `git reflog` | Shows recent `HEAD` movements |

## Amend the latest commit

```bash
# Add a forgotten file without changing the message
git add <file>
git commit --amend --no-edit

# Edit the latest commit message
git commit --amend
```

## Revert a published commit

```bash
git revert <commit>
git push
```

## Recover a commit using the reflog

```bash
git reflog
git switch -c recovery/<name> <commit>
```

> [!CAUTION]
> `git reset --hard` permanently discards tracked working-tree and staged changes. Check `git status` and create a backup branch or stash before using it.

```bash
# Destructive: make tracked files exactly match HEAD
git reset --hard HEAD
```

---

# 8. Temporarily shelve work

```bash
# Save tracked changes with a label
git stash push -m "Work in progress"

# Also include untracked files
git stash push -u -m "Work in progress"

# List saved stashes
git stash list

# Inspect the newest stash
git stash show --patch

# Apply and keep it in the stash list
git stash apply

# Apply and remove it from the stash list
git stash pop

# Apply a particular stash
git stash apply stash@{2}

# Delete one stash
git stash drop stash@{0}
```

---

# 9. Resolve merge conflicts

## Conflict workflow

```bash
git status
```

Open each conflicted file and resolve markers like:

```text
<<<<<<< HEAD
Your version
=======
Incoming version
>>>>>>> other-branch
```

Then stage the resolved files and continue:

```bash
git add <resolved-file>
```

| Operation in progress | Continue | Cancel |
|---|---|---|
| Merge | `git commit` | `git merge --abort` |
| Rebase | `git rebase --continue` | `git rebase --abort` |
| Cherry-pick | `git cherry-pick --continue` | `git cherry-pick --abort` |

Useful conflict commands:

```bash
git diff --name-only --diff-filter=U
git diff
```

---

# 10. GitHub repositories with `gh`

## View and browse

```bash
gh repo view
gh repo view --web
gh repo view <owner>/<repo>
gh browse
```

## Create and clone

```bash
gh repo create
gh repo create my-project --private --clone
gh repo clone <owner>/<repo>
```

## Fork and synchronize

```bash
gh repo fork <owner>/<repo> --clone
gh repo sync
```

## List repositories

```bash
gh repo list
gh repo list <owner> --limit 100
gh repo list --source
gh repo list --fork
```

## Target a repository from anywhere

Most `gh` commands accept:

```bash
-R <owner>/<repo>
```

Example:

```bash
gh pr list -R <owner>/<repo>
```

---

# 11. Pull requests

## Create a pull request

```bash
# Interactive
gh pr create

# Use commit information
gh pr create --fill

# Create a draft
gh pr create --draft --fill

# Fully specified
gh pr create \
  --base main \
  --title "Add login validation" \
  --body "Explains the change and its tests." \
  --reviewer <username>
```

Link and automatically close an issue when the PR merges:

```bash
gh pr create --title "Fix login error" --body "Closes #42"
```

## Inspect pull requests

| Goal | Command |
|---|---|
| Your PR overview | `gh pr status` |
| List open PRs | `gh pr list` |
| View a PR | `gh pr view <number>` |
| Open a PR in the browser | `gh pr view <number> --web` |
| Show the diff | `gh pr diff <number>` |
| Show checks | `gh pr checks <number>` |
| Watch checks | `gh pr checks <number> --watch` |
| Check out a PR locally | `gh pr checkout <number>` |

## Review pull requests

```bash
gh pr review <number> --approve
gh pr review <number> --comment
gh pr review <number> --request-changes
gh pr comment <number> --body "Please add a test for this case."
```

## Update and merge

```bash
gh pr update-branch <number>
gh pr ready <number>

# Choose the merge method your project uses
gh pr merge <number> --merge
gh pr merge <number> --squash --delete-branch
gh pr merge <number> --rebase --delete-branch
```

---

# 12. Issues

## Create issues

```bash
gh issue create
gh issue create --title "Login fails on Safari" --body "Steps to reproduce..."
gh issue create --title "Update documentation" --assignee @me --label documentation
```

## Find and inspect issues

```bash
gh issue list
gh issue list --assignee @me
gh issue list --label bug
gh issue view <number>
gh issue view <number> --web
```

## Update and close issues

```bash
gh issue edit <number> --add-assignee @me
gh issue comment <number> --body "The fix is ready for review."
gh issue close <number> --comment "Resolved by #57."
gh issue reopen <number>
```

---

# 13. GitHub Actions

## Runs

```bash
gh run list
gh run view <run-id>
gh run view <run-id> --log
gh run watch <run-id>
gh run rerun <run-id> --failed
gh run cancel <run-id>
```

## Workflows

```bash
gh workflow list
gh workflow view <workflow>
gh workflow run <workflow>
gh workflow run <workflow> --ref <branch>
```

Download artifacts from a run:

```bash
gh run download <run-id>
```

---

# 14. Releases

```bash
# List and inspect
gh release list
gh release view <tag>

# Create a release with generated notes
gh release create <tag> --generate-notes

# Create a release and upload files
gh release create <tag> ./dist/* --title "<tag>" --generate-notes

# Download release assets
gh release download <tag>
```

Typical tag workflow:

```bash
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
gh release create v1.0.0 --generate-notes
```

---

# 15. Search GitHub

```bash
gh search repos "<keywords>"
gh search code "<text>" --repo <owner>/<repo>
gh search issues "<keywords>" --state open
gh search prs "<keywords>" --author @me
```

Request structured output with selected fields:

```bash
gh pr list --json number,title,author,state
gh issue list --json number,title,labels --jq '.[] | [.number, .title] | @tsv'
```

Use the GitHub API when a dedicated command is unavailable:

```bash
gh api repos/<owner>/<repo>
gh api repos/<owner>/<repo>/contributors --paginate
```

---

# 16. Copy-ready workflows

## A. Make a change and open a PR

```bash
git switch main
git pull --ff-only
git switch -c feature/<short-name>

# Edit and test

git status
git diff
git add .
git diff --staged
git commit -m "Add <short description>"
git push -u origin feature/<short-name>
gh pr create --fill
```

## B. Update your feature branch

```bash
git fetch origin
git switch feature/<short-name>
git rebase origin/main

# If conflicts occur:
# edit → git add <file> → git rebase --continue

git push --force-with-lease
```

> Use the final push only when the branch was previously pushed and the rebase changed its history.

## C. Fix the latest commit before pushing

```bash
git add <forgotten-file>
git commit --amend --no-edit
```

## D. Undo a published change

```bash
git pull --ff-only
git revert <commit>
git push
```

## E. Contribute through a fork

```bash
gh repo fork <owner>/<repo> --clone
cd <repo>
git switch -c fix/<short-name>

# Edit, test, stage, and commit

git add .
git commit -m "Fix <short description>"
git push -u origin fix/<short-name>
gh pr create --fill
```

## F. Save unfinished work and handle an urgent task

```bash
git stash push -u -m "WIP before urgent task"
git switch main
git pull --ff-only
git switch -c fix/urgent-task

# Complete and commit the urgent task, then return:

git switch <previous-branch>
git stash pop
```

---

# 17. Common problems

| Message or symptom | Likely cause | What to try |
|---|---|---|
| `not a git repository` | You are outside the project | `pwd`, `ls -la`, then `cd <repo>` |
| `nothing to commit` | Changes are absent, ignored, or already committed | `git status`, `git diff`, `git check-ignore -v <file>` |
| `non-fast-forward` push rejected | The remote has commits you lack | `git pull --rebase`, resolve if needed, then `git push` |
| `detached HEAD` | You checked out a commit rather than a branch | `git switch -c recovery/<name>` |
| Merge/rebase appears stuck | Conflicts or an editor is awaiting input | `git status`; resolve and continue or abort |
| `gh` cannot find a repository | You are outside a repository | Add `-R <owner>/<repo>` or `cd` into the repository |
| Authentication failed | Account, token, or protocol issue | `gh auth status`, then `gh auth login` |
| Wrong GitHub account | Multiple accounts are configured | `gh auth switch` |
| Accidentally deleted a branch | Its commit may still be reachable | `git reflog`, then `git switch -c recovery/<name> <commit>` |

## Ignore files

Create a `.gitignore` in the repository root:

```gitignore
# Secrets and local configuration
.env
*.pem

# Dependencies
node_modules/
.venv/

# Build and cache output
dist/
build/
__pycache__/

# Operating-system files
.DS_Store
Thumbs.db
```

> Never commit credentials, API keys, private keys, or production `.env` files. Adding a file to `.gitignore` does not erase it from existing Git history.

---

# 18. High-value help commands

```bash
git help <command>
git <command> --help
git <command> -h

gh help
gh <command> --help
gh help environment
gh help formatting
```

Examples:

```bash
git rebase --help
gh pr create --help
```

---

## Command safety scale

| Level | Examples | Guidance |
|---|---|---|
| 🟢 Inspect | `status`, `diff`, `log`, `show`, `gh ... list/view` | Safe: reads state |
| 🔵 Normal change | `add`, `commit`, `switch`, `pull`, `push`, `merge` | Review status before and after |
| 🟠 History change | `commit --amend`, `rebase`, `reset`, force-delete branch | Understand who shares the commits |
| 🔴 Destructive | `reset --hard`, `clean -fd`, `push --force` | Back up first; prefer safer alternatives |

---

## Official references

- [Git reference manual](https://git-scm.com/docs)
- [GitHub CLI manual](https://cli.github.com/manual/)
- [GitHub CLI examples](https://cli.github.com/manual/examples)
- [GitHub documentation](https://docs.github.com/)

---

<p align="center"><strong>Inspect first · Commit small changes · Write clear messages · Push deliberately</strong></p>
