import { Fleat } from '../Fleat/Fleat.js';
import Component from '../Fleat/Component.js';

import Menu from './Menu.js';
import Home from './Home.js';
import Players from './Players.js';
import Merch from './Merch.js';
import Position from './Position.js';
import Contact from './Contact.js';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const route = window.location.pathname;

		Fleat.createElement(this, Menu, null, null);

		const routes = {
			'/': Home,
			'/players': Players,
			'/merch': Merch,
			'/position': Position,
			'/contact': Contact,
		};

		// TODO Error404.js
		return Fleat.createElement(this, 'div', null,
			// Place the menu except for the home page which will load a customized one
			route != '/' && Fleat.createElement(this, Menu, null, null),
			Fleat.createElement(this, routes[route] || Home)
		);
	}
}

export default App;