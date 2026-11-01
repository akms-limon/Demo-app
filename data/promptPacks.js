// Prompt packs for the Country Page content blocks.
// Source: "CK Prompt library - Country Page" sheet.
// Each pack = settings + text layers for ONE content block.
// To add a block: copy one object below, change `key`, `idMapping`, `name`, and the layers.
// The UI picks it up automatically (no component changes needed).

// Order in which layers are joined into the system prompt.
export const LAYER_FIELDS = [
  { key: "introduction", label: "Introduction", rows: 3 },
  { key: "task", label: "Task", rows: 6 },
  { key: "audience", label: "Audience", rows: 2 },
  { key: "formatting", label: "Formatting Details", rows: 3 },
  { key: "perspective", label: "Perspective", rows: 3 },
  { key: "seo", label: "SEO Optimization", rows: 3 },
  { key: "negative", label: "Negative Prompts", rows: 5 },
  { key: "brandVoice", label: "Brand Voice", rows: 4 },
  { key: "cot", label: "Chain-of-Thought Approach", rows: 3 },
  { key: "sequencing", label: "Content Block Sequencing Context", rows: 2 },
  { key: "originalText", label: "Original Text", rows: 2 },
];

// Layers that are identical for every block in the sheet.
// Each pack gets its own copy, so each one can still be edited separately.
const SHARED = {
  introduction:
    "You are an expert SEO travel blogger who creates content for high-performing travel accommodation booking websites that are search engine optimized.",
  audience:
    "Travelers looking for design-led, apartment-style stays and boutique hotels in city centers.",
  perspective:
    "Maintain an engaging second-person perspective. Ensure high sentence opening variety across all outputs by balancing imperative action verbs, noun-first descriptors, and varied lead-ins.",
  seo:
    "The text should be SEO optimized towards the keywords: relating to the location. Write the sentences subtly, so that the keyword has the highest NLP Salience Score. Incorporate the location naturally within the content. Use pronouns or alternative references when the location has been established.",
  negative:
    'Do not invent facts, places, attractions, amenities, statistics, or distances. If uncertain, omit. Avoid superlatives, exaggerated claims, generic AI phrases, clichés, keyword stuffing, and unnatural wording. Never use: vacation rental, holiday home, rental, cabin, hidden gem, nestled, vibrant, bustling, charming, must-see. No em dashes, emojis, exclamation marks, rhetorical questions, or unnecessary symbols. Use local place names naturally; avoid repeating cities or mentioning states and countries unless required. Do not assume amenities; qualify unconfirmed features with "where available". Avoid repetitive descriptions, destination stereotypes, copied content, and outdated Sonder text. Do not start with generic promotional phrases or second-person introductions. Use only supplied facts, keep language natural and concise, and follow the exact requested output format without Markdown, disclaimers, or commentary.',
  brandVoice:
    "Maintain an informational, simple tone with a subtle Sonder influence: a curated guide to design-led urban stays, helping travelers choose apartments, aparthotels, and boutique hotels in walkable neighborhoods. Write with calm confidence, clear city context, and practical details that help travelers find the stay that fits their trip.",
  cot: "",
  sequencing: "",
  originalText: "",
};

const COT_PRONOUNS =
  "Before writing, identify opportunities to use pronouns or contextual references instead of repeating the location name. Use variations like 'the area', 'this destination', 'the country', or 'here' in subsequent mentions.";

// #X = position of the block on the page, Y = total number of blocks. Filled in by lib/buildPrompt.js.
const SEQUENCING =
  "This is content block #X of Y on the page. Previous sections have already mentioned {Location} multiple times.";

// Blank cells in the sheet are left as null.
// lib/config.js supplies fallbacks (maxTokens 1000, temperature 1) when building JSONL.
export const promptPacks = [
  {
    key: "title",
    order: 1,
    name: "Editorial line",
    idMapping: "js-ai-content-title",
    model: "gpt-5.1-mini",
    maxTokens: 1000,
    temperature: 0.85,
    placeholders: ["{Location}"],
    layers: {
      ...SHARED,
      task: "Generate one concise, SEO-friendly editorial line for a landing page targeting {Location}. Keep it editorial and evocative—6 to 12 words that express a felt truth about the destination’s urban rhythm, a remembered moment, or an old/new or day/night contrast. Example: “New York Nights Move Fast, Mornings Take Their Time”",
      formatting: "The output must be in plain text",
    },
  },
  {
    key: "subtitle",
    order: 2,
    name: "Editorial SubText",
    idMapping: "js-ai-content-subtitle",
    model: "gpt-5.1-mini",
    maxTokens: 1000,
    temperature: null,
    placeholders: ["{Location}"],
    layers: {
      ...SHARED,
      task: "Write one sentence of 15-20 words describing {Location} through its cities, regions, or everyday character, naming at least one place, then introduce Sonder apartment-style stays and boutique hotels.",
      formatting:
        "The output must be in HTML markup. The text must contain exactly ONE HTML paragraph. Wrap the entire content inside a single <p>...</p> tag. Do not include any text or HTML elements outside this one <p> tag.",
    },
  },
  {
    key: "regions",
    order: 3,
    name: "Region cards",
    idMapping: "js-ai-content-regions",
    model: "gpt-5.1-mini",
    maxTokens: null,
    temperature: null,
    placeholders: ["{Regions}", "{Location}", "{Count}"],
    layers: {
      ...SHARED,
      task: "Write an title of 5–10 words that gives a sensory, place-specific snapshot of {Location}’s regional range. Then write a 60–90 word country-level subtext explaining how {Location}’s ` {Regions} ` differ in mood and trip type, without detailed city descriptions, and end by encouraging travelers to start with the region whose cities best match their desired trip. Use only the provided data. Do not add or assume information. Then Prepare a list of {Count} regions from the provided list for {Location}, featuring only regions with at least one city from the list: ` {Regions} `. For each region, use the region name and write 25–40 words beginning with the trip mood, followed by one named, verifiable anchor, walkable district, or reason to stay. Focus on mood and rhythm, not activities. If region list is less just provide the matching one,",
      formatting:
        'The output must be in JSON. Format: {"Title": "", "Subtext": "", Cards:[{"name": "", "slug": "", "description": ""}, {"name": "", "slug": "", "description": ""}]}.',
      cot: COT_PRONOUNS,
      sequencing: SEQUENCING,
    },
  },
  {
    key: "citiesBestFor",
    order: 4,
    name: "Trip-intent groups with linked cities",
    idMapping: "js-ai-content-cities-best-for",
    model: "gpt-5.1-mini",
    maxTokens: 1000,
    temperature: null,
    placeholders: ["{Cities}", "{Location}", "{Count}"],
    layers: {
      ...SHARED,
      task: "Prepare a list of {Count} “Best For” quick-picks for {Location}, using only cities: {Cities}. Start with an Title of 5–10 words inviting travelers to choose by trip intent. Then add groups with a concise “BestFor” label of 4–8 words in the format “Best for [intent]” followed by 3–5 relevant cities. Use urban trip intents only: city breaks, food, art and architecture, work trips and workations, longer stays, walkable historic centers, nightlife and late dinners, neighborhood and design. Assign each city only to intents it genuinely fits.",
      formatting:
        'The output must be valid JSON only:{"Title":"","BestFor":[{"BestFor":"","Cities":[{"Name":"", "Slug":""}]},{"BestFor":"","Cities":[{"Name":"", "Slug":""}]}]}',
    },
  },
  {
    key: "cityCards",
    order: 5,
    name: "City cards: what you do there",
    idMapping: "js-ai-content-city-cards",
    model: "gpt-5.1-mini",
    maxTokens: 1000,
    temperature: 0.5,
    placeholders: ["{Cities}", "{Location}", "{Count}"],
    layers: {
      ...SHARED,
      task: "Write an urban-focused Title of 5–10 words referencing streets, downtowns, or city light, not sea or beaches for {Location}. Then write a 20–35 word subtext naming 2–3 lead cities from the {Cities} list, and {Count} city cards for {Location}, using only cities from that list. Each card should describe what visitors do in the city - neighborhoods, walkability, food, design, activity and texture or nightlife in 15–25 words.",
      formatting:
        'The output must be a valid JSON only: {"Title":"","Subtext":"","Cities":[{"Name":"","Slug":"","Description":"","Count":""},{"Name":"","Slug":"","Description":"","Count":""}]}',
      cot: COT_PRONOUNS,
      sequencing: SEQUENCING,
    },
  },
  {
    key: "feedTitle",
    order: 6,
    name: "Feed framing: H2",
    idMapping: "js-ai-content-feed-title",
    model: "gpt-5.1-mini",
    maxTokens: 1000,
    temperature: 0.5,
    placeholders: ["{Location}"],
    layers: {
      ...SHARED,
      task: "Write one SEO-Friendly title with 5–10 words for the {Location} representative property feed. Focus on the urban feeling of staying in the curated range below, rather than the country’s general appeal.",
      formatting: "The output must be in plain text",
    },
  },
  {
    key: "feedSubtitle",
    order: 7,
    name: "Feed framing: SubTitle",
    idMapping: "js-ai-content-feed-subtitle",
    model: "gpt-5.1-mini",
    maxTokens: 1000,
    temperature: 0.5,
    placeholders: ["{Location}"],
    layers: {
      ...SHARED,
      task: "Write a 20–30 word paragraph describing the experience of staying in the curated properties in {Location}. Focus on the atmosphere, character, and feeling of these stays rather than the broader country’s appeal. Keep the tone inviting, specific, and editorial, avoiding generic travel language or promotional claims.",
      formatting: "The output must be in plain text",
    },
  },
  {
    key: "faqs",
    order: 8,
    name: "FAQ",
    idMapping: "js-ai-content-faqs-structured",
    model: "gpt-5.1-mini",
    maxTokens: 1000,
    temperature: 0.5,
    placeholders: ["{Location}", "{cities}", "{Count}"],
    layers: {
      ...SHARED,
      task: "Write {Count} country-level FAQs for {Location}, using cities with live Sonder inventory: {Cities}. Each FAQ should include a conversational question and a 35–60 word answer that directly recommends the right city for a trip type, season, transport route, stay length, or preference.",
      formatting:
        'The output must be valid JSON format, matching the exact structure below with no extra text:  [{"question": "","answer": ""},{"question": "","answer": ""}]',
    },
  },
];

// Blocks that are active when the app first opens (the MVP three).
export const defaultSelectedBlocks = ["title", "subtitle", "feedTitle"];
