<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">


    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="js/star-rating.js" type="text/javascript"></script>
    <!-- Latest compiled and minified JavaScript -->
    <script src="jquery-1.11.3.min.js"></script>

    <script src="bootstrap/js/bootstrap.min.js"></script>

    <!-- jQuery library (served from Google) -->

    <!-- bxSlider Javascript file -->
    <script src="js/jquery.bxslider.min.js"></script>
    <!-- bxSlider CSS file -->
    <link href="js/jquery.bxslider.css" rel="stylesheet" />

    <title>TV program</title>
    <link rel = "stylesheet" href = "tvstyle.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
</head>
<body>
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#"><img src = "images/1.png"></a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar_menu">
                <input type="text" class="search" placeholder="Որոնել" ><i class="fa fa-search" id="all"></i>
                <li><a href="#">Գլխավոր</a></li>
                <li><a href="#">Մեր մասին</a></li>
                <li><a href="#">Կապ մեզ մոտ</a></li>
            </ul>
            <ul class="nav navbar-nav registretion_bar">
                <form class="navbar-form navbar-left" role="search">
                    <button type="submit" class="sine">Գրանցվել</button>
                    <button type="submit" class="enter">Մուտք</button>
                </form>
            </ul>

            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Հայ <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Հայ</a></li>
                        <li><a href="#">рус</a></li>
                        <li><a href="#">En</a></li>
                    </ul>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
<!---------------------------menu end --------------->
<!--------------------video start-->
<div class = "video">
    <div class="container">
        <div class = "row">
            <div class="col-md-7 col-sm-7 col-xs-12">
                <iframe width="100%" height="370" src="https://www.youtube.com/embed/tqWAOFJkEIQ" frameborder="0" allowfullscreen>

                </iframe>
            </div>
            <div class="col-md-5 col-sm-5 col-xs-12">
                <div class="said_bar">
                    <img src="images/Armenia_Logo.png" />
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Բոլորը</a></li>
                        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Ամսաթիվ</a></li>
                        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab"> <input type="text" class="search_movie" placeholder="Որոնել" ><i class="fa fa-search" id="movie"></i></a></li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content" id="scroll">
                        <div role="tabpanel" class="tab-pane active" id="home">
                            <div class="panel_tv">
                                <div class = "row">
                                    <div class="col-md-3">
                                        <img src = "images/12.png">
                                    </div>
                                    <div class="col-md-9">
                                        <h4><span>Դոմինո,</span>Սերիա 1</h4>
                                        <h5>01/03/2015</h5>
                                        <h5>10:45</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="panel_tv">
                                <div class = "row">
                                    <div class="col-md-3">
                                        <img src = "images/12.png">
                                    </div>
                                    <div class="col-md-9">
                                        <h4><span>Դոմինո,</span>Սերիա 1</h4>
                                        <h5>01/03/2015</h5>
                                        <h5>10:45</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="panel_tv">
                                <div class = "row">
                                    <div class="col-md-3">
                                        <img src = "images/12.png">
                                    </div>
                                    <div class="col-md-9">
                                        <h4><span>Դոմինո,</span>Սերիա 1</h4>
                                        <h5>01/03/2015</h5>
                                        <h5>10:45</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane" id="profile home">
                            <div class="panel_tv">
                                <div class = "row">
                                    <div class="col-md-3">
                                        <img src = "images/12.png">
                                    </div>
                                    <div class="col-md-9">
                                        <h4><span>Դոմինո,</span>Սերիա 1</h4>
                                        <h5>01/03/2015</h5>
                                        <h5>10:45</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="panel_tv">
                                <div class = "row">
                                    <div class="col-md-3">
                                        <img src = "images/12.png">
                                    </div>
                                    <div class="col-md-9">
                                        <h4><span>Դոմինո,</span>Սերիա 1</h4>
                                        <h5>01/03/2015</h5>
                                        <h5>10:45</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="panel_tv">
                                <div class = "row">
                                    <div class="col-md-3">
                                        <img src = "images/12.png">
                                    </div>
                                    <div class="col-md-9">
                                        <h4><span>Դոմինո,</span>Սերիա 1</h4>
                                        <h5>01/03/2015</h5>
                                        <h5>10:45</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane" id="messages"></div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>


<!--------------------video start-->
<!---------------------------Slider arm start -->
<div class="container-fluid slide_arm">
    <h4>ՇՈՈՒ ԾՐԱԳԻՐ</h4>
    <div class="slider4">
        <div id="channel1" class="slide zoom_img" data-preview="text1">
            <img src="images/a.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down first"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>

        </div>
        <div id="channel2" class="slide zoom_img" data-preview="text1">
            <img src="images/a.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down secound"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>
        </div>
        <div id="channel3" class="slide zoom_img" data-preview="text1">
            <img src="images/a.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>
        </div>
        <div id="channel4" class="slide zoom_img" data-preview="text1">
            <img src="images/a.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>

        </div>
        <div id="channel5" class="slide zoom_img" data-preview="text1">
            <img src="images/a.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>
        </div>
        <div id="channel6" class="slide zoom_img" data-preview="text1">
            <img src="images/a.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>
        </div>

    </div>


    <div id="preview_cont">
        <!------------------------------ arm channel preview start ---------------------------------------------->

        <div class="arm_channel_preview">
            <div class="">
                <div class="">
                    <div class="col-md-6">
                        <div class="list_left">
                            <h3>Դոմինո</h3>
                            <form>
                                <input id="kartik" class="rating" data-stars="5" data-step="0.1" />
                            </form>
                            <h5>Սերիա 1</h5>
                            <p>Լորեմ իպսում իմանալ ավելին</p>
                            <a href="#"><i class="fa fa-plus"></i> Ավելացնել</a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img class="channel-image" src="images/a1.jpg" alt="">
                        <div class="list_right">
                            <a href="#"><i class="fa fa-youtube-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!------------------------------arm channel preview End ---------------------------------------------->


</div>
<!---------------------------Slider arm end -->

<!---------------------------Slider ru start -->
<div class="container-fluid slide_ru">
    <h4>ԼՈՒՐԵՐ</h4>
    <div class="slider4">
        <div class="slide zoom_img">
            <img src="images/b.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down first"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>
        </div>
        <div class="slide zoom_img">
            <img src="images/b.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down secound"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>
        </div>
        <div class="slide zoom_img">
            <img src="images/b.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>
        </div>
        <div class="slide zoom_img">
            <img src="images/b.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>

        </div>
        <div class="slide zoom_img">
            <img src="images/b.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>
        </div>
        <div class="slide zoom_img">
            <img src="images/b.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>
        </div>

    </div>
</div>

<!---------------------------Slider ru end -->

<!---------------------------Slider art start -->

<div class="container-fluid slide_art">
    <h4>ՍՊՈՐՏ</h4>
    <div class="slider4">
        <div class="slide zoom_img">
            <img src="images/a1.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down first"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>
        </div>
        <div class="slide zoom_img">
            <img src="images/a1.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down secound"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>
        </div>
        <div class="slide zoom_img">
            <img src="images/a1.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>
        </div>
        <div class="slide zoom_img">
            <img src="images/a1.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>

        </div>
        <div class="slide zoom_img">
            <img src="images/a1.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>
        </div>
        <div class="slide zoom_img">
            <img src="images/a1.jpg"  title="Magify image on mouse hover using CSS" />
            <a href="#"><i class="fa fa-play-circle-o"></i></a>
            <a class="tggl"><i class="fa fa-angle-down"></i></a>
            <div class="info">
                <p>01:20|01.01.2016</p>
                <h5>Դոմինո</h5>
                <h5>Սերիա 3</h5>
                <h6>1333 դիտում<span>01.01.2016</span></h6>
            </div>
        </div>

    </div>
</div>


<!---------------------------Slider art end -->



<!---------------------------footer start --------------->
<div class = "footer">
    <div class="container-fluid">
        <div class = "row">
            <div class="col-md-6 col-sm-6">
                <div class = "copy">
                    <a href= "#"><i class="fa fa-copyright"></i> Prowerd by <span> I like it </span> Company</a>
                </div>
            </div>
            <div class="col-md-6 col-sm-6">
                <div class = "visa">
                    <ul>
                        <li><a href = "#"><i class="fa fa-cc-paypal"></i></a></li>
                        <li><a href = "#"><i class="fa fa-cc-mastercard"></i> </a></li>
                        <li><a href = "#"><i class="fa fa-cc-visa"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<!--------------------------footer end -------------->
<script>
    $(document).ready(function(){
        $('.slider4').bxSlider({
            slideWidth: 180,
            minSlides: 1,
            maxSlides: 6,
            moveSlides: 1,
            slideMargin: 10
        });
    });


    $('.bxslider').bxSlider({
        minSlides: 1,
        maxSlides: 2,
        slideWidth: 570,
        slideMargin: 10
    });


    $(document).ready(function(){
        $('.slider3').bxSlider({
            slideWidth: 220,
            minSlides: 1,
            maxSlides: 5,
            moveSlides: 1,
            slideMargin: 10
        });
    });



</script>
<script>
    var flip = 0;
    $( ".first" ).click(function() {
        $( ".text1" ).toggle( flip++ % 2 === 0 );
    });
</script>
<script>
    var flip = 0;
    $( ".secound" ).click(function() {
        $( ".text2" ).toggle( flip++ % 2 === 0 );
    });
</script>
<script src="js/script.js"></script>
</body>
</html>