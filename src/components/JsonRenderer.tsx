import React from "react";
import {
  JSONArray,
  JSONArrayOrObject,
  JSONNode,
  JSONObject,
  JSONValue,
} from "../types";

export default function JsonRenderer({
  json,
  setProperty,
}: {
  json: JSONArrayOrObject;
  setProperty: (property: string) => void;
}) {
  const handleClick = (key: string) => () => {
    setProperty(key);
  };

  const generatePath = (path: string, key: string) =>
    [path, key].filter(Boolean).join(".");

  const renderArray = (array: JSONArray, path: string) => {
    return (
      <ul>
        {array.map((value, index) => (
          <li key={index}>{renderJsonNode(value, `${path}[${index}]`)}</li>
        ))}
      </ul>
    );
  };

  const renderObject = (object: JSONObject, path: string) => {
    return (
      <ul>
        <li>{`{`}</li>

        <li>
          <ul>
            {Object.entries(object).map(([key, value]) => {
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

                    {value.map((value, index) => (
                      <li key={index}>
                        {renderJsonNode(
                          value,
                          `${generatePath(path, key)}[${index}]`
                        )}
                      </li>
                    ))}

                    <li>],</li>
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

                        <dd>
                          {renderJsonNode(value, generatePath(path, key))}
                        </dd>
                      </dl>
                    </li>
                  </React.Fragment>
                );
              }
            })}
          </ul>
        </li>

        <li>{`},`}</li>
      </ul>
    );
  };

  const renderValue = (value: JSONValue) => {
    return typeof json === "string" ? (
      <span>'{value}',</span>
    ) : (
      <span>{value.toString()},</span>
    );
  };

  const renderJsonNode = (jsonNode: JSONNode, path: string) => {
    if (Array.isArray(jsonNode)) {
      return renderArray(jsonNode, path);
    } else if (typeof jsonNode === "object") {
      return renderObject(jsonNode, path);
    } else {
      return renderValue(jsonNode);
    }
  };

  return (
    <>
      <p>Response</p>

      <div className="json-renderer">{renderJsonNode(json, "")}</div>
    </>
  );
}
