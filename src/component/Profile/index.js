import React from "react";
import "./style.css";
import "font-awesome/css/font-awesome.min.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: [], social: [], skills: [] };
  }

  barEffect = () => {
    let pos = document.scrollingElement.scrollTop;
    try {
      if (pos > 300 && pos < 810) {
        for (var i = 0; i < 4; i++) {
          document.getElementsByClassName("bar")[
            i
          ].children[0].style.width = this.state.skills[i].percentage;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    fetch("js/Data.json")
      .then(res => res.json())
      .then(data =>
        this.setState({
          info: data.profile.info,
          social: data.profile.social,
          skills: data.profile.skills
        })
      );
    window.addEventListener("scroll", this.barEffect);
  }
  render() {
    const { info, social, skills } = this.state;

    return (
      <section id="profile" className="profile">
        <div className="container">
          <div className="profile-container">
            <div className="profile-left">
              <h4>hi there! i'm john doe</h4>
              <p>
                I am a professional web designer from NYC, USA. I create
                beautiful professional websites using best practice
                accessibility. I enjoy turning complex problems into simple,
                beautiful and intuitive interface designs.
              </p>
              {info.map(item => {
                return (
                  <ul key={item.id}>
                    <li>
                      <i className={item.icon}></i>
                      <span> {item.title}: </span>
                      {item.data}
                    </li>
                  </ul>
                );
              })}
              <ul className="socialRow">
                {social.map(item => {
                  return (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        target="_blank"
                        className="icons"
                        rel="noopener noreferrer"
                      >
                        <i className={item.icon}></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="profile-right">
              <ul>
                {skills.map(item => {
                  return (
                    <li key={item.id}>
                      <div className="skill1">
                        <span className="skill">{item.skill}</span>
                        <span className="percentage">{item.percentage}</span>
                        <div className="bar">
                          <div className="bar1"></div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
