# Country Page JSONL builder

A Next.js (App Router) + React app that prepares a `.jsonl` file for Country Page content generation.
Each line is one AI job for one (location x content block) pair. The app does not call OpenAI and has no file upload. Everything lives in the project.

## 1. Install and run

Needs Node.js 18.18 or newer.

```bash
npm install
npm run dev        # open http://localhost:3000
```

Production check:

```bash
npm run build
npm start
```

## 2. Where the data lives

| What | File |
| --- | --- |
| Prompt packs (all 8 Country Page blocks: ID Mapping, model, tokens, temperature, every text layer) | `data/promptPacks.js` |
| Location placeholder records (5 samples: USA, Italy, Spain, France, Japan) | `data/locations.js` |
| Default model fallbacks, fixed body fields, custom_id separator | `lib/config.js` |

To add a block or a location, copy an object in the data file and change its values. The UI picks it up with no component changes.

Blank cells in the sheet (for example Max Tokens for Region cards, Temperature for SubText) are `null` in the data. When building JSONL they fall back to `maxTokens = 1000` and `temperature = 1` (see `lib/config.js`).

## 3. Main components

| Component | What it does |
| --- | --- |
| `app/page.js` | Holds all shared state and passes data and callbacks down as props. |
| `BlockSelector` | Checkboxes for which content blocks are in this run. |
| `LocationSelector` | Checkboxes for which locations are in this run. |
| `CheckList` | Small reusable checkbox list used by both selectors. |
| `PromptPackEditor` | Tabs per block. Edit ID Mapping, Model, Max tokens, Temperature and all 11 text layers. |
| `LocationEditor` | Edit id, Location, slugs, Count, Regions, Cities. Add or remove locations. |
| `PromptPreview` | Shows the final system prompt for the active block and location. Filled placeholders are green, missing ones red. |
| `JsonlOutput` | Shows one line per selected pair, warns about problems, and offers Copy and Download. |

Logic is kept out of the components:

- `lib/buildPrompt.js` joins the layers and fills placeholders.
- `lib/buildJsonl.js` builds `custom_id`, the request body and the final JSONL text.

## 4. How the UI stays dynamic

`app/page.js` keeps the packs, locations, selections and active items in React state. The preview and the JSONL are not stored. They are recalculated from that state on every render (`useMemo` for the jobs). So:

- Edit Task or any setting: the preview and the matching JSONL lines change at once.
- Tick or untick a block or location: lines are added or removed.
- Change a location value: `{Location}` and `custom_id` update for that location.
- Add a pack or location in the data files: every component lists and uses it.

## 5. How to prepare the JSONL

1. Tick the content blocks you want (left side).
2. Tick the locations you want.
3. Optionally edit prompts or location values and check the Prompt preview.
4. Read the JSONL output panel. If a red box appears, fix the listed problem first.
5. Click Download .jsonl (saves `country-page-batch.jsonl`) or Copy.

Lines are ordered location by location, with blocks in page order. 2 locations x 3 blocks = 6 lines.

How a line is built:

- System message = non-empty layers joined with a new line, in this order: Introduction, Task, Audience, Formatting Details, Perspective, SEO Optimization, Negative Prompts, Brand Voice, Chain-of-Thought, Content Block Sequencing, Original Text.
- `{Location}`, `{Regions}`, `{Cities}` (also `{cities}`) and `{Count}` are replaced from the location record.
- In the Sequencing layer, `#X of Y` becomes the block's position on the page and the total number of blocks, for example `#3 of 8`.
- `model`, `temperature` and `max_completion_tokens` come from the pack.
- The user message is an empty string. `method` is always `POST` and `url` is always `/v1/chat/completions`.
- A warning shows if any `{placeholder}` is left unfilled, so a bad file is easy to spot.

## 6. custom_id

```
{id}~*~{ID Mapping}~*~{slugs}
```

| Part | Meaning | Comes from |
| --- | --- | --- |
| `{id}` | Location / page id | `id` in the location record |
| `{ID Mapping}` | Content block id | `idMapping` in the prompt pack |
| `{slugs}` | Page path pieces, shown as a list | `slugs` in the location record |

Parts are joined with `~*~`. Example for USA and the editorial line:

```
242~*~js-ai-content-title~*~['usa']
```

The system that reads the results later uses this label to match each answer to the right page and block.

## Out of scope

No OpenAI calls, no final page copy, no Excel/CSV upload.
