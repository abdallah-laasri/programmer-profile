import React from "react";
import "./style.css";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      filteredArray: []
    };

    this.imagesFilter = this.imagesFilter.bind(this);
  }

  imagesFilter = (arr, field) => {
    this.setState({
      filteredArray:
        field === "all"
          ? this.state.images
          : arr.filter(item => item.field === field)
    });
  };

  componentDidMount() {
    fetch("js/Data.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          images: data.portfolio
        });

        this.setState({ filteredArray: data.portfolio });
      });
  }
  render() {
    const { images } = this.state;
    return (
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h1 className="section-header">portfolio</h1>
        </div>
        <ul className="portfolio-list">
          <li
            onClick={() => this.imagesFilter(images, "all")}
            className="active"
          >
            all
          </li>
          <li onClick={() => this.imagesFilter(images, "web")}>web</li>
          <li onClick={() => this.imagesFilter(images, "mobile")}>mobile</li>
          <li onClick={() => this.imagesFilter(images, "desktop")}>desktop</li>
        </ul>
        <div className="porfolio-row">
          {this.state.filteredArray.map(item => {
            return (
              <div key={item.id}>
                <img src={item.image} alt={"img" + item.id} />
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Portfolio;
