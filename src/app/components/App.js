import Component from '../Fleat/Component.js';
import { Fleat } from '../Fleat/Fleat.js';
import Home from '../components/Home.js';
import Menu from '../Fleat/Menu.js';
<<<<<<< HEAD
import Contact from './Contact.js';
import Players from './Players.js';
import Merch from './Merch.js';
=======
import Position from '../components/Position.js';
>>>>>>> fcf9bc9f948e3dab39d40381694afdf1e34b6da7

class App extends Component {
	render() {
		const route = window.location.pathname;

		switch (route) {
<<<<<<< HEAD
			case '/':
				return Fleat.createElement(this, Home, null, null);
			case '/players':
				return Fleat.createElement(this, Players, null, null);
			case '/merch':
				return Fleat.createElement(this, Merch, null, null);			
			case '/contact':
				return Fleat.createElement(this, Contact, null, null);
=======
			case '/position':
				return Fleat.createElement(this, Position, null, null);
>>>>>>> fcf9bc9f948e3dab39d40381694afdf1e34b6da7
			default:
				return Fleat.createElement(this, Home, null, null);
		}
	}
}
export default App;
