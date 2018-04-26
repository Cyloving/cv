import React, { Component } from "react";
import { BottomNavigation, BottomNavigationItem } from "material-ui/BottomNavigation";
import Paper from "material-ui/Paper";
import $ from "jquery";
import ActionHome from "material-ui/svg-icons/action/home";
import ActionFace from "material-ui/svg-icons/action/face";
import ActionWork from "material-ui/svg-icons/action/work";
import ToggleStar from "material-ui/svg-icons/toggle/star-border";
const homeIcon = <ActionHome />;
const aboutIcon = <ActionFace />;
const workIcon = <ActionWork />;
const starIcon = <ToggleStar />;

const nobg = {
    background: "transparent"
};
class BottomNavigationExampleSimple extends Component {
    state = {
        selectedIndex: 0
    };

    componentDidMount() {
        let _this = this;
        document.body.onmousewheel = this.throttle(function(e) {
            let index = _this.state.selectedIndex;
            let flag = e.wheelDelta;
            if (flag > 0) {
                //up
                index = index > 0 ? index - 1 : index;
            } else if (flag < 0) {
                //down.
                index = index < 3 ? index + 1 : index;
            }
            $(".content").css("transform", "translate3d(0px, -" + index * 100 + "%, 0px)");
            $("#div" + index)
                .addClass("active")
                .siblings()
                .removeClass("active");
            _this.setState({ selectedIndex: index });
        }, 1000);

        let YStart = 0;
        let winH = window.innerHeight;
        //手指按下
        document.body.addEventListener("touchstart", function(e) {
            YStart = e.changedTouches[0].clientY;
        });

        //手指离开
        document.body.addEventListener("touchend", function(e) {
            let index = _this.state.selectedIndex;
            let disY = e.changedTouches[0].clientY - YStart; //向下滑正，向上滑负
            if (Math.abs(disY) > winH / 20) {
                //只有当滑动距离大于了一定值得时候，才执行切换
                if (disY < 0) {
                    index = index < 3 ? index + 1 : index;
                } else {
                    index = index > 0 ? index - 1 : index;
                }
                $(".content").css("transform", "translate3d(0px, -" + index * 100 + "%, 0px)");
                $("#div" + index)
                    .addClass("active")
                    .siblings()
                    .removeClass("active");
                _this.setState({ selectedIndex: index });
            }
        });
    }

    throttle = (fn, threshhold) => {
        var last;
        return function() {
            var context = this;
            var args = arguments;
            var now = +new Date();
            if (last && now < last + threshhold) {
                return;
            } else {
                last = now;
                fn.apply(context, args);
            }
        };
    };

    select = (index) => {
        this.setState({ selectedIndex: index });
        $(".content").css("transform", "translate3d(0px, -" + index * 100 + "%, 0px)");
        $("#div" + index)
            .addClass("active")
            .siblings()
            .removeClass("active");
        switch (index) {
            case 0:
                window.location.href = "#home";
                break;
            case 1:
                window.location.href = "#about";
                break;
            case 2:
                window.location.href = "#work";
                break;
            default:
                window.location.href = "#portfolio";
        }
    };

    render() {
        let language = this.props.language;
        return (
            <Paper zDepth={1} style={nobg}>
                <BottomNavigation selectedIndex={this.state.selectedIndex} style={nobg}>
                    <BottomNavigationItem label={language.Home} icon={homeIcon} onClick={() => this.select(0)} />
                    <BottomNavigationItem label={language.About} icon={aboutIcon} onClick={() => this.select(1)} />
                    <BottomNavigationItem label={language.Experience} icon={workIcon} onClick={() => this.select(2)} />
                    <BottomNavigationItem label={language.Portfolio} icon={starIcon} onClick={() => this.select(3)} />
                </BottomNavigation>
            </Paper>
        );
    }
}

export default BottomNavigationExampleSimple;
