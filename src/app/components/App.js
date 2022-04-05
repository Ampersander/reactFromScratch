import Component from '../Fleat/Component.js';
import { Fleat } from '../Fleat/Fleat.js';
import Home from '../components/Home.js';
import Menu from '../Fleat/Menu.js';
import Position from '../components/Position.js';

class App extends Component {
	render() {
		const route = window.location.pathname;

		switch (route) {
			case '/position':
				return Fleat.createElement(this, Position, null, null);
			default:
				return Fleat.createElement(this, Home);
		}
	}
}
export default App;
