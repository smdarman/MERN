import React, { Component } from "react";

class News extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      News: [],
    };
  }

  // Fetch the News on first mount
  componentDidMount() {
    this.getNews();
  }

  // Retrieves the News of items from the Express app
  getNews = () => {
    fetch("/api/getNews")
      .then((data) => data.json(data))

      .then((News) => this.setState({ News }));
    console.log("Received json data");
  };

  render() {
    var items = this.state.News.map(function (item, id) {
      return <h3 key={id}>
      {item.title} {item.description}

      </h3>;
    });
    // var descs = this.state.News.map(function (desc, id) {
    //   return <h4 key={id}> {desc.description} </h4>;
    // });
    return (
      <div className="App2">
        <h1>List of News</h1>

        <ul>{items} </ul>
        {/* {descs} */}
      </div>
    );
  }
}

export default News;