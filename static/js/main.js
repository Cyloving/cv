$(document).ready(function () {
    // let aclass = "rotateInUpLeft rotateOutUpLeft rotateInDownLeft rotateOutDownLeft";
    $(".work-box").css("height", $(".work-box").width() + 20);
    $("#fullpage").fullpage({
        //导航
        navigation: true,
        navigationPosition: "right",
        sectionsColor: ["#00adef", "#22c3aa", "#8727e1", "#f5586d", "#2b3137"],
        onLeave: function (index, nextIndex, direction) {
            // if (direction == "down") {
            //     $("#section" + index)
            //         .removeClass(aclass)
            //         .addClass("rotateOutUpLeft");
            //     $("#section" + nextIndex)
            //         .removeClass(aclass)
            //         .addClass("rotateInUpLeft");
            // } else if (direction == "up") {
            //     $("#section" + index)
            //         .removeClass(aclass)
            //         .addClass("rotateOutDownLeft");
            //     $("#section" + nextIndex)
            //         .removeClass(aclass)
            //         .addClass("rotateInDownLeft");
            // }
        }
    });
});

$(window).resize(function () {
    $(".work-box").css("height", $(".work-box").width() + 20);
});
