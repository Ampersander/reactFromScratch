import { Fleat } from '../Fleat/Fleat.js';
import Component from '../Fleat/Component.js';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { routes: '' };
    }

    cacheRoute(name, url) {
        history.pushState({ products: this.props.products }, name, url);
        this.setState({ routes: url });
    }

    render() {
        return Fleat.createElement(this, 'nav', { class: 'navbar navbar-expand-lg navbar-light bg-light position-sticky top-0', style: 'z-index: 4;' },
            // Container
            Fleat.createElement(this, 'div', { class: 'container-fluid' },
                Fleat.createElement(this, 'a', { class: 'navbar-brand', style: 'z-index: 1', href: 'javascript:void(0)', onClick: () => this.cacheRoute('Home', '/') }, 'League Merch'),
                Fleat.createElement(this, 'button', { class: 'navbar-toggler border-0', type: 'button', dataBsToggle: 'collapse', dataBsTarget: '#navbarCollapse', ariaControls: 'navbarCollapse', ariaExpanded: 'false', ariaLabel: 'Toggle navigation' },
                    Fleat.createElement(this, 'span', { class: 'navbar-toggler-icon' })
                ),
                Fleat.createElement(this, 'div', { class: 'collapse navbar-collapse position-absolute w-100 justify-center', id: 'navbarCollapse' },
                    Fleat.createElement(this, 'div', { class: 'navbar-nav' },
                        Fleat.createElement(this, 'a', { class: 'nav-link active', onClick: () => this.cacheRoute('Players', '/players'), role: 'button' },
                            'Players'
                        ),
                        Fleat.createElement(this, 'a', { class: 'nav-link ms-5', onClick: () => this.cacheRoute('Merch', '/merch'), role: 'button' },
                            'Merch'
                        ),
                        Fleat.createElement(this, 'a', { class: 'nav-link ms-5', onClick: () => this.cacheRoute('contact', '/contact'), role: 'button' },
                            'Contact'
                        ),
                        Fleat.createElement(this, 'a', { class: 'nav-link ms-5', onClick: () => this.cacheRoute('Position', '/position'), role: 'button' },
                            'Position'
                        ),
                    )
                )
            )
        );
    }
}

export default Menu;