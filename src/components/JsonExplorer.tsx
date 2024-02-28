import { useMemo, useState } from "react";
import { extractPropertyFromResponse } from "../helpers";

export default function JsonExplorer() {
  const [property, setProperty] = useState("");

  const EXAMPLE_JSON = {
    date: "2021-10-27T07:49:14.896Z",
    hasError: false,
    fields: [
      {
        id: "4c212130",
        prop: "iban",
        value: "DE81200505501265402568",
        hasError: false,
      },
    ],
  };

  const value = useMemo(
    () => extractPropertyFromResponse(property, EXAMPLE_JSON),
    [property, EXAMPLE_JSON]
  );

  const renderValue = (value: any) => {
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

      <pre>{JSON.stringify(EXAMPLE_JSON, null, 2)}</pre>
    </>
  );
}
