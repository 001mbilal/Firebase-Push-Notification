import Notification from "./components/Notification";

import "./App.css";

function App() {
  console.log("process.env.REACT_APP_API_KEY", process.env.REACT_APP_API_KEY);
  console.log(
    "process.env.REACT_APP_AUTHDOMAIN",
    process.env.REACT_APP_AUTHDOMAIN
  );
  console.log(
    "process.env.REACT_APP_STORAGE_BUCKET",
    process.env.REACT_APP_STORAGE_BUCKET
  );
  console.log(
    "process.env.REACT_APP_PROJECT_ID",
    process.env.REACT_APP_PROJECT_ID
  );
  console.log(
    "process.env.REACT_APP_MESSAGING_SENDER",
    process.env.REACT_APP_MESSAGING_SENDER
  );
  console.log("process.env.REACT_APP_APPID", process.env.REACT_APP_APPID);
  console.log(
    "process.env.REACT_APP_MEASUREMENTID",
    process.env.REACT_APP_MEASUREMENTID
  );

  return (
    <div className="App">
      <header className="App-header">
        <Notification />
      </header>
    </div>
  );
}

export default App;
