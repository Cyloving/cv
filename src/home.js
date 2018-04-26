import React, { Component } from "react";

class Div extends Component {
    render() {
        let language = this.props.language;
        return (
            <div id="div0" className="active">
                <div className="bgc" />
                <div className="name">
                    <div className="name_box">
                        <em>{language.name}</em>
                    </div>
                    <p>{language.name_sub}</p>
                </div>
            </div>
        );
    }
}

export default Div;
