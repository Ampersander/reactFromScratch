import { Fleat } from '../Fleat/Fleat.js';
import Component from '../Fleat/Component.js';

import Menu from './Menu.js';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			image: 'base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAANIUlEQVR4nOzXjdfXdX3HcS4jNzrerM2FpJG65VF21OnEG7ZFTYYxb9qU1HEYIHPTqbhUSufNok41FGc3tK6V6/KgK+GcKaEpaiclhkRgMoqIgJVY4Rnr4MbtYAP2V7zO6ZzX4/EHvD7nXN/r/J7nPXzMRz8+LOnTY1ZG98//v6Ho/mt/eFx0f+PUGdH93xocFd1fNe5j0f37J340ur9w5rjo/uDEKdH9AzuWR/fnf+Wp6P65Dx0Z3V+46Yro/uwFj0T3r/zjL0b3j4iuA/ALSwAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBp++vJnog+cdPyU6P67dl4c3f/wnROj+79zwrbo/lHbD0T3f/CjVdH99z46P7r/e3u/Ht1/0/+uie6PPefo6P5Rx2+I7l9wywei+19cOyG6//lHB6P7T19we3TfBQBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBoYNXt+9IEJ+6Lzwy79/qei+zd85/3R/Rm7fyO6P+eVS6L7z29/Orq/b0Z0fti9S6dG9xf95luj+yevPhDdX7boYHT/jiWnRPd3XTo9uj9v5m3R/VtHzonuuwAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFLD9794UvSBr/7jtdH9BTdfHd3/2dUzovtXH7krun/jnndG988a81p0f/TWadH9a//jI9H9sZfeE93/8pQXovvzrl8Y3f/66K9E9z87ZV50//G9vx/d/+Gsn0X3XQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQKmBlyedFn3gw4u/FN0fefkV0f1zR54V3d8z6cHo/oidV0X3J3/zm9n9256M7s+54bro/pefHYruP/sPN0X3d6xfHN0/8dQ7ovvr/iL7ffcP/md0/8jn50b3XQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQKmB6XP/NvrAZaMWRvcPLXoguv8Hx705uv8rvzw3uj/rwlnR/VtuXBHdv3vrh6L7L09aHd1/acOZ0f3J73s1uj/ijD+J7l90xI+j+9euOTe6//I566P7Q4eOju67AABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUsMn3rQg+sC6jaui+wd+Pj+6P+uKX4ru7z5yXXT/v7Y8FN1fefrY6P6dPzw6un/akmnR/Udf3BHdf2TOA9H9B1Y+Ft3/9euuie6/Z+r3ovufPOXF6P7e/cOj+y4AgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKDUwOLTPx59YPyhpdH9xy65Mbp/xjOD0f23fePt0f3Be0dE9ye+/1+i+1Pu2Rndv/LbJ0b3P7njvuj+2lHzovtzp38tun/EZT+N7n96/FB0/y1f+Lvo/qExr0f3XQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQKmBpXcdH31g5NWzo/tj9g5F918Z8UJ0f8W+edH9xU+9Gt1/7a/fEt0fN/1z0f2/WrYkuj9s5kXR+Yf/6CPR/csuf290/+eHn4vuX/7u86L7Z8xaG91/1/hx0X0XAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQamDkNXuiDzz9+MnR/c+dvDm6/+L0f4ruT7h1MLp/1eT7ovuPfGp3dP/tnzkU3d90wf7o/qIPDI/u3/xcdn/dU5Oi+6cuPTa6P/3o66P7ixbeH93ffGr2+7oAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSA3t2vRB9YPquJ6L7f/6mZ6P7377ytOj+tPc8H90fsemr0f1tv/aj6P41oz4b3R9acXF0//p/WxLd/+fHjonuL199YXR//fzrovv3TNof3V8z+gvR/W8tOy+67wIAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoNvO+ud0YfeOOY/dH9Jzavie7f946Lovs/PnZ3dP9f79wb3X/pgcej+4t/cnt0/5hHX43uX37Kiuj+KyecEN1/9+jLovvLXpgT3d+x/TPR/WeOyP7+PHjdQ9F9FwBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUGpgyYS/jz5weMY90f0NR82O7n9n/Jbo/v0nbY/ub33pb6L7b71wQ3R/9umnRvePvemE6P6Isy+N7m8/9N3o/viLH4vuP3ziX0b37525ILr/jsG7ovsH522M7rsAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSw4dtOy76wJk7D0b3Fz74vej+uM13R/d/+/Y3R/fPWzkvur/1jU9E9x9e/d3o/re+MTq6v+WGJ6P7rx+/Lrp/84F7o/tP/c9Z0f1fXZX9vmeuGoru3/qnH4zuuwAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFID+2aeHX3g7GOeiO4/v+Xfo/tTL1gb3b/lE+dE98//4NPR/eVXLo3u//Sca6P7d6/7fnT/4Nc+H93/2Jg7ovvbDm+K7t/20Mbo/nPTLonuT/5Q9u9z1IOTo/suAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACg1MDCyU9GH/jB2LnR/dveWB/dn7ViVXR/7O9uiO6/bdrB6P5PRo2O7i94bm10f8INQ9H9XX/239H9mfvvju7fOfXM6P7oGzdG9780Nvv/f8f5E6P7r191OLrvAgAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASv1/AAAA//8tlIwAGXsNrAAAAABJRU5ErkJggg==',
		};
	}

	readURL = selectedFile => {
		if (
			selectedFile.target &&
			selectedFile.target.files.length &&
			selectedFile.target.files[0]
		) {
			const reader = new FileReader();
			reader.onload = selectedFile => {
				this.setState({ image: selectedFile.target.result });
			};
		}
	};

	render() {
		const LABEL_ATTR = { class: 'control-label mt-2' };
		const INPUT_ATTR = { class: 'form-control mb-2' };

		let animal = { name: 'nala', type: this.getState().image };

		return Fleat.createElement(
			this,
			'div',
			null,
			Fleat.createElement(
				this,
				Menu,
				{
					products: this.state.products,
					isfetching: this.state.isfetching,
				},
				null
			),
			Fleat.createElement(
				this,
				'h1',
				{ class: 'font-bold text-lg text-center mb-4' },
				this.id + ' • League Merch'
			),
			Fleat.createElement(
				this,
				'div',
				{ class: 'flex flex-wrap justify-center' },
				Fleat.createElement(
					this,
					'div',
					{ class: 'w-full md:w-1/2 lg:w-1/3 p-4' },
					Fleat.createElement(
						this,
						'div',
						{ class: 'flex flex-col items-center' },
						Fleat.createElement(this, 'img', {
							class: 'img-fluid custom-style-img-login mb-4',
							src: '/public/assets/img/lol.jpg',
							alt: 'lol',
						}),
						Fleat.createElement(
							this,
							'label',
							{ ...LABEL_ATTR, for: 'image' },
							'Upload Image'
						),
						Fleat.createElement(this, 'input', {
							...INPUT_ATTR,
							type: 'file',
							name: 'image',
							id: 'image',
							class: 'upload',
							accept: 'image/*',
							onChange: event => this.readURL(event),
						}),
						Fleat.createElement(
							this,
							'h1',
							{ class: 'text-center mt-8' },
							'Your uploaded image will appear below'
						),
						this.state.image !== '' &&
							Fleat.createElement(this, 'img', {
								type: 'file',
								class: 'w-42 h-42 rounded-full mx-auto mt-8',
								src: `data:image/png;${this.state.image}`,
								alt: 'uploaded image',
							}),
						Fleat.createElement(
							this,
							'textarea',
							{
								class: 'w-100 mx-auto mt-8 break-all',
								disabled: 'true',
								animal,
							},
							'{{ animal.type }}'
						)
					)
				)
			)
		);
	}
}

export default Home;
