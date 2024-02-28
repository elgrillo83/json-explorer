export default function JsonExplorer() {
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

  return <pre>{JSON.stringify(EXAMPLE_JSON, null, 2)}</pre>;
}
