import { useMemo, useState } from "react";
import { extractPropertyFromResponse } from "../helpers";

export default function JsonExplorer({ json }: { json: JSONObject }) {
  const [property, setProperty] = useState("");

  const value = useMemo(
    () => extractPropertyFromResponse(property, json),
    [property, json]
  );

  const renderValue = (value: JSONValue) => {
    if (Array.isArray(value)) return "(!) Specify index";

    const type = typeof value;

    switch (type) {
      case "object":
        return "(!) Specify key";
      case "boolean":
        return value.toString();
      case "undefined":
        return "(!) Not found";
      default:
        return value;
    }
  };

  return (
    <>
      <label htmlFor="property">Property</label>

      <input
        id="property"
        onChange={(event) => setProperty(event.target.value)}
        type="text"
        value={property}
      />

      <p>{renderValue(value)}</p>

      <pre>{JSON.stringify(json, null, 2)}</pre>
    </>
  );
}
