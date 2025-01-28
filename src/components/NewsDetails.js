import React, { useState, useEffect } from 'react';
import { Data } from '../Api/Data'; // Assuming Data is your array of news articles
import Nav from './Nav';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function NewsDetails() {
  const [article, setArticle] = useState(null); // State to store the matched article
  const { id } = useParams(); // Get id from URL params
  const [SelectedData, setSelectedData] = useState({});
  const [original, setOriginal] = useState("hideSelected");
  const [initialItem, setInitialItem] = useState("newsDetailsholder");

  useEffect(() => {
    // Convert the id from useParams to a number (or adjust to string if necessary)
    const parsedId = Number(id); // This ensures the id from the URL is a number

    // Find the article that matches the id from the URL
    const foundArticle = Data.find((item) => item.id === parsedId);

    // If an article is found, set it to state
    if (foundArticle) {
      setArticle(foundArticle);
    }
  }, [id]); // Run this effect when id changes

  const filterby = parseInt(id, 10)


  const handleClick = (id, e) => {
    // e.preventDefault()
    // alert('clcked')
    if (original === "hideSelected") {
      setOriginal("showSelected");
      setInitialItem("hideSelected");
    }
    const item = Data.find((item) => item.id === id);
    setSelectedData(item)
    console.log(item)
  }

  const filterData = Data.filter((item) => item.id !== filterby);

  const truncateContent = (content, wordlimit) => {
    const words = content.split(" ");
    if (words.length > wordlimit) {
      return words.slice(0, wordlimit).join(" ") + "...";
    }
    return content;
  }

  return (
    <div>
      <Nav />
      <div className="newsDetailsContainer">
        <div className="newsDteailsflexbox">
          <div className="newsDetailsholder">
            <div className= "newsDetailsholder">
              <div className="newsDetails">
                {article ? (
                  <div>
                    <h1>{article.title}</h1>
                    <div className="newdetailsImg">
                      <img src={article.image} alt="" />
                    </div>
                    <p>{article.date}</p>
                    <p>{article.content}</p>
                  </div>
                ) : (
                  <p>Article not found.</p>
                )}
              </div>
              <div className="gobck">
                <button>
                  <a href="/">Go back</a>
                </button>
              </div>
            </div>
          </div>

          <div className="othernewsholder">
            <div className="othernewsCards">
              {filterData.map((data) => {
                return (
                  <Card style={{ width: "20rem" }}>
                    <Card.Img variant="top" src={data.image} />
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <Card.Text>{truncateContent(data.content, 10)}</Card.Text>
                      <a
                        href={`/news/${data.id}`}
                        onClick={(e) => handleClick(data.id, e)}
                      >
                        Read more
                      </a>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewsDetails;
