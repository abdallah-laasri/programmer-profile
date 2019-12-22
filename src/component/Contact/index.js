import React from "react";
import "./style.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: { name: "", email: "", textarea: "" },
      errors: { name: "", email: "", textarea: "" }
    };
  }
  handleValidation = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    } else if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    } else if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    //Textare
    if (!fields["textarea"]) {
      formIsValid = false;
      errors["textarea"] = "Cannot be empty";
    }

    this.setState({ errors: errors });

    return formIsValid;
  };

  contactSubmit = e => {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  };

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <section id="contact" className="contact">
        <div className="container-contact">
          <h1 className="section-header">Drop Me A line</h1>
          <form name="myForm" action="" onSubmit={this.contactSubmit}>
            <div className="form-input">
              <div>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={this.handleChange.bind(this, "name")}
                  value={this.state.fields["name"]}
                />
                <div className="error">{this.state.errors.name}</div>
              </div>
              <div>
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  onChange={this.handleChange.bind(this, "email")}
                  value={this.state.fields["gmail"]}
                />
                <div className="error">{this.state.errors.email}</div>
              </div>
            </div>
            <textarea
              name="textarea"
              placeholder="Your Message"
              onChange={this.handleChange.bind(this, "textarea")}
              value={
                this.state.fields["textarea"] === ""
                  ? this.state.errors.textarea
                  : this.state.fields["textarea"]
              }
            ></textarea>
            <input id="submit" type="submit" value="Send Message" />
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
