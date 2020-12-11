import React, { Component } from "react";
import "./App.css";
import Circles from "./components/Circles/Circles";
import CircleSelector from "./components/CircleSelector/CircleSelector";

class App extends Component {
  constructor() {
    super();
    this.state = {
      buttonNumber: "1",
      selectedButton: "False",
    };
  }

  changeColor = () => {
    if ((this.state.buttonNumber = "2"))
      this.setState({
        backgroundcolor: "black",
      });
  };

  handleChangeColor = (e) => {
    console.log("ChangeColor Hit!");
    this.setState({
      buttonNumber: "1",
    });
  };

  handleChangeColor2 = (e) => {
    console.log("ChangeColor2 Hit!");
    this.setState({
      buttonNumber: "2",
    });
    this.changeColor();
  };

  handleChangeColor3 = (e) => {
    console.log("ChangeColor3 Hit!");
    this.setState({
      buttonNumber: "3",
    });
  };

  handleChangeColor4 = (e) => {
    console.log("ChangeColor4 Hit!");
    this.setState({
      buttonNumber: "4",
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
          <main>
            <CircleSelector
              handleChangeColor={this.handleChangeColor}
              handleChangeColor2={this.handleChangeColor2}
              handleChangeColor3={this.handleChangeColor3}
              handleChangeColor4={this.handleChangeColor4}
              changeColor={this.changeColor}
            />
            <Circles />
          </main>
        </div>
      </>
    );
  }
}

export default App;
