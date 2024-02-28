import React from "react";

export default function JsonRenderer({
  json,
  setProperty,
}: {
  json: JSONObject;
  setProperty: (property: string) => void;
}) {
  const handleClick = (key: string) => () => {
    setProperty(key);
  };

  const generatePath = (path: string, key: string) =>
    [path, key].filter(Boolean).join(".");

  const renderJson = (json: JSONObject, path: string) => {
    if (Array.isArray(json)) {
      return (
        <ul>
          {json.map((value, index) => (
            <li key={index}>{renderJson(value, `${path}[${index}]`)}</li>
          ))}
        </ul>
      );
    } else if (typeof json === "object") {
      return (
        <ul>
          {Object.entries(json).map(([key, value]) => {
            if (Array.isArray(value)) {
              return (
                <React.Fragment key={key}>
                  <li>
                    <dl>
                      <dt onClick={handleClick(generatePath(path, key))}>
                        {key}:
                      </dt>

                      <dd>[</dd>
                    </dl>
                  </li>

                  <li>{renderJson(value, generatePath(path, key))}</li>

                  <li>]</li>
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={key}>
                  <li>
                    <dl>
                      <dt onClick={handleClick(generatePath(path, key))}>
                        {key}:
                      </dt>

                      <dd>{renderJson(value, generatePath(path, key))}</dd>
                    </dl>
                  </li>
                </React.Fragment>
              );
            }
          })}
        </ul>
      );
    } else {
      return typeof json === "string" ? (
        <span>'{json}'</span>
      ) : (
        <span>{json.toString()}</span>
      );
    }
  };

  return (
    <>
      <p>Response</p>

      <div className="json-renderer">{renderJson(json, "")}</div>
    </>
  );
}
