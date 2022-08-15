import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

export class News extends Component {
  articles = [];

  onNextClick = async () => {
    this.setState({ loading: true });
    console.log("Next Click");
    let url = `https://newsapi.org/v2/top-headlines?q=${"india"}&pageSize=1&apiKey=${"625f683f8c4444579da4ceced5c14687"}&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({ page: this.state.page + 1, articles: parsedData.articles });
    console.log(this.state.page + 1);
  };

  onPreviousClick = async () => {
    this.setState({ loading: true });
    console.log("Previous Click");
    let url = `https://newsapi.org/v2/top-headlines?q=${"india"}&pageSize=1&apiKey=${"625f683f8c4444579da4ceced5c14687"}&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({ page: this.state.page - 1, articles: parsedData.articles });
    console.log(this.state.page - 1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: this.totalResults,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?q=${"india"}&pageSize=1&apiKey=${"625f683f8c4444579da4ceced5c14687"}&page=${
      this.state.page
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  render() {
    return (
      <>
        <h1 className="text-center">Top Headlines</h1>
        {this.state.loading && <Loading />}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "1%",
            justifyContent: "center",
          }}
        >
          <button
            className={`btn btn-dark ${this.state.page <= 1 ? "disabled" : ""}`}
            onClick={this.onPreviousClick}
          >
            &#8592;
          </button>
          {/* {this.articles.articles.map((element) => {console.log(element)})} */}
          {/* {this.state.articles.map((element) => {console.log(element)})} */}
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <NewsItem
                  key={element.newsUrl}
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  url={element.url}
                  publishedAt={element.publishedAt}
                />
              );
            })}
          <button
            className={`btn btn-dark ${
              this.state.page >= this.state.totalResults ? "disabled" : ""
            }`}
            onClick={this.onNextClick}
          >
            &#8594;
          </button>
        </div>
      </>
    );
  }
}

export default News;
