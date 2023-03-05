import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        View{" "}
        <a href="https://github.com/kristalall/weather-react-app">
          open-source code
        </a>{" "}
        on GitHub by Kristal All
      </p>
    </div>
  );
}

export default App;
