import React from "react";
import "./style.css";

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = { services: [] };
  }
  componentDidMount() {
    fetch("js/Data.json")
      .then(res => res.json())
      .then(result => this.setState({ services: result.services }));
  }
  render() {
    return (
      <section id="service" className="service">
        <div className="container">
          <h1 className="section-header">my services</h1>
          <div className="service-row">
            {this.state.services.map(item => {
              return (
                <div key={item.id}>
                  <div>
                    <span className={item.icon}></span>
                  </div>
                  <div>
                    <h2>{item.title}</h2>
                  </div>
                  <hr className="line" />
                  <div>
                    <p>{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
