<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>scroll demo</title>
    <style>
        div { color:blue; }
        p { color:green; }
        span { color:red; display:none; }
    </style>
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
</head>
<body>
<div>Try scrolling the iframe.</div>
<p>Paragraph - <span>Scroll happened!</span></p>
<div id="target" style="overflow: scroll; width: 200px; height: 100px;">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui
    officia deserunt mollit anim id est laborum.
</div>
<div id="other">
    Trigger the handler
</div>
<div id="log"></div>

<script>
    $("p").clone().appendTo(document.body);
    $("p").clone().appendTo(document.body);
    $("p").clone().appendTo(document.body);
    $(window).scroll(function () {
        $("span").css("display", "inline").fadeOut("slow");
    });



</script>
<style type="text/css">
    <!--
    body{scrollbar-face-color: #000000;
        scrollbar-shadow-color: #2D2C4D;
        scrollbar-highlight-color:#7D7E94;
        scrollbar-3dlight-color: #7D7E94;
        scrollbar-darkshadow-color: #2D2C4D;
        scrollbar-track-color: #7D7E94;
        scrollbar-arrow-color: #C1C1D1;
    }
    </style>

</body>
</html>