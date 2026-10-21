# Zenoti Issue Tracker

A one-page tracker for Zenoti issues, built on the prioritization workbook (`Zenoti_Future_Prioritization.xlsx`): the same priority framework, escalation clauses E01–E15 and tagging standard, with an intake form for adding and editing issues.

| File | What it is |
|---|---|
| `index.html` | The tracker. Open it in a browser; no server or install needed. |
| `issues.js` | The data: all issues plus the rule tables. This is the file you update and commit. |
| `README.md` | This guide. |

## Keep it private

This data includes internal incidents and revenue figures.

- Put it in a **private** repository.
- **GitHub Pages sites are public on the internet, even when the repository is private.** The only exception is GitHub Enterprise Cloud with private Pages turned on. If your organization doesn't have that, don't enable Pages. Clone or download the repository and open `index.html` on your computer instead.
- Check your company's policy before storing Planet Fitness / Zenoti operational data on GitHub.

## Set up

1. Create a private repository and upload the three files with **Add file → Upload files**, then commit.
2. To use it, clone or download the repository and double-click `index.html`. It works offline.
   If your organization has private Pages: **Settings → Pages → Deploy from a branch → `main` / root**.

## Everyday use

- **Add an issue:** **+ New issue** opens the intake form (fields marked * are required). Then **Save issue**.
- **Update an issue:** click its row. Use **Activity log → Add update** for each substantive update; this also sets *Last substantive update*, which drives the cadence and E15 checks.
- **Keep your changes:** edits are saved in your browser first, and a banner counts the unsaved changes. Click **Save data file** to download a new `issues.js`, then upload it to the repository (it replaces the old file) and commit with a message such as `Update FPT-023 owner and priority`. The git history becomes your audit trail.
- **Two computers or two people:** pull the latest `issues.js` before you edit. If the file in the folder is newer than your unsaved browser edits, the page warns you and lets you choose which copy to keep.
- **Excel:** **More → Export CSV** exports every field plus the calculated columns.
- **Restore from a file:** **More → Import data file** loads any saved `issues.js`.

## How the rules are applied

- **Final priority** is the higher of *Base* and *Override*. An override can only raise an issue; to lower one, change its base.
- **Rule suggestion** is the base priority raised by the single strongest clause that applies (clauses don't stack). When the suggestion is above the final priority, the row shows **▲ Rules: …** so you can apply it with one click or remove the clause.
- **Automatic clauses** are applied from dates and answers, so you don't tick them by hand:
  - E05: last agent response more than 1 business day ago
  - E07: business deadline 4–7 days away
  - E08: business deadline 3 days away or less, or already passed
  - E13: workaround = No
  - E15: no substantive update for more than 5 business days
- **Update status** compares the last substantive update with the cadence for the final priority:

  | Priority | Cadence | Overdue when |
  |---|---|---|
  | Prioritary | Every 2 hours | last update was before today |
  | Urgent | Daily | more than 1 business day ago |
  | Important | Every 2 business days | more than 2 business days ago |
  | Relevant | Weekly | more than 7 days ago |
  | Preferable | Biweekly | more than 14 days ago |

  Business days are Monday to Friday. Mexican public holidays are not excluded.
- The primary function (BILLING, MEMBERSHIP…) is added to the tags automatically, matching the register's convention.

## Changing the lists

Statuses, functions, tags, clauses and the priority framework are stored in the `config` section of `issues.js`. To add a tag such as `VENDOR-FISERV`, add an entry to `config.tags`, commit, and reload the page.

## Starter data (21 issues)

- 18 issues from the Issue Register sheet, imported unchanged.
- INC-001 *Collections Failure* and INC-005 *Duplicate Charges*: resolved incidents from the Incident Timeline Report, kept as history (filter **Status → Resolved only**).
- TBD-001 *Annual Fee Logic Defect*: listed only in the Expanded Incident Report, with no ID, date or status, so it needs intake.

Because the priorities were imported as-is, 14 issues show **▲ Rules** (see the *Review Notes* sheet in the reviewed workbook), and all 19 open issues show *No update logged* until a last-update date is entered.
