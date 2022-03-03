import React from "react";
import { Navigate } from "react-router-dom";
import "../styles/gallary.css";
var listOfImages = [];

class Art extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listName: "desmos_polarr",
      counter: 0,
      image: "",
      isHidden: false,
      login: false,
    };

    this.handleClickForward = this.handleClickForward.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleClickList = this.handleClickList.bind(this);
  }

  pegImage() {
    let pos = listOfImages.findIndex((el) =>
      el.includes("image" + this.state.counter)
    );
    this.setState({
      image: listOfImages[pos],
    });

    return pos;
  }

  findPos = (calc) => {
    if (calc === "add") {
      this.setState(
        {
          counter: this.state.counter + 1,
        },
        () => {
          this.pegImage();
        }
      );
    } else {
      this.setState(
        {
          counter: this.state.counter - 1,
        },
        () => {
          this.pegImage();
        }
      );
    }
  };

  handleClickForward() {
    console.log(this.state.counter);
    if (this.state.counter < listOfImages.length - 1) {
      this.findPos("add");
    } else {
      this.setState({
        counter: 0,
        image: listOfImages[0],
      });
    }
  }
  handleClickBack() {
    if (this.state.counter > 0) {
      console.log(this.state.counter);
      this.findPos("sub");
    } else {
      this.setState(
        {
          counter: listOfImages.length - 1,
        },
        () => {
          console.log(this.state.counter);
          let pos = listOfImages.findIndex((el) =>
            el.includes("image" + this.state.counter)
          );
          this.setState({
            image: listOfImages[pos],
          });
        }
      );
    }
  }

  importAll(r) {
    return r.keys().map(r);
  }

  myFunction(listName) {
    if (listName === "desmos_polarr") {
      this.setState({ isHidden: false });
      listOfImages = this.importAll(
        require.context("../images/desmos_polarr", false, /\.(png|jpe?g|svg)$/)
      );
    } else if (listName === "iphone_edits") {
      this.setState({ isHidden: false });
      listOfImages = this.importAll(
        require.context("../images/iphone_edits", false, /\.(png|jpe?g|svg)$/)
      );
    } else if (listName === "paintings") {
      listOfImages = this.importAll(
        require.context(
          "../images/nvidia_images/paintings",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );
    } else if (listName === "unreal") {
      listOfImages = this.importAll(
        require.context(
          "../images/nvidia_images/unreal",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );
    } else {
      this.setState({ isHidden: true });

      listOfImages = this.importAll(
        require.context(
          "../images/nvidia_images/paintings",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );
    }

    this.setState({ counter: 0 }, () => {
      let pos = listOfImages.findIndex((el) =>
        el.includes("image" + this.state.counter)
      );
      this.setState({ image: listOfImages[pos] });
    });
  }

  componentDidMount() {
    this.myFunction(this.state.listName);
  }

  handleClickList(e) {
    this.setState({ listName: e.target.innerHTML }, () => {
      this.myFunction(this.state.listName);
    });
  }

  render() {
    return (
      <div>
        {this.state.login ? (
          <div>
            {" "}
            <div id="myBtnDiv">
              <div id="mainBtn">
                <button
                  className="myBtn"
                  onClick={(e) => this.handleClickList(e)}
                >
                  desmos_polarr
                </button>
                <button
                  className="myBtn"
                  onClick={(e) => this.handleClickList(e)}
                >
                  iphone_edits
                </button>
                <button
                  className="myBtn"
                  onClick={(e) => this.handleClickList(e)}
                >
                  nvidia_images
                </button>
              </div>
              {this.state.isHidden === true && (
                <div id="subBtn">
                  {" "}
                  <button
                    className="myBtn"
                    onClick={(e) => this.handleClickList(e)}
                  >
                    paintings
                  </button>
                  <button
                    className="myBtn"
                    onClick={(e) => this.handleClickList(e)}
                  >
                    unreal
                  </button>
                </div>
              )}
            </div>
            <div id="wrapContent">
              <div>
                <button onClick={this.handleClickBack}> {"<"} </button>
              </div>
              <div id="wrapImage">
                <img
                  key={1}
                  src={this.state.image}
                  className="image"
                  alt="info"
                ></img>
              </div>
              <div>
                {" "}
                <button onClick={this.handleClickForward}> {">"} </button>
              </div>
            </div>
          </div>
        ) : (
          <Navigate from="/art" to="/" />
        )}
      </div>
    );
  }
}

export default Art;
