import React from "react";

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      subject: "",
      name: "",
      text: ""
    };
  }

  onChangeSubject = e => {
    this.setState({ subject: e.target.value });
  };

  onChangeText = e => {
    this.setState({ text: e.target.value });
  };

  onChangeName = e => {
    this.setState({ subject: e.target.name });
  };

  submitEmail = e => {};

  render() {
    return (
      <form
        onSubmit={this.submitEmail}
        className="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <div className="contact-form__input-block">
          <div className="contact-form__input-block">
            <label className="contact-form__label">Name: </label>
            <input
              className="contact-form__input"
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.onChangeeName}
            />
          </div>

          <label className="contact-form__label">Subject: </label>
          <input
            className="contact-form__input"
            type="text"
            name="subject"
            value={this.state.subject}
            onChange={this.onChangeSubject}
          />
        </div>

        <textarea
          className="contact-form__textarea"
          value={this.state.text}
          name="text"
          onChange={this.onChangeText}
        />
        <button className="contact-form__button">Submit</button>
      </form>
    );
  }
}

export default ContactForm;
