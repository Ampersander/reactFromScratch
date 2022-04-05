import App from './components/App.js';
import { FleatDOM, Fleat } from './Fleat/Fleat.js';

let app = document.getElementById('app'), event = new Event('updateFleatDom');

app.addEventListener('updateFleatDom', (e) => {
	app.innerHTML = '';
	FleatDOM.render(Fleat.createElement({ id: 'app' }, App, null, null), app);
});

app.dispatchEvent(event);