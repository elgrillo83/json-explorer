export function extractPropertyFromResponse(property: string, response: any) {
  const keys = property
    .split(".")
    .map((key) => extractArrayIndexFromKey(key))
    .flat();

  let result = response;

  for (const key of keys) {
    result = result?.[key];
  }

  return result;
}

function extractArrayIndexFromKey(key: string) {
  const matches = key.match(/^(.+)\[(\d+)\]$/);

  if (!matches) return key;

  const text = matches[1];
  const index = parseInt(matches[2], 10);

  return [text, index];
}
