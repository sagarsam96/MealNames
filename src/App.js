import { useEffect, useState } from "react";
import Data from "./components/Data";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    query && setTimeout(() => setFlag(false), 3000);
  }, [query]);

  return (
    <div className="App">
      <Header query={query} setQuery={setQuery} />
      {query && flag && <h5 className="loader"> Loading.....</h5>}
      {!flag && <Data query={query} />}
    </div>
  );
}
