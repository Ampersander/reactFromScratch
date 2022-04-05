import { Fleat } from "/app/Fleat/Fleat.js";
import Component from "/app/Fleat/Component.js";
import Menu from "../Fleat/Menu.js"

class Players extends Component {

  render() {
    return Fleat.createElement(this, "div", null,
      Fleat.createElement(this, Menu, null, null),
      Fleat.createElement(this, 'h1', null, "Players"
      )
    )
  }
}

export default Players;
