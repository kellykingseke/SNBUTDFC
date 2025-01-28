import React,{ useEffect, useState} from 'react'
import { Data } from '../Api/Data'
import { timeAgo } from './Date';
import { TiWorldOutline } from "react-icons/ti";
import { CiClock2 } from "react-icons/ci";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";



function SectionTwo() {
  const [numb, setNumb] = useState(5)
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);
  const truncateContent = (content, wordLimit) => {
    const words = content.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return content;
  }; 
  const recentNews = Data
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date descending
    .slice(0, numb); // Get the top 3 most recent news
const Viewmore = () =>{
return  setNumb(prevNumber => prevNumber + 3)
}
  return (
    <div className="sectionTwoContainer">
      <h1>
        Latest <span className="partHeader">News</span>
      </h1>
      <div className="grid">
        {/* First row with two equal columns */}
        <Row xs="auto" md={2} gap={2} className="g-4">
          <Col>
            <CardGroup>
              <Card className="p-0 ">
                <a
                  href={`/news/${recentNews[0].id}`}
                  style={{ textDecoration: "none" }}
                  className="cardflex"
                >
                  <div className="cardImg">
                    <img
                      src={recentNews[0].image}
                      alt={recentNews[0].title}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <Card.Body className="cardflexContent">
                    <div>
                      <Card.Title>{recentNews[0].title}</Card.Title>
                      <Card.Text>
                        <p>{truncateContent(recentNews[0].content, 17)} </p>
                      </Card.Text>
                    </div>
                    <small className="text-muted updated">
                      <CiClock2 className="mx-1" />{" "}
                      {timeAgo(recentNews[0].date)}{" "}
                      <span className="mx-2">|</span> <span>News</span>
                    </small>
                  </Card.Body>
                </a>
              </Card>
            </CardGroup>
          </Col>
          <Col>
            <CardGroup>
              <Card className="p-0">
                <a
                  href={`/news/${recentNews[1].id}`}
                  style={{ textDecoration: "none" }}
                  className="cardflex"
                >
                  <div className="cardImg">
                    <img
                      src={recentNews[1].image}
                      alt={recentNews[1].title}
                      style={{ width: "100", height: "100%" }}
                    />
                  </div>
                  <Card.Body className="cardflexContent">
                    <div>
                      <Card.Title>{recentNews[1].title}</Card.Title>
                      <Card.Text>
                        <p>{truncateContent(recentNews[1].content, 17)} </p>
                      </Card.Text>
                    </div>
                    <small className="text-muted updated">
                      <CiClock2 className="mx-1" />{" "}
                      {timeAgo(recentNews[1].date)}{" "}
                      <span className="mx-2">|</span> <span>News</span>
                    </small>
                  </Card.Body>
                </a>
              </Card>
            </CardGroup>
          </Col>
        </Row>

        {/* Subsequent rows with three columns each */}
        <div className="">
          <Row xs="auto" md={3} className="g-4 sm-1">
            {recentNews.slice(2).map((item) => (
              <CardGroup>
                <Card className="p-0">
                  <a
                    href={`/news/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="cardImg">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        <small className="text-muted">
                          <CiClock2 /> Last updated: {timeAgo(item.date)}
                        </small>
                        <p>{truncateContent(item.content, 17)} </p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Body
                      className={{ display: "flex", justifyContent: "bottom" }}
                    ></Card.Body>
                  </a>
                </Card>
              </CardGroup>
            ))}
          </Row>
        </div>
      </div>

      <div className="viewmoreBtn">
        <button onClick={Viewmore}>load more</button>
      </div>
    </div>
  );
}

export default SectionTwo