import Component from './Component.js';
import { Fleat } from './Fleat.js';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { routes: '' };
    }

    goTo(name, url) {
        history.pushState({ users: this.props.users, comments: this.props.comments}, name, url);
        this.setState({ routes: url });
    }

    render() {
        return Fleat.createElement(this, 'nav', { class: 'navbar navbar-expand-lg navbar-light bg-light position-sticky top-0', style: "z-index: 4;" },
            // Container
            Fleat.createElement(this, 'div', { class: 'container-fluid' },
                Fleat.createElement(this, 'a', { class: 'navbar-brand' }, 'League Merch'),
                Fleat.createElement(this, 'button', { class: 'navbar-toggler border-0', type: 'button', dataBsToggle: 'collapse', dataBsTarget: '#navbarText', ariaControls: 'navbarText', ariaExpanded: 'false', ariaLabel: 'Toggle navigation' },
                    Fleat.createElement(this, 'span', { class: 'navbar-toggler-icon' })
                ),
                Fleat.createElement(this, 'div', { class: 'collapse navbar-collapse', id: "navbar" },
                    Fleat.createElement(this, 'div', { class: 'navbar-nav' },
                        Fleat.createElement(this, 'a', { class: 'nav-link active', onClick: () => this.goTo('Players', '/players'), role: 'button' },
                            'Players'
                        ),
                        Fleat.createElement(this, 'a', { class: 'nav-link', onClick: () => this.goTo('Merch', '/merch'), role: 'button' },
                            'Merch'
                        ),
                        Fleat.createElement(this, 'a', { class: 'nav-link', onClick: () => this.goTo('contact', '/contact'), role: 'button' },
                            'Contact'
                        ),
                        Fleat.createElement(this, 'a', { class: 'nav-link', onClick: () => this.goTo('Position', '/position'), role: 'button' },
                            'Position'
                        ),
                    )
                )
            )
        );
    }
}

export default Menu;