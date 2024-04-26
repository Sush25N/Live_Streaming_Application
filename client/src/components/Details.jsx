import { Link } from "react-router-dom";
import "./details.css";

const Details = () => {
  return (
    <div className="details">
      <div className="source-details">
        <h2>
          <u className="heading">Source Details</u>
        </h2>
        <h3>Source DB Name</h3>
        <input className="input" type="text" />
        <h3>DB Username</h3>
        <input className="input" type="text" />
        <h3>DB Password</h3>
        <input className="input" type="text" />
        <h3>Source Database Schema</h3>
        {/* select db schema */}
        <select className="dropdown">
          <option value="">Select Database Schema</option>
          <option>Oracle</option>
          <option>MySQL</option>
        </select>
        <h3>Source Table</h3>
        {/* select source table */}
        <select className="dropdown">
          <option value="">Select Source</option>
          <option>Oracle</option>
          <option>MySQL</option>
        </select>
      </div>
      <div className="target-details">
        <h2>
          <u className="heading">Target Details</u>
        </h2>
        <h3>Target DB Name</h3>
        <input className="input" type="text" />
        <h3>DB Username</h3>
        <input className="input" type="text" />
        <h3>DB Password</h3>
        <input className="input" type="text" />
        <h3>Target Database Schema</h3>
        {/* select db schema */}
        <select className="dropdown">
          <option value="">Select Database Schema</option>
          <option>No-Sql</option>
        </select>
        <h3>Target Table</h3>
        {/* select source table */}
        <select className="dropdown">
          <option value="">Select Target</option>
          <option>No-Sql</option>
        </select>
        {/* <button type="submit" className="submit">
          Submit
        </button> */}
        <Link to="/connector-details">
          <button className="submit">Submit</button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
