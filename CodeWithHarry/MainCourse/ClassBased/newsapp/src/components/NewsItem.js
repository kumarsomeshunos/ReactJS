import logo from "./../logo.svg";
import PropTypes from "prop-types";
import React, { Component } from "react";

export class NewsItem extends Component {
  static propTypes = {};

  render() {
    let { title, description, imageUrl, url, publishedAt, source } = this.props;
    return (
      <div className="container" style={{ height: "80vh" }}>
        <a
          style={{ textDecoration: "none", color: "inherit" }}
          target="_blank"
          href={url}
        >
          <div className="card mb-3">
            <img
              src={imageUrl}
              className="card-img-top"
              style={{ objectFit: "cover", height: "70vh" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">
                  {new Date(publishedAt).toGMTString()}
                </small>
              </p>
            </div>
          </div>
        </a>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {source}
        </span>
      </div>
    );
  }
}

export default NewsItem;

// https://newsapi.org/v2/top-headlines?country=us&apiKey=625f683f8c4444579da4ceced5c14687
