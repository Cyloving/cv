import React, { Component } from "react";
import $ from "jquery";

class Div extends Component {
    state = {};

    showmore = (id) => {
        $(id).toggleClass("show_item");
    };

    render() {
        let language = this.props.language;
        return (
            <div id="div2">
                <div className="bgc" />
                <div className="box">
                    <div className="timeline_box">
                        <div className="timeline">
                            <div className="timeline_item">— {language.work_step3}</div>
                            <div className="timeline_item pl4 grey" id="s3" onClick={() => this.showmore("#s3")}>
                                {language.work_tit3}
                                <div className="show">{language.work_detail3}</div>
                            </div>
                            <div className="timeline_item">— {language.work_step2}</div>
                            <div className="timeline_item pl4 grey" id="s2" onClick={() => this.showmore("#s2")}>
                                {language.work_tit2}
                                <div className="show">{language.work_detail2}</div>
                            </div>
                            <div className="timeline_item">— {language.work_step1}</div>
                            <div className="timeline_item pl4 grey">{language.work_tit1}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Div;
