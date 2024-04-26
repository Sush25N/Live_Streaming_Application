import styled from "styled-components";

const Table = () => {
  return (
    <>
      <Home>
        <div className="main">
          <div className="container">
            <div style={{ marginTop: "15px" }}>Existing Connections</div>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>sl no</th>
                  <th>Source DB</th>
                  <th>Target DB</th>
                  <th>Target Table</th>
                  <th>Sink Connector</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>dummy data</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>dummy data</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Home>
    </>
  );
};

export default Table;

const Home = styled.div`
  .main {
    margin-left: 30px;
    margin-right: 30px;
  }
  .container {
    display: flex;
    justify-content: space-between;
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
    padding-block: 15px;
    border-radius: 20px;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
    border: none;
    transition: all 0.2s ease-in-out;
    margin-bottom: 20px;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;
