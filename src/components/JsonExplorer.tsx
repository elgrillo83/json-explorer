import { useMemo, useState } from "react";
import { extractPropertyFromJson } from "../helpers";
import { JSONArrayOrObject, JSONValue } from "../types";
import JsonRenderer from "./JsonRenderer";

export default function JsonExplorer({ json }: { json: JSONArrayOrObject }) {
  const [property, setProperty] = useState("");

  const value = useMemo(
    () => extractPropertyFromJson(property, json),
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
      <div className="json-explorer-input">
        <label htmlFor="property">Property</label>

        <input
          id="property"
          onChange={(event) => setProperty(event.target.value)}
          type="text"
          value={property}
        />

        <span>{renderValue(value)}</span>
      </div>

      <JsonRenderer json={json} setProperty={setProperty} />

      {false && <pre>{JSON.stringify(json, null, 2)}</pre>}
    </>
  );
}
