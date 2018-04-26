import React, { Component } from "react";
import Dialog from "material-ui/Dialog";

class Div extends Component {
    state = {
        index: 0,
        open: false
    };

    handleOpen = (index) => {
        this.setState({ open: true, index });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div id="div3">
                <div className="bgc" />
                <div className="work_box">
                    <div className="picture_box">
                        <Dialog modal={false} open={this.state.open} onRequestClose={this.handleClose}>
                            <img src={require("./img/w" + this.state.index + ".jpg")} width="100%" alt="" />
                        </Dialog>
                        <div className="picture_show">
                            <a href="javascript:void(0)">
                                <img src={require("./img/w0.jpg")} width="100%" height="100%" alt="" />
                            </a>
                            <div className="cover" onClick={() => this.handleOpen(0)}>
                                tcl goa system
                            </div>
                        </div>
                        <div className="picture_show">
                            <a href="javascript:void(0)">
                                <img src={require("./img/w1.jpg")} width="100%" height="100%" alt="" onClick={() => this.handleOpen(1)} />
                            </a>
                            <div className="cover" onClick={() => this.handleOpen(1)}>
                                kingtv
                            </div>
                        </div>
                        <div className="picture_show">
                            <a href="javascript:void(0)">
                                <img src={require("./img/w2.jpg")} width="100%" height="100%" alt="" onClick={() => this.handleOpen(2)} />
                            </a>
                            <div className="cover" onClick={() => this.handleOpen(2)}>
                                panel
                            </div>
                        </div>
                        <div className="picture_show">
                            <a href="javascript:void(0)">
                                <img src={require("./img/w3.jpg")} width="100%" height="100%" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Div;
