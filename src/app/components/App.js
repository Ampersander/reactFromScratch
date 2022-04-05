import Component from '../Fleat/Component.js';
import { Fleat } from '../Fleat/Fleat.js';

class App extends Component {
	render() {
		const route = window.location.pathname;

		switch (route) {
			default:
				return Fleat.createElement(this, 'h1', null, 'Hello World!');
		}
	}
}
export default App;
