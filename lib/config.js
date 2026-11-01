// Fallbacks used when a prompt pack leaves a setting blank (as in the sheet).
export const DEFAULT_MAX_TOKENS = 1000;
export const DEFAULT_TEMPERATURE = 1;

// Fixed fields copied into every JSONL line.
export const REQUEST_METHOD = "POST";
export const REQUEST_URL = "/v1/chat/completions";
export const EXTRA_BODY = {
  frequency_penalty: 0,
  top_p: 1,
  reasoning_effort: "low",
};

export const CUSTOM_ID_SEPARATOR = "~*~";
