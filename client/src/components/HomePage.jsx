import { useState } from "react";
import styled from "styled-components";
import Table from "./Table";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const HomePage = () => {
  const options = ["Oracle", "MySQL"];
  const opts = ["MongoDB"];
  const [seleOptn, setSeleOptn] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [showOtherComponent, setShowOtherComponent] = useState(false);

  const toggleComponent = () => {
    setShowOtherComponent(!showOtherComponent);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDrop = (event) => {
    setSeleOptn(event.target.value);
  };

  return (
    <>
      <Home>
        <div className="container">
          <div className="column" style={{ marginLeft: "90px" }}>
            <p>Source Database Type</p>
            <p className="bottom-line">Source Database Type - RDBMS, NoSQL</p>
            <p>Source Database</p>
            <select
              className="dropdown"
              value={selectedOption}
              onChange={handleDropdownChange}
            >
              <option value="">Select Source Database</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="column" style={{ marginRight: "80px" }}>
            <p>Target Database Type</p>
            <p className="bottom-line">Select Database Type - NoSQL, RDBMS</p>
            <p>Target Database</p>
            <select className="dropdown" value={seleOptn} onChange={handleDrop}>
              <option value="">Select Target Database </option>
              {opts.map((opt, index) => (
                <option key={index} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div>
              <button className="btn" onClick={toggleComponent}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </Home>
      {showOtherComponent && <Table />}
      {/* Replace the button with a Link to navigate to the Details route */}
      <Link to="/details">
        <button className="btn">Create Connector,if not exists</button>
      </Link>
    </>
  );
};

const Home = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    background-color: antiquewhite;
    border-radius: 60px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 30px;
  }
  .dropdown {
    width: 50%;
    background: white;
    border: none;
    border-radius: 20px;
    padding: 15px 20px;
    border-inline: 2px solid;
    box-shadow: #cff0ff 0px 10px 10px -5px;
    border-bottom: 1px solid black;
    display: inline;
  }

  .bottom-line {
    border-bottom: 1px solid black;
    display: inline;
  }

  .btn {
    display: block;
    font-weight: bold;
    background: linear-gradient(
      45deg,
      rgb(16, 137, 211) 0%,
      rgb(18, 177, 209) 100%
    );
    color: white;
    padding-block: 10px;
    border-radius: 18px;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
    border: none;
    transition: all 0.2s ease-in-out;
    margin-bottom: 20px;
    margin-top: 15px;
    margin-left: 150px;
  }
`;

export default HomePage;
