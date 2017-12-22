$(function () {
    $(".dropdown").click(function () {
        $(".dropdown-menu").toggle();
        $(this).toggleClass("active");
        $(".mask").toggle();
    });
    $(".dropdown-menu li").click(function () {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
    });
    //自动计算课程标题宽度,超出宽度文字隐藏
    $(".course-intro h3")
        .width($(".course-intro").width() - $(".course-intro span").width());

    // $("#filter-menu").click(function () {
    //
    // })

    $("#details").click(function () {
        $(this)
            .find("a")
            .addClass("active")
            .end()
            .siblings()
            .find("a")
            .removeClass("active")
            .find("span").removeClass("active-color");
        $(".details-box").show();
        $(".comment-box").hide();
        $(".apply").show().siblings().hide();
    });
    $("#comment").click(function () {
        $(this)
            .find("a")
            .addClass("active")
            .find("span").addClass("active-color")
            .end()
            .end()
            .siblings()
            .find("a")
            .removeClass("active");

        $(".comment-box").show();
        $(".details-box").hide();
        $(".reply").show().siblings().hide();
    })

});
