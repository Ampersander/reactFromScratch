import Component from '../Fleat/Component.js';
import { Fleat } from '../Fleat/Fleat.js';
<<<<<<< Updated upstream
import Home from '../components/Home.js';
=======
import Menu from '../Fleat/Menu.js';
>>>>>>> Stashed changes

class App extends Component {
	render() {
		const route = window.location.pathname;

		switch (route) {
			default:
<<<<<<< Updated upstream
				return Fleat.createElement(this, Home);
=======
				return Fleat.createElement(this, Menu, null, null);
>>>>>>> Stashed changes
		}
	}
}
export default App;
