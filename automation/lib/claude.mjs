import Anthropic from "@anthropic-ai/sdk";

const MODEL = "claude-opus-5";

let client;
function getClient() {
  if (!client) {
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error("Missing environment variable: ANTHROPIC_API_KEY");
    }
    client = new Anthropic();
  }
  return client;
}

/**
 * Run one pipeline agent: a single Claude call constrained to a JSON schema
 * via structured outputs. Returns the parsed, schema-valid object.
 */
export async function runAgent({ name, system, prompt, schema, maxTokens = 16000 }) {
  const stream = getClient().messages.stream({
    model: MODEL,
    max_tokens: maxTokens,
    thinking: { type: "adaptive" },
    system,
    messages: [{ role: "user", content: prompt }],
    output_config: { format: { type: "json_schema", schema } },
  });

  let response;
  try {
    response = await stream.finalMessage();
  } catch (err) {
    throw wrapApiError(name, err);
  }

  if (response.stop_reason === "refusal") {
    throw new Error(`[agent:${name}] request was refused (stop_reason: refusal)`);
  }
  if (response.stop_reason === "max_tokens") {
    throw new Error(`[agent:${name}] output truncated at max_tokens=${maxTokens}`);
  }

  const text = response.content.find((b) => b.type === "text")?.text;
  if (!text) {
    throw new Error(`[agent:${name}] no text block in response`);
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`[agent:${name}] response was not valid JSON: ${text.slice(0, 200)}`);
  }
}

function wrapApiError(name, err) {
  if (err instanceof Anthropic.AuthenticationError) {
    return new Error(`[agent:${name}] invalid ANTHROPIC_API_KEY`);
  }
  if (err instanceof Anthropic.RateLimitError) {
    return new Error(`[agent:${name}] rate limited after SDK retries — rerun later`);
  }
  if (err instanceof Anthropic.APIError) {
    return new Error(`[agent:${name}] API error ${err.status}: ${err.message}`);
  }
  return err;
}
