<?php
/**
 * Created by PhpStorm.
 * User: rothy
 * Date: 9/8/14
 * Time: 11:37 PM
 */
?>


                       <!DOCTYPE html>
                       <html>
                       <head>
                           <script src="js/jquery-1.11.1.min.js"></script>
                           <script src="js/transition.js"></script>
                           <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
                           <link rel="stylesheet" type="text/css" href="css/slider.css">
                           <script type="text/javascript">
                               $(document).ready( function(){
                                   $('#slideshowHolder').jqFancyTransitions({ width: 200, height: 200 });
                               });

                           </script>

                           <style>
                           </style>
                       </head>
                       <body>



                       <div class="container">
                           <div class="row">
                               <div class="col-md-12 col-xs-12">
                                   <div id="slideshowHolder" class="slider" style="height: 200px;">

                                     <img src="images/index.jpg"/>
                                      <img src="images/index2.jpg"/>
                                       <img src="images/images.jpg"/>


                                   </div>
                               </div>
                           </div>
                       </div>


                       </body>
                       </html>



