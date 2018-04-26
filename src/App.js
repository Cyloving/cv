import React, { Component } from "react";
import "./App.css";
import Bottom from "./bottom_nav";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Home from "./home";
import Aboutme from "./aboutme";
import Work from "./work";
import Portfolio from "./portfolio";
import $ from "jquery";
import cn from "./language_cn";
import en from "./language_en";
const muiTheme = getMuiTheme({
    palette: {
        textColor: "#fff",
        primary1Color: "#fff"
    }
});
let language = [cn, en];
class App extends Component {
    state = {
        language: language[0]
    };

    select = (index) => {
        $("#language" + index)
            .addClass("active")
            .siblings()
            .removeClass("active");
        this.setState({ language: language[index] });
    };

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="content">
                    <div className="language">
                        <span id="language0" className="active" onClick={() => this.select(0)}>
                            中
                        </span>{" "}
                        |
                        <span id="language1" onClick={() => this.select(1)}>
                            {" "}
                            EN
                        </span>
                    </div>
                    <Home language={this.state.language} />
                    <Aboutme language={this.state.language} />
                    <Work language={this.state.language} />
                    <Portfolio language={this.state.language} />
                </div>
                <footer>
                    <Bottom language={this.state.language} />
                </footer>
            </MuiThemeProvider>
        );
    }
}

export default App;
