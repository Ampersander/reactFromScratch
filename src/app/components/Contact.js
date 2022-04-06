import { Fleat } from '../Fleat/Fleat.js';
import Component from '../Fleat/Component.js';

import Menu from './Menu.js'

class Contact extends Component {
  
  render() {
    const LABEL_ATTR = { class: 'control-label mt-2' }
    const INPUT_ATTR = { class: 'form-control mb-2' }
    const SUBMIT_ATTR = { class: 'btn btn-outline-primary text-end border border-dark mt-4 float-end' }

    return Fleat.createElement(this, 'div', { class: 'container pt-5 w-75' },
      Fleat.createElement(this, 'h1', { class: 'font-bold text-lg text-center mb-4' }, this.id + ' • League Merch'),
      Fleat.createElement(this, 'div', { class: 'custom-ball' }),
      Fleat.createElement(this, 'div', { class: 'custom-login-block' },
        Fleat.createElement(this, 'div', { class: 'row justify-content-center' },
          Fleat.createElement(this, 'div', { class: 'col-5 d-none d-lg-block login-image align-self-center' },
            Fleat.createElement(this, 'img', { class: 'img-fluid custom-style-img-login', src: "/public/assets/img/lolLogin.png", alt: 'lolLogin' }),
          ),
          Fleat.createElement(this, 'div', { class: 'col col-lg-6 login-block'},
            Fleat.createElement(this, 'p', null, 'We will try to get back to you as soon as possible.'),
            Fleat.createElement(this, 'form', { class: 'row', method: 'post', action: '/contact' },
              Fleat.createElement(this, 'label', { ...LABEL_ATTR, for: 'name' }, 'Name'),
              Fleat.createElement(this, 'input', { ...INPUT_ATTR, name: 'name', type: 'text', placeholder: 'Name', required: true, autofocus: true }),
              Fleat.createElement(this, 'label', { ...LABEL_ATTR, for: 'email' }, 'Email'),
              Fleat.createElement(this, 'input', { ...INPUT_ATTR, name: 'email', type: 'email', placeholder: 'Email', required: true, autocomplete: 'email' }),
              Fleat.createElement(this, 'label', { ...LABEL_ATTR, for: 'message' }, 'Message'),
              Fleat.createElement(this, 'textarea', { ...INPUT_ATTR, name: 'message', placeholder: 'Message', required: true }),
              Fleat.createElement(this, 'div', { class: 'col-12'},
                Fleat.createElement(this, 'button', { ...SUBMIT_ATTR, type: 'submit' }, 'Submit')
              )
            )
          )
        )
      )
    )
  }
}

export default Contact;
