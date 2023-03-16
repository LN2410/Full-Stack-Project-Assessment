import "./App.css";
import Heading from "./Heading";
import Video from "./Video";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
      </header>
      <body className="Add-Video">
        <Video />
      </body>
    </div>
  );
}

export default App;
