import Component from "../Fleat/Component.js";
import { Fleat } from "../Fleat/Fleat.js";

class Position extends Component {
  constructor(props) {
    super(props);
    this.state = { position: "Latitude: 0.0000 Longitude: 0.0000" };
  }
   getLocation() {
    let pos = "";
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    return pos;
  }

  showPosition(position) {
    alert(
      "Latitude: " +
        position.coords.latitude +
        "Longitude: " +
        position.coords.longitude
    );
    this.setState({ position: "Latitude: " + position.coords.latitude });
  }

  render() {
    return Fleat.createElement(
      this,
      "div",
      { style: "border: 3px solid grey; padding: 10px;" },
      Fleat.createElement(this, "h1", this.props, `Position Component`),
      Fleat.createElement(
        this,
        "button",
        {
          class: "btn btn-primary",
          style: "margin: 5px;",
          onClick: () => this.getLocation(this),
        },
        ` ${this.state.position}`
      )
    );
  }
}

export default Position;
