import { Fleat } from '../Fleat/Fleat.js';
import Component from '../Fleat/Component.js';

import Menu from './Menu.js';

class Merch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: history.state['products'],
			isfetching: false,
		};
  }

	render() {
		return Fleat.createElement(
			this,
			'div',
			null,
			Fleat.createElement(
				this,
				'h1',
				{ class: 'font-bold text-lg text-center mb-4' },
				this.id + ' • League Merch'
			)
		);
	}
}

export default Merch;
