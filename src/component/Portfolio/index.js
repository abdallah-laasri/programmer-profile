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
  active = e => {
    let ele = Array.from(e.target.parentNode.children);
    ele.forEach(item => item.classList.remove("active"));
    e.target.classList.add("active");
  };
  handlFilter = (e, arr, field) => {
    this.imagesFilter(arr, field);
    this.active(e);
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
            className="active"
            onClick={e => {
              this.handlFilter(e, images, "all");
            }}
          >
            all
          </li>

          <li
            onClick={e => {
              this.handlFilter(e, images, "web");
            }}
          >
            web
          </li>
          <li
            onClick={e => {
              this.handlFilter(e, images, "mobile");
            }}
          >
            mobile
          </li>
          <li
            onClick={e => {
              this.handlFilter(e, images, "desktop");
            }}
          >
            desktop
          </li>
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
