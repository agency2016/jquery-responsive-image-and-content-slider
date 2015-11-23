<!DOCTYPE html>
<html>
    <head>
       
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="font-awesome/css/font-awesome.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/postslider.css">
         <script src="js/jquery-1.11.1.min.js"></script>
        <script src="js/carosol.js"></script>
        <script type="text/javascript">
            $( document ).ready(function($) {

                $('.ex-slider').slider({'per_page':4,'auto':0,'delay':5600,'type':'fade'});
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

        <div class="container">
              <div class="row">
                <div class="col-md-12 col-xs-12">
                   <div class="ex-slider">

                         <div  class="postslider" ><img src="images/index.jpg"/>/**
 * Using only CSS, we can make a tabbed navigation whose tabs always
 * occupy an equal share of the available width. No JS to interrogate
 * the DOM, no server-side logic to count through items, no inline styles.
 *
 * Try commenting out, or adding, an `li` in the markup above. The tabs
 * should always fit the available horizontal room in equal amounts.
 */</div>
                         <div class="postslider"><img src="images/index2.jpg"/>/**
 * Using only CSS, we can make a tabbed navigation whose tabs always
 * occupy an equal share of the available width. No JS to interrogate
 * the DOM, no server-side logic to count through items, no inline styles.
 *
 * Try commenting out, or adding, an `li` in the markup above. The tabs
 * should always fit the available horizontal room in equal amounts.
 */</div>
                         <div class="postslider"><img src="images/images.jpg"/>/**
 * Using only CSS, we can make a tabbed navigation whose tabs always
 * occupy an equal share of the available width. No JS to interrogate
 
 */</div>
                         <div class="postslider"><img src="images/images2.jpg"/>
                         /**
 * Using only CSS, we can make a tabbed navigation whose tabs always
 * occupy an equ
 *
 * Try commenting out, or adding, an `li` in the markup above. The tabs
 * should always fit the available horizontal room in equal amounts.
 */</div>
                         <div class="postslider"><img src="images/images3.jpg"/>/**
 * Using only CSS, we can make a tabbed navigation whose tabs always
 * occupy an equal share of the available width. No JS to interrogate
 * the DOM, no server-side logic to count through items, no inline styles.
 *
 * Try commenting out, or adding, an `li` in the markup above. The tabs
 * should always fit the available horizontal room in equal amounts.
 */</div>
                         <div class="postslider"><img src="images/rose.jpg"/>/**
 * Using only CSS, we can make a tabbed navigation whose tabs always
 * occupy an equal share of the available width. No JS to interrogate
 * the DOM, no server-side logic to count through items, no inline styles.
 *
 * Try commenting out, or adding, an `li` in the markup above. The tabs
 * should always fit the available horizontal room in equal amounts.
 */</div>
                       
                    </div>
                  
                 </div>
            </div>
        </div>
   

    <div class="container" style="margin-top:330px">
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


