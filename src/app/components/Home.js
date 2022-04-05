import { Fleat } from "/app/Fleat/Fleat.js";
import Component from "/app/Fleat/Component.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    };
  }

  async init() {}

  readURL = async (selectedFile) => {
    if (
      selectedFile.target
    ) {
      var reader = new FileReader();

      reader.onload = (e) => {
        this.setState({ image: e.target.result });
        console.log(e)
      };
      
      this.shouldUpdate()
      console.log(this.getState().image)

    }

  };

  shouldUpdate() {
  }

  render() {
    return Fleat.createElement(
      this,
      "div",
      null,
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
            Fleat.createElement(this, "input", {
              type: "file",
              id: "image",
              class: "upload",
              onChange: (e) => this.readURL(e),
            }),
            Fleat.createElement(this, "img", {
              type: "file",
              class: "w-42 h-42 rounded-full mx-auto",
              src: `data:image/jpeg;${this.state.image}`,
              alt: "uploaded image",
            }),
            Fleat.createElement(
              this,
              "h1",
              { class: "text-center" },
              'd'
            )
          )
        )
      )
    );
  }
}

export default Home;
