import { Fleat } from "/app/Fleat/Fleat.js";
import Component from "/app/Fleat/Component.js";
import Menu from "../Fleat/Menu.js"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async init() {}
  shouldUpdate() {
    this.init();
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
        { class: "flex flex-wrap justify-center" },
        Fleat.createElement(
          this,
          "div",
          { class: "w-full md:w-1/2 lg:w-1/3 p-4" },
          Fleat.createElement(
            this,
            "div",
            { class: "flex flex-col items-center" },
            Fleat.createElement(this, "img", {
              src: "https://fakeimg.pl/350x200/?text=League%20Merch&font=lobster",
              class: "w-full",
            })
          )
        )
      )
    );
  }
}

export default Home;
