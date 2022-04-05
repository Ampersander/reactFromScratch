import { Fleat } from "/app/Fleat/Fleat.js";
import Component from "/app/Fleat/Component.js";
import Menu from "../Fleat/Menu.js"

class Contact extends Component {

  render() {
    return Fleat.createElement(this, "div", null,
      Fleat.createElement(this, Menu, null, null),
      Fleat.createElement(this, 'form', null,
        Fleat.createElement(this, 'input', {
          type: 'text',
          placeholder: 'Name *',
        }),
        Fleat.createElement(this, 'input', {
          type: 'email',
          placeholder: 'Email *',
        }),
        Fleat.createElement(this, 'textarea', {
          placeholder: 'Description',
        }),
        Fleat.createElement(this, 'button', {type: 'submit'},
        "Submit")
      )
    )
  }
}

export default Contact;
