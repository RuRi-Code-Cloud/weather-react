import "./App.css";
import Weather from "./Weather";
import Source from "./Source";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello!</h1>
        <Weather city="Cesis" />
        <Source className="Footer" />
      </header>
    </div>
  );
}

export default App;
