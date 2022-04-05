import Component from '../Fleat/Component.js';
import { Fleat } from '../Fleat/Fleat.js';
import Home from '../components/Home.js';
import Menu from '../Fleat/Menu.js';
import Contact from './Contact.js';
import Players from './Players.js';
import Merch from './Merch.js';

class App extends Component {
	render() {
		const route = window.location.pathname;

		switch (route) {
			case '/':
				return Fleat.createElement(this, Home, null, null);
			case '/players':
				return Fleat.createElement(this, Players, null, null);
			case '/merch':
				return Fleat.createElement(this, Merch, null, null);			
			case '/contact':
				return Fleat.createElement(this, Contact, null, null);
			default:
				return Fleat.createElement(this, Home, null, null);
		}
	}
}
export default App;
