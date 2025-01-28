import React, { useState } from "react";
import { ScheduleData } from "../Api/ScheduleApi";

function SectionThree() {
  const [fixtureNumb, setFixtureNumb] = useState(4); // Initial number of fixtures to show
  const [resultNumb, setResultNumb] = useState(3); // Initial number of results to show

  // Helper function to group fixtures by month and day
  const groupByMonthDay = (items) => {
    return items.reduce((acc, item) => {
      const dateObj = new Date(item.date);
      const month = dateObj.toLocaleString("default", { month: "long" });
      const day = dateObj.getDate();
      const key = `${month} ${day}`;

      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
  };

  // Sort fixtures and results by date
  const sortedFixtures = ScheduleData.fixtures.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const groupedFixtures = groupByMonthDay(sortedFixtures);

  const sortedResults = ScheduleData.results.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const groupedResults = groupByMonthDay(sortedResults);

  // Increment functions
  const fixtureView = () => {
    setFixtureNumb((prevNumber) => prevNumber + 3); // Load 3 more fixtures
  };

  const resultView = () => {
    setResultNumb((prevNumber) => prevNumber + 3); // Load 3 more results
  };

  return (
    <div>
      <div className="section3Container">
        <div className="resultfixtures">
          <div className="sect3fixture">
            <h1>
              Team <span className="partHeader">Schedule</span>
            </h1>
            {Object.entries(groupedFixtures)
              .slice(0, Math.ceil(fixtureNumb / 3))
              .map(([key, fixtures]) => (
                <div key={key} className="dateGroup">
                  <h2>{key}</h2> {/* Display Month Day */}
                  {fixtures.slice(0, fixtureNumb).map((fixture, index) => (
                    <div key={index} className="sect3SubHeader">
                      <div>
                        <span>{fixture.type}</span>
                      </div>
                      <div className="matchSchedule">
                        <span className="home">{fixture.homeTeam}</span>
                        <span className="matchTime">{fixture.time}</span>
                        <b className="away">{fixture.awayTeam}</b>
                      </div>
                      <div className="matchVenue">{fixture.venue}</div>
                    </div>
                  ))}
                </div>
              ))}
            <div className="viewmoreBtn">
              <button onClick={fixtureView}>Load More</button>
            </div>
          </div>

          {/* Render results section */}
          <div className="sec3Result">
            <h1>
              Team Last <span className="partHeader">Result</span>
            </h1>
            {Object.entries(groupedResults)
              .slice(0, Math.ceil(resultNumb / 3))
              .map(([key, results]) => (
                <div key={key} className="dateGroup">
                  <h2>{key}</h2> {/* Display Month Day */}
                  {results.slice(0, resultNumb).map((result, index) => {
                    const date = new Date(result.date);
                    const options = {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    };
                    const formattedDate = date.toLocaleDateString(
                      undefined,
                      options
                    );

                    return (
                      <div key={index} className="sect3SubHeader">
                        <div>
                          <span>{formattedDate}</span> | {result.type}
                        </div>
                        <div className="resultSchedule">
                          <span className="home">
                            {result.homeTeam}{" "}
                            <b className="Score">{result.homeScore}</b>
                          </span>
                          <span className="matchTime">vs</span>
                          <div className="away">
                            <div className="team">
                              {result.awayTeam}{" "}
                              <b className="Score">{result.awayScore}</b>
                            </div>
                          </div>
                        </div>
                        <div className="goalsDiv">
                          <div className="homegoals">
                            {result.goals.map((goal, idx) => (
                              <div key={idx}>
                                <div>
                                  Goal: {goal.scorer}'{goal.time}
                                </div>
                                <div>Assist: {goal.assist}</div>
                              </div>
                            ))}
                          </div>
                          <div className="awaygoals">
                            {result.awayGoals.map((goal, idx) => (
                              <div key={idx}>
                                <div>
                                  Goal: {goal.scorer}'{goal.time}
                                </div>
                                <div>Assist: {goal.assist}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="matchVenue">{result.venue}</div>
                      </div>
                    );
                  })}
                </div>
              ))}
              <div className="viewmoreBtn">
                <button onClick={resultView}>Load More Results</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
