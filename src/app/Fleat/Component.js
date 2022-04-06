class Component {
  constructor() {
    this.id = this.constructor.name;
    this.props = {};
    this.state = {};
    this.previousState = {};
    this.previousProps = {};
    this.previousRender = undefined;
  }

  updateFleat() {
    var event = new Event('updateFleatDom');
    const app = document.getElementById('app');
    app.dispatchEvent(event, this.id);
  }

  setState(newState) {
    this.previousState = this.state;
    this.state = { ...this.previousState, ...newState };
    this.updateFleat();
    return this.updateDOM();
  }

  getState() {
    return this.state;
  }

  display(newProps) {
    if (this.shouldUpdate(newProps)) {
      if (newProps !== null) {
        this.props = newProps;
      }

      this.rendered = this.render();

      if (this.props && this.props.children) {
				for (const child in this.props.children) {
					child.display(child.props);
        }
      }
    }
    return this.rendered;
  }

  updateDOM() {
    const shouldUpdate = this.shouldUpdate();
    if (shouldUpdate || !this.previousRender)
      this.previousRender = this.render();
    return this.previousRender;
  }

  shouldUpdate(newProps) {
    return (
      JSON.stringify(this.props) !== JSON.stringify(this.newProps) ||
      newProps === null
    );
  }

  render() {
  }
}

export default Component;
