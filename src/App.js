import "./App.css";
import CountDown from "./components/CountDown";

function App() {
  return (
    <div className="App">
      <CountDown
        timeTillDate="05 13 2020, 6:00 am"
        timeFormat="MM DD YYYY, h:mm a"
      />
    </div>
  );
}

export default App;
