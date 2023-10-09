import { Component } from "react";

import Header from "../Header";

import "./index.css";

class Jobs extends Component {
  state = { jobsData: "", searchInput: "" };

  componentDidMount() {
    this.getJobsApi();
  }
  getJobsApi = async () => {
    const { searchInput } = this.state;
    const apiUrl = `https://en-in.whatjobs.com/jobs/${searchInput}`;
    try {
      // Fetch the XML data
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      //   // Convert the response to text
      //   const xmlText = await response.text();

      //   // Parse the XML data
      //   const parser = new DOMParser();
      //   const xmlDoc = parser.parseFromString(xmlText, "application/xml");

      //   // Now you can work with xmlDoc, which is an XML Document object
      //   // For example, you can access elements like this:
      //   const titles = xmlDoc.querySelectorAll("title");
      //   titles.forEach((title) => {
      //     console.log("Title: " + title.textContent);
      //   });
    } catch (error) {
      console.error("Error fetching or parsing XML data:", error);
    }
  };
  render() {
    return (
      <>
        <Header />
        <ul>
          <li>I did not find correct URL to fetch to the required data.</li>
        </ul>
      </>
    );
  }
}

export default Jobs;
