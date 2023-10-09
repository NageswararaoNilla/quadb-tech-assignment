import { Link } from "react-router-dom";

import Header from "../Header";

import "./index.css";

const Home = (props) => {
  const { history } = props;
  console.log(props);

  const onClickFindJobs = () => {
    history.push("/jobs");
  };

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="search-container">
          <h1 className="search-heading">
            What programming language you’re looking for a job in
          </h1>
          <input
            type="search"
            placeholder="Programming Language"
            className="search-input"
            // value={searchInput}
          />
          <Link to="/jobs" className="link">
            <button
              type="button"
              className="home-button"
              onClick={onClickFindJobs}
            >
              Find Jobs
            </button>
          </Link>
        </div>
        <div className="home-content">
          <h1 className="home-heading">Find The Job That Fits Your Life</h1>
          <p className="home-description">
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits your abilities and
            potential.
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
