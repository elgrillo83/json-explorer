export function extractPropertyFromJson(property: string, json: any) {
  const keys = property
    .split(".")
    .map((key) => extractArrayIndexFromKey(key))
    .flat();

  let result = json;

  for (const key of keys) {
    result = result?.[key];
  }

  return result;
}

function extractArrayIndexFromKey(key: string) {
  const matches = key.match(/^(.+)\[(\d+)\]$/);

  if (!matches) {
    const matches = key.match(/^\[(\d+)\]$/);

    if (!matches) return key;

    const index = parseInt(matches[1], 10);

    return [index];
  }

  const text = matches[1];
  const index = parseInt(matches[2], 10);

  return [text, index];
}
