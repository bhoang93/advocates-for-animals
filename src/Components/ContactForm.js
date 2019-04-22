import React from "react";

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      text: "",
      submitError: false
    };
  }

  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };

  onChangeText = e => {
    this.setState({ text: e.target.value });
  };

  onChangeName = e => {
    this.setState({ name: e.target.value });
  };

  submitEmail = e => {
    const { email, name, text } = this.state;
    if (email.trim() === "" || name.trim() === "" || text.trim() === "") {
      e.preventDefault();
      this.setState({ submitError: true });
    }
  };

  render() {
    return (
      <form
        onSubmit={this.submitEmail}
        className="contact-form"
        name="contact"
        method="POST"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="contact-form__input-block">
          <div className="contact-form__input-block">
            <label className="contact-form__label">Name: </label>
            <input
              className="contact-form__input"
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.onChangeName}
            />
          </div>

          <label className="contact-form__label">Email: </label>
          <input
            className="contact-form__input"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
        </div>

        <textarea
          className="contact-form__textarea"
          value={this.state.text}
          name="text"
          onChange={this.onChangeText}
        />
        <button className="contact-form__button">Submit</button>
        {this.state.submitError && (
          <p className="contact-form__form-error">
            Please make sure all fields are filled in.
          </p>
        )}
      </form>
    );
  }
}

export default ContactForm;
