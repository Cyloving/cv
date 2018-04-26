import React, { Component } from "react";

class Div extends Component {
    state = {};

    render() {
        let language = this.props.language;
        return (
            <div id="div1">
                <div className="bgc" />
                <div className="box">
                    <div className="about_box">
                        <p>{language.about_1}</p>
                        <p>{language.about_2}</p>
                        <p>{language.about_3}</p>
                    </div>
                    <div className="skill_box">
                        <b>{language.Skills}</b>
                        <div className="skill">
                            <div className="skill_text">
                                {language.Frontend}:
                                <span className="skill_item">html5</span>
                                <span className="skill_item">css3</span>
                                <span className="skill_item">react</span>
                                <span className="skill_item">less</span>
                                <span className="skill_item">bootstrap</span>
                                <span className="skill_item">antd</span>
                                <span className="skill_item">jquery</span>
                                <span className="skill_item">ajax</span>
                                <span className="skill_item grey">vue</span>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill_text">
                                {language.Backend}:
                                <span className="skill_item">nodejs</span>
                                <span className="skill_item">es6</span>
                                <span className="skill_item">mocha</span>
                                <span className="skill_item">mysql</span>
                                <span className="skill_item">mongo</span>
                                <span className="skill_item grey">php</span>
                                <span className="skill_item grey">java</span>
                                <span className="skill_item grey">go</span>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill_text">
                                {language.Tool}:
                                <span className="skill_item">webpack</span>
                                <span className="skill_item">git</span>
                                <span className="skill_item">npm</span>
                                <span className="skill_item">bamboo</span>
                                <span className="skill_item">jira</span>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill_text">
                                {language.Others}:
                                <span className="skill_item">wdj</span>
                                <span className="skill_item">ccna</span>
                                <span className="skill_item">helpdesk</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Div;
