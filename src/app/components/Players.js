import { Fleat } from '/app/Fleat/Fleat.js';
import Component from '/app/Fleat/Component.js'

import Menu from '/app/components/Menu.js'

class Players extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: history.state['products'],
			users: history.state['users'],
			isfetching: false,
		};
	}

  	render() {
		return Fleat.createElement(this, 'div', null,
      		Fleat.createElement(this, 'h1', { class: 'font-bold text-lg text-center mb-4' }, this.id + ' • League Merch'),
    	)
  	}
}

export default Players;
