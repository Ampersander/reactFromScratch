import Component from '../React/Component.js';
import { React } from '../React/React.js';
import Loading from '../Components/Loading.js';

class Article extends Component {
	render() {
		if (this.props.isfetching) {
			const products = this.props.products;
			let templete = products.map((product) => {
				return React.createElement(
					this,
					'ul',
					{ class: 'list-unstyled card card-body ' },
					React.createElement(
						this,
						'li',
						{ class: 'media' },
						React.createElement(this, 'img', {
							src: ` ${product.image}`,
							height: '100',
							width: '100',
							class: 'mb-1'
						}),
						React.createElement(
							this,
							'div',
							{ class: 'media-body' },
							React.createElement(this, 'h5', { class: 'mt-0 mb-1' }, ` ${product.title}`),
							React.createElement(this, 'h6', { class: 'mt-0 mb-1' }, ` ${product.category}`),
							React.createElement(this, 'p', null, ` ${product.price + '€'}`)
						)
					)
				);
			});

			return React.createElement(this, 'div', { class: 'container' }, ...templete);
		} else {
			return React.createElement(this, Loading, null, null);
		}
	}
}

export default Article;
export const Contact = (props) => {
    const [state, setState] = Fleat.useState(0);
    return (
      Fleat.createElement('form', {className: 'ContactForm'},
        Fleat.createElement('input', {
          type: 'text',
          placeholder: 'Name *',
          value: this.props.value.name,
        }),
        Fleat.createElement('input', {
          type: 'email',
          placeholder: 'Email *',
          value: this.props.value.email,
        }),
        Fleat.createElement('textarea', {
          placeholder: 'Description',
          value: this.props.value.description,
        }),
        Fleat.createElement('button', {type: 'submit'},
        "Submit")
      )
    );
  }