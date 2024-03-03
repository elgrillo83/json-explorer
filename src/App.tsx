import "./App.css";
import JsonExplorer from "./components/JsonExplorer";
import { EXAMPLE_JSON } from "./data";

function App() {
  return <JsonExplorer json={EXAMPLE_JSON} />;
}

export default App;
