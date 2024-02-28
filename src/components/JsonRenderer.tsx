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

  return (
    <>
      <p>Response</p>

      <div style={{ border: "1px solid black", padding: "10px" }}>
        {Object.entries(json).map(([key, value]) => (
          <p>
            <span
              onClick={handleClick(key)}
              style={{ color: "blue", cursor: "pointer" }}
            >
              {key}:
            </span>

            <span>{JSON.stringify(value)}</span>
          </p>
        ))}
      </div>
    </>
  );
}
