import React, { useState } from "react";
import { Videos } from "../Api/Videodata";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { CiClock2 } from "react-icons/ci";
import { timeAgo } from "./Date";

function Sectionfour() {
  const [numb, setNumb] = useState(5);

  // Sort and slice the videos
  const recentVideo = Videos.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  ).slice(0, numb);

  const Viewmore = () => {
    setNumb((prev) => prev + 3);
  };

  return (
    <div className="sectionFourContainer mx-auto">
      <h1>
        Latest <span className="partHeader">News</span>
      </h1>
      <div>
        <div className="">
          <Row xs="auto" md={2} className="g-4 mb-4 mx-auto">
            {/* Display the first two items */}
            {recentVideo.slice(0, 2).map((video, index) => (
              <CardGroup key={video.id}>
                <Card className="p-0 position-relative iframe                                          ">
                  <iframe
                    className="iframe"
                    width="100%"
                    height="400px" // Adjust height as necessary
                    src={video.video} // Use the video URL
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                  {/* <div className="card-content">
                  <Card.Body>
                    <Card.Title>{video.title || "Untitled Video"}</Card.Title>
                    <Card.Text>
                      <small className="text-muted">
                        <CiClock2 /> Last updated: {timeAgo(video.date)}
                      </small>
                      <p>{video.description || "No description available."}</p>
                    </Card.Text>
                  </Card.Body>
                </div> */}
                </Card>
              </CardGroup>
            ))}
          </Row>
          <Row xs="auto" sm={1} md={3} className="g-4 mb-4 mx-auto">
            {/* Display remaining videos after the first two */}
            {recentVideo.slice(2).map((video, index) => (
              <CardGroup key={video.id}>
                <Card className="p-0">
                  <iframe
                    className="iframe"
                    width="100%"
                    height="300" // Adjust height to maintain consistency
                    src={video.video} // Use the video URL
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                  {/* <div className="card-content">
                  <Card.Body>
                    <Card.Title>{video.title || "Untitled Video"}</Card.Title>
                    <Card.Text>
                      <small className="text-muted">
                        <CiClock2 /> Last updated: {timeAgo(video.date)}
                      </small>
                      <p>{video.description || "No description available."}</p>
                    </Card.Text>
                  </Card.Body>
                </div> */}
                </Card>
              </CardGroup>
            ))}
          </Row>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {numb < Videos.length && (
          <button onClick={Viewmore} style={{ color: "black" }}>
            View More
          </button>
        )}
      </div>
    </div>
  );
}

export default Sectionfour;
