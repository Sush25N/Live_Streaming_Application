// import { BrowserRouter as Router } from "react-router-dom";
// // import Login from "./Login";
// import Details from "./Details";

// function App() {
//   return (
//     <Router>
//       {/* <Login /> */}
//       <Details />
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./Login";
// import HomePage from "./components/HomePage";
// import Details from "./components/Details"; // Import Details component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/details" element={<Details />} />{" "}
//         {/* Add route for Details component */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// App.js

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import HomePage from "./components/HomePage";
import Details from "./components/Details";
import ConnectorDetails from "./components/connectorDetails"; // Import ConnectorDetails component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/connector-details" element={<ConnectorDetails />} />{" "}
        {/* Add route for ConnectorDetails component */}
      </Routes>
    </Router>
  );
}

export default App;
