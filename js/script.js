window.onload = function () {
    var arm_opened = false,
        rus_opened = false,
        art_opened = false;
    var channelObj = {
        "arm": [{
            "id": 0001,
            "name": "H1 armenian first channel",
            "rating": 4.5,
            "info": "H1 H1 H1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "arm_0001_preview.jpg"
        }, {
            "id": 0002,
            "name": "Armenia TV",
            "rating": 3,
            "info": "armenia_tv is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "arm_0002_preview.jpg"
        }, {
            "id": 0003,
            "name": "USArmenia",
            "rating": 2,
            "info": "usa a is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "arm_0003_preview.jpg"
        }, {
            "id": 0004,
            "name": "H2 second",
            "rating": 5,
            "info": "H2 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "arm_0004_preview.jpg"
        }, {
            "id": 0005,
            "name": "ShantTV",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "arm_0005_preview.jpg"
        }, {
            "id": 0006,
            "name": "tv5",
            "rating": 3.5,
            "info": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "arm_0006_preview.jpg"
        }, {
            "id": 0007,
            "name": "armnews",
            "rating": 3.5,
            "info": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "arm_0007_preview.jpg"
        }, {
            "id": 0008,
            "name": "H3",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "arm_0008_preview.jpg"
        }, {
            "id": 0009,
            "name": "Erkir Media",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "arm_0009_preview.jpg"
        }, {
            "id": 0010,
            "name": "ATV",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "arm_0010_preview.jpg"
        }, {
            "id": 0011,
            "name": "Kentron TV",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "arm_0011_preview.jpg"
        }, {
            "id": 0012,
            "name": "MTV AM",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "arm_0012_preview.jpg"
        }, {
            "id": 0013,
            "name": "Shoghakat",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "arm_0013_preview.jpg"
        }, {
            "id": 0014,
            "name": "A1+",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "arm_0014_preview.jpg"
        }, {
            "id": 0015,
            "name": "Арм ТВ",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "arm_0015_preview.jpg"
        }],

        "rus": [{
            "id": 0001,
            "name": "ОРТ",
            "rating": 4.5,
            "info": "H1 H1 H1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "rus_0001_preview.jpg"
        }, {
            "id": 0002,
            "name": "РТР",
            "rating": 3,
            "info": "armenia_tv is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "rus_0002_preview.jpg"
        }, {
            "id": 0003,
            "name": "НТВ",
            "rating": 2,
            "info": "a is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "rus_0003_preview.jpg"
        }, {
            "id": 0004,
            "name": "ТНТ",
            "rating": 5,
            "info": "H2 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "rus_0004_preview.jpg"
        }, {
            "id": 0005,
            "name": "СТС",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "rus_0005_preview.jpg"
        }, {
            "id": 0005,
            "name": "Культура",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "rus_0006_preview.jpg"
        }, {
            "id": 0005,
            "name": "Домашний",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "rus_0007_preview.jpg"
        }, {
            "id": 0005,
            "name": "Lifenews",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "rus_0008_preview.jpg"
        }, {
            "id": 0005,
            "name": "Пятый канал",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "rus_0009_preview.jpg"
        }, {
            "id": 0005,
            "name": "РЕН ТВ",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "rus_0010_preview.jpg"
        }],

        "art": [{
            "id": 0001,
            "name": "BBC",
            "rating": 4.5,
            "info": "H1 H1 H1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "art_0001_preview.jpg"
        }, {
            "id": 0002,
            "name": "BT Sport",
            "rating": 3,
            "info": "armenia_tv is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "art_0002_preview.jpg"
        }, {
            "id": 0003,
            "name": "Discovery",
            "rating": 2,
            "info": "a is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "art_0003_preview.jpg"
        }, {
            "id": 0004,
            "name": "SkySports",
            "rating": 5,
            "info": "H2 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "art_0004_preview.jpg"
        }, {
            "id": 0005,
            "name": "Setanta",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "art_0005_preview.jpg"
        }, {
            "id": 0006,
            "name": "National Geographic",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "art_0006_preview.jpg"
        }, {
            "id": 0007,
            "name": "HBO",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "art_0007_preview.jpg"
        }, {
            "id": 0008,
            "name": "amc",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "art_0008_preview.jpg"
        }, {
            "id": 0009,
            "name": "CBS",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "art_0009_preview.jpg"
        }, {
            "id": 0010,
            "name": "NBC",
            "rating": 3.5,
            "info": "shant is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quam.",
            "img": "art_0010_preview.jpg"
        }]
    };

    var good = function () {

        var h = $("#arm-slider .item").height();
        console.log("H = " + h);
        $(".owl-prev, .owl-next").height(h);

        var slide_width = $("#arm-slider .owl-item").width();
        var slide_height = $(".owl-item").height();
        $(".owl-wrapper-outer").height(h * 1.6);
        $(".owl-item").width(slide_width);
        $(".owl-wrapper").css("margin-top", h * 0.25 + "px");
        $(".owl-controls .owl-buttons .owl-prev").css("margin-top", h * 0.25 + 3 + "px");
        $(".owl-controls .owl-buttons .owl-next").css("margin-top", h * 0.25 + 3 + "px");

        $(".owl-item").unbind('mouseenter mouseleave');

        $("#arm-slider .owl-item").hover(function () {
                if ($(document).width() > 479) {
                    if (!$(this).hasClass("first-slide") && !$(this).hasClass("last-slide")) {
                        $("#arm-slider .owl-wrapper").css("left", -slide_width * 0.25 + "px");
                    } else if ($(this).hasClass("last-slide")) {
                        $("#arm-slider .owl-wrapper").css("left", -slide_width * 0.5 + "px");
                    }

                    $(this).width(slide_width * 1.5);
                    $(this).css("margin-top", -h * 0.25 + "px");
                }
                $(this).find(".more, .play").addClass("active");

            },
            function () {
                $("#arm-slider .owl-wrapper").css("left", "0px");
                $(this).width(slide_width);
                $(this).css("margin-top", "0px");
                $(this).find(".more, .play").removeClass("active");
            });

        $("#rus-slider .owl-item").hover(function () {
                if ($(document).width() > 479) {
                    if (!$(this).hasClass("first-slide") && !$(this).hasClass("last-slide")) {
                        $("#rus-slider .owl-wrapper").css("left", -slide_width * 0.25 + "px");
                    } else if ($(this).hasClass("last-slide")) {
                        $("#rus-slider .owl-wrapper").css("left", -slide_width * 0.5 + "px");
                    }

                    $(this).width(slide_width * 1.5);
                    $(this).css("margin-top", -h * 0.25 + "px");
                }
                $(this).find(".more, .play").addClass("active");

            },
            function () {
                $("#rus-slider .owl-wrapper").css("left", "0px");
                $(this).width(slide_width);
                $(this).css("margin-top", "0px");
                $(this).find(".more, .play").removeClass("active");
            });

        $("#art-slider .owl-item").hover(function () {
                if ($(document).width() > 479) {
                    if (!$(this).hasClass("first-slide") && !$(this).hasClass("last-slide")) {
                        $("#art-slider .owl-wrapper").css("left", -slide_width * 0.25 + "px");
                    } else if ($(this).hasClass("last-slide")) {
                        $("#art-slider .owl-wrapper").css("left", -slide_width * 0.5 + "px");
                    }

                    $(this).width(slide_width * 1.5);
                    $(this).css("margin-top", -h * 0.25 + "px");
                }
                $(this).find(".more, .play").addClass("active");

            },
            function () {
                $("#art-slider .owl-wrapper").css("left", "0px");
                $(this).width(slide_width);
                $(this).css("margin-top", "0px");
                $(this).find(".more, .play").removeClass("active");
            });

        $("#arm-slider .item").hover(function () {
            if (arm_opened) {
                var arm_num = +$(this).attr("id").replace(/^\D+/g, '') - 1;
                fillPreviewWithChannel("arm", arm_num);
                $("#arm-slider .item").removeClass("opened");
                $(this).addClass("opened");
            }
        });
        $("#rus-slider .item").hover(function () {
            if (rus_opened) {
                var rus_num = +$(this).attr("id").replace(/^\D+/g, '') - 1;
                fillPreviewWithChannel("rus", rus_num);
                $("#rus-slider .item").removeClass("opened");
                $(this).addClass("opened");
            }
        });
        $("#art-slider .item").hover(function () {
            if (art_opened) {
                var art_num = +$(this).attr("id").replace(/^\D+/g, '') - 1;
                fillPreviewWithChannel("art", art_num);
                $("#art-slider .item").removeClass("opened");
                $(this).addClass("opened");
            }
        });

    }

    var fillPreviewWithChannel = function (lang, array_item) {
        var thisObj = channelObj[lang][array_item];
        $("." + lang + "_channel_preview").find(".channel-image").attr("src", "images/" + thisObj["img"]);
        $("." + lang + "_channel_preview").find(".preview-channel-rating").attr("data-stars", thisObj["rating"]);
        $("." + lang + "_channel_preview").find(".preview-channel-name").text(thisObj["name"]);
        $("." + lang + "_channel_preview").find(".preview-channel-info").text(thisObj["info"]);
        console.log(thisObj);
    }

    /*$('.btn-danger').on('click', function () {
        $("#kartik").rating('destroy');
    });

    $('.btn-success').on('click', function () {
        $("#kartik").rating('create');
    });*/

    $('#rating-input').on('rating.change', function () {
        alert($('#rating-input').val());
    });

    /*--- initialize owl carousels ---*/
    $("#arm-slider").owlCarousel({
        items: 5,
        lazyLoad: true,
        scrollPerPage: true,
        navigation: true,
        slideSpeed: 400,
        addClassActive: true,
        mouseDrag: false,
        afterAction: function () {
            console.log("init");
            $("#arm-slider .owl-item").removeClass("first-slide last-slide");
            var last_curr = $("#arm-slider .owl-item.active").length - 1;
            var last = +$("#arm-slider .owl-item").length;
            $("#arm-slider .owl-item.active")[0].classList.add("first-slide");
            $("#arm-slider .owl-item.active")[last_curr].classList.add("last-slide");
            var prev_num = +$("#arm-slider .first-slide").find(".item").attr("id").replace(/^\D+/g, '') - 1;
            var next_num = +$("#arm-slider .last-slide").find(".item").attr("id").replace(/^\D+/g, '') + 1;
            if (prev_num == 0) {
                prev_num = last;
            }
            if (next_num - 1 == last) {
                next_num = 1;
            }
            $("#arm-slider .owl-controls .owl-buttons .owl-prev").css("backgroundImage", "url(./images/prev-slide.png), url(./images/arm_channel" + prev_num + ".jpg)");
            $("#arm-slider .owl-controls .owl-buttons .owl-next").css("backgroundImage", "url(./images/next-slide.png), url(./images/arm_channel" + next_num + ".jpg)");
        }
    });
    $("#rus-slider").owlCarousel({
        items: 5,
        lazyLoad: true,
        scrollPerPage: true,
        navigation: true,
        slideSpeed: 400,
        addClassActive: true,
        mouseDrag: false,
        afterAction: function () {
            $("#rus-slider .owl-item").removeClass("first-slide last-slide");
            var last_curr = $("#rus-slider .owl-item.active").length - 1;
            var last = +$("#rus-slider .owl-item").length;
            $("#rus-slider .owl-item.active")[0].classList.add("first-slide");
            $("#rus-slider .owl-item.active")[last_curr].classList.add("last-slide");
            var prev_num = +$("#rus-slider .first-slide").find(".item").attr("id").replace(/^\D+/g, '') - 1;
            var next_num = +$("#rus-slider .last-slide").find(".item").attr("id").replace(/^\D+/g, '') + 1;
            if (prev_num == 0) {
                prev_num = last;
            }
            if (next_num - 1 == last) {
                next_num = 1;
            }
            $("#rus-slider .owl-controls .owl-buttons .owl-prev").css("backgroundImage", "url(./images/prev-slide.png), url(./images/rus_channel" + prev_num + ".jpg)");
            $("#rus-slider .owl-controls .owl-buttons .owl-next").css("backgroundImage", "url(./images/next-slide.png), url(./images/rus_channel" + next_num + ".jpg)");
        }
    });
    $("#art-slider").owlCarousel({
        items: 5,
        lazyLoad: true,
        scrollPerPage: true,
        navigation: true,
        slideSpeed: 400,
        addClassActive: true,
        mouseDrag: false,
        afterAction: function () {
            $("#art-slider .owl-item").removeClass("first-slide last-slide");
            var last_curr = $("#art-slider .owl-item.active").length - 1;
            var last = +$("#art-slider .owl-item").length;
            $("#art-slider .owl-item.active")[0].classList.add("first-slide");
            $("#art-slider .owl-item.active")[last_curr].classList.add("last-slide");
            var prev_num = +$("#art-slider .first-slide").find(".item").attr("id").replace(/^\D+/g, '') - 1;
            var next_num = +$("#art-slider .last-slide").find(".item").attr("id").replace(/^\D+/g, '') + 1;
            if (prev_num == 0) {
                prev_num = last;
            }
            if (next_num - 1 == last) {
                next_num = 1;
            }
            $("#art-slider .owl-controls .owl-buttons .owl-prev").css("backgroundImage", "url(./images/prev-slide.png), url(./images/art_channel" + prev_num + ".jpg)");
            $("#art-slider .owl-controls .owl-buttons .owl-next").css("backgroundImage", "url(./images/next-slide.png), url(./images/art_channel" + next_num + ".jpg)");
        }
    });
    /*--- eof initialize owl carousels ---*/
    $("#category-slider").owlCarousel({
        items: 5,
        lazyLoad: true,
        scrollPerPage: true,
        navigation: true,
        slideSpeed: 400,
        addClassActive: true,
        mouseDrag: false,
        afterAction: function () {
        }
    });

    var arm_owl = $("#arm-slider").data('owlCarousel');
    var rus_owl = $("#rus-slider").data('owlCarousel');
    var art_owl = $("#art-slider").data('owlCarousel');

    /*--- click on slider item ---*/
    $("#arm-slider .item").on("click", function () {
        $("#arm-slider .item").removeClass("opened");
        $(this).addClass("opened");
    });
    $("#rus-slider .item").on("click", function () {
        $("#rus-slider .item").removeClass("opened");
        $(this).addClass("opened");
    });
    $("#art-slider .item").on("click", function () {
        $("#art-slider .item").removeClass("opened");
        $(this).addClass("opened");
    });
    /*--- eof click on slider item ---*/

    /*--- click on more button ---*/
    $(".arm_more").on("click", function () {
        if (arm_opened) {
            var arm_num = +$(this).parent(".item").attr("id").replace(/^\D+/g, '') - 1;
            fillPreviewWithChannel("arm", arm_num);

        } else {
            arm_opened = true;;
            var arm_num = +$(this).parent(".item").attr("id").replace(/^\D+/g, '') - 1;
            fillPreviewWithChannel("arm", arm_num);
            $(".arm_channel_preview").addClass("opened");

        }
    });
    $(".rus_more").on("click", function () {
        if (rus_opened) {
            var rus_num = +$(this).parent(".item").attr("id").replace(/^\D+/g, '') - 1;
            fillPreviewWithChannel("rus", rus_num);

        } else {
            rus_opened = true;;
            var rus_num = +$(this).parent(".item").attr("id").replace(/^\D+/g, '') - 1;
            fillPreviewWithChannel("rus", rus_num);
            $(".rus_channel_preview").addClass("opened");

        }
    });
    $(".art_more").on("click", function () {
        if (art_opened) {
            var art_num = +$(this).parent(".item").attr("id").replace(/^\D+/g, '') - 1;
            fillPreviewWithChannel("art", art_num);

        } else {
            art_opened = true;;
            var art_num = +$(this).parent(".item").attr("id").replace(/^\D+/g, '') - 1;
            fillPreviewWithChannel("art", art_num);
            $(".art_channel_preview").addClass("opened");

        }
    });
    /*--- eof click on more button ---*/



    /*--- click on preview's close button ---*/
    $(".slide_arm .close-preview").on("click", function () {
        $(".arm_channel_preview").removeClass("opened");
        $("#arm-slider .item").removeClass("opened");
        arm_opened = false;
    });
    $(".slide_rus .close-preview").on("click", function () {
        $(".rus_channel_preview").removeClass("opened");
        $("#rus-slider .item").removeClass("opened");
        rus_opened = false;
    });
    $(".slide_art .close-preview").on("click", function () {
        $(".art_channel_preview").removeClass("opened");
        $("#art-slider .item").removeClass("opened");
        art_opened = false;
    });
    /*--- eof click on preview's close button ---*/

    good();

    $(window).resize(function () {

        arm_owl.reinit({
            items: 5,
            lazyLoad: true,
            scrollPerPage: true,
            navigation: true,
            slideSpeed: 400,
            addClassActive: true,
            mouseDrag: false,
            afterAction: function () {
                $("#arm-slider .owl-item").removeClass("first-slide last-slide");
                var last_curr = $("#arm-slider .owl-item.active").length - 1;
                var last = +$("#arm-slider .owl-item").length;
                $("#arm-slider .owl-item.active")[0].classList.add("first-slide");
                $("#arm-slider .owl-item.active")[last_curr].classList.add("last-slide");
                var prev_num = +$("#arm-slider .first-slide").find(".item").attr("id").replace(/^\D+/g, '') - 1;
                var next_num = +$("#arm-slider .last-slide").find(".item").attr("id").replace(/^\D+/g, '') + 1;
                if (prev_num == 0) {
                    prev_num = last;
                }
                if (next_num - 1 == last) {
                    next_num = 1;
                }
                $("#arm-slider .owl-controls .owl-buttons .owl-prev").css("backgroundImage", "url(./images/prev-slide.png), url(./images/arm_channel" + prev_num + ".jpg)");
                $("#arm-slider .owl-controls .owl-buttons .owl-next").css("backgroundImage", "url(./images/next-slide.png), url(./images/arm_channel" + next_num + ".jpg)");
            }
        });
        rus_owl.reinit({
            items: 5,
            lazyLoad: true,
            scrollPerPage: true,
            navigation: true,
            slideSpeed: 400,
            addClassActive: true,
            mouseDrag: false,
            afterAction: function () {
                $("#rus-slider .owl-item").removeClass("first-slide last-slide");
                var last_curr = $("#rus-slider .owl-item.active").length - 1;
                var last = +$("#rus-slider .owl-item").length;
                $("#rus-slider .owl-item.active")[0].classList.add("first-slide");
                $("#rus-slider .owl-item.active")[last_curr].classList.add("last-slide");
                var prev_num = +$("#rus-slider .first-slide").find(".item").attr("id").replace(/^\D+/g, '') - 1;
                var next_num = +$("#rus-slider .last-slide").find(".item").attr("id").replace(/^\D+/g, '') + 1;
                if (prev_num == 0) {
                    prev_num = last;
                }
                if (next_num - 1 == last) {
                    next_num = 1;
                }
                $("#rus-slider .owl-controls .owl-buttons .owl-prev").css("backgroundImage", "url(./images/prev-slide.png), url(./images/rus_channel" + prev_num + ".jpg)");
                $("#rus-slider .owl-controls .owl-buttons .owl-next").css("backgroundImage", "url(./images/next-slide.png), url(./images/rus_channel" + next_num + ".jpg)");
            }
        });
        art_owl.reinit({
            items: 5,
            lazyLoad: true,
            scrollPerPage: true,
            navigation: true,
            slideSpeed: 400,
            addClassActive: true,
            mouseDrag: false,
            afterAction: function () {
                $("#art-slider .owl-item").removeClass("first-slide last-slide");
                var last_curr = $("#art-slider .owl-item.active").length - 1;
                var last = +$("#art-slider .owl-item").length;
                $("#art-slider .owl-item.active")[0].classList.add("first-slide");
                $("#art-slider .owl-item.active")[last_curr].classList.add("last-slide");
                var prev_num = +$("#art-slider .first-slide").find(".item").attr("id").replace(/^\D+/g, '') - 1;
                var next_num = +$("#art-slider .last-slide").find(".item").attr("id").replace(/^\D+/g, '') + 1;
                if (prev_num == 0) {
                    prev_num = last;
                }
                if (next_num - 1 == last) {
                    next_num = 1;
                }
                $("#art-slider .owl-controls .owl-buttons .owl-prev").css("backgroundImage", "url(./images/prev-slide.png), url(./images/art_channel" + prev_num + ".jpg)");
                $("#art-slider .owl-controls .owl-buttons .owl-next").css("backgroundImage", "url(./images/next-slide.png), url(./images/art_channel" + next_num + ".jpg)");
            }
        });

        good();
    });
};





 
