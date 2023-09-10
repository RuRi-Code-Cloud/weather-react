import "./App.css";
import "./Weather.css";
import "./First.css";
import "./Second.css";
import "./Third.css";
import "./Source.css";
import Weather from "./Weather";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Source from "./Source";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <First />
        <Second />
        <Third />
        <Source className="Footer" />
      </header>
    </div>
  );
}

export default App;
