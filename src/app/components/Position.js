import Component from "../Fleat/Component.js";
import { Fleat } from "../Fleat/Fleat.js";
import Menu from "../Fleat/Menu.js"

class Position extends Component {
  constructor(props) {
    super(props);
    this.state = { position: "Get Position" };
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
    //this.setState({ position: "Latitude: " + position.coords.latitude });
  }

  render() {
    return Fleat.createElement(
        this,
        "div",
        null,
        Fleat.createElement(this, Menu, null, null),
        Fleat.createElement(
          this,
          "h1",
          { class: "font-bold text-lg text-center" },
          "League Merch"
        ),
        Fleat.createElement(
            this,
            "div",
            { style: "border: 3px solid grey; padding: 10px;",
            class: "flex flex-wrap justify-center" },
            
            Fleat.createElement(
              this,
              "button",
              {
                class: "btn btn-primary flex flex-wrap justify-center",
                style: "margin: 5px;",
                onClick: () => this.getLocation(this),
              },
              ` ${this.state.position}`
            )
          )
      );
    
    
  }
}

export default Position;
