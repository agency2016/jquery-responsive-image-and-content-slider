<!DOCTYPE html>
<html>
    <head>
       
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="font-awesome/css/font-awesome.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/imageslider.css">
         <script src="js/jquery-1.11.1.min.js"></script>
        <script src="js/carosol.js"></script>
        <script type="text/javascript">
            $( document ).ready(function($) {

                $('.ex-slider').slider({'per_page':3,'auto':1,'delay':2500,'type':'slide','show_next_prev':0});
                $('.img-slider').slider({'per_page':1,'auto':0,'delay':2500,'type':'fade','show_next_prev':1});
            });
        </script>
        <style>
        </style>
    </head>
    <body>

    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-4 col-xs-12">
                <h1>Demo Page for slider plugin</h1>
                 <a class="btn btn-lg btn-info" href="imageslider.php">Image Slider</a>
                <a class="btn btn-lg btn-primary" href="postslider.php">Post Slider</a>
             </div>
        </div>
    </div>

    <div class="container" style="margin-top:20px;">
        <div class="row">
           <div class="col-md-12 col-xs-12">
                <div class="ex-slider">

                    <div  class="postslider" ><img src="images/index.jpg"/> </div>
                    <div class="postslider"><img src="images/rose.jpg"/></div>
                    <div class="postslider"><img src="images/rose2.jpg"/></div>
                    <div class="postslider"><img src="images/rose3.jpg"/></div>
                    <div class="postslider"> <img src="images/rose4.jpg"/></div>
                    <div class="postslider"><img src="images/rose5.jpg"/></div>
                    <div class="postslider"><img src="images/index2.jpg"/></div>
                    <div class="postslider"><img src="images/images.jpg"/></div>
                    <div class="postslider"><img src="images/images2.jpg"/></div>
                    <div class="postslider"><img src="images/images3.jpg"/></div>

                
                </div>
           </div>
        </div>
    </div>
        <div class="container" style="margin-top:20px;">
        <div class="row">
            <div class="col-md-4 col-xs-12 col-md-offset-4">
                <div class="img-slider">

                    <div  class="postslider" ><img src="images/index.jpg"/> </div>
                    <div class="postslider"><img src="images/rose.jpg"/></div>
                    <div class="postslider"><img src="images/rose2.jpg"/></div>
                    <div class="postslider"><img src="images/rose3.jpg"/></div>
                    <div class="postslider"> <img src="images/rose4.jpg"/></div>
                    <div class="postslider"><img src="images/rose5.jpg"/></div>
                    <div class="postslider"><img src="images/index2.jpg"/></div>
                    <div class="postslider"><img src="images/images.jpg"/></div>
                    <div class="postslider"><img src="images/images2.jpg"/></div>
                    <div class="postslider"><img src="images/images3.jpg"/></div>

                </div>
            </div>
        </div>
    </div>

    <div class="container" style="margin-top:30px">
        <div class="row">
            <div class="col-xs-12 ">
                <div>
                    <p>My First image slide plugin </p>
                    <code>
                        <p>  $('.ex-slider').slider({'per_page':2,'delay':1900,'type':'fade'});</p>
                    </code>
                </div>
            </div>
        </div>
    </div>

    </body>
</html>


