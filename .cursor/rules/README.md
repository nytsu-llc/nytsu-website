# Cursor Rules for Nytsu Website

This folder holds **Cursor-specific** rule files. The actual project rules that work across **multiple AI tools** (Cursor, Copilot, Claude, etc.) live in one place:

## Single source of truth: `PROJECT_RULES.md`

- **Repo root:** **`PROJECT_RULES.md`** — Edit this file to change rules for the whole project.
- **Cursor:** `project.mdc` in this folder tells Cursor to follow `PROJECT_RULES.md` and gives a short summary.
- **GitHub Copilot:** `.github/copilot-instructions.md` points to `PROJECT_RULES.md` and summarizes it.
- **Claude / others:** Include or reference `PROJECT_RULES.md` in your context or custom instructions.

So: **one rule file, many models.** Change rules only in `PROJECT_RULES.md`.

## How Cursor uses this folder

- **`.mdc` files** = Cursor rule files (Markdown + YAML frontmatter).
- **`project.mdc`** = “follow PROJECT_RULES.md” + short summary; `alwaysApply: true` so it runs in every chat.

## Adding more Cursor-only rules (optional)

You can add extra `.mdc` files here for Cursor-only behavior (e.g. when to apply a rule). For rules you want **all** assistants to follow, still put them in **`PROJECT_RULES.md`**.
