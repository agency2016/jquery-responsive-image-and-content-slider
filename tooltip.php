<!DOCTYPE html>
<html>
<head>
    <script src="js/jquery-1.11.1.min.js"></script>
    <script src="js/tooltip.js"></script>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/tooltipster.css">
    <link rel="stylesheet" type="text/css" href="css/tooltipster-light.css">
    <script type="text/javascript">
        $( document ).ready(function($) {

            $('.charlimit').tooltipster();

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
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-md-12 col-xs-12">
            <div class="ex-slider" style="height: 440px;">
                <span title = "title" class="charlimit">ewnfl</span>



            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-md-12 col-xs-12">
            <div class="ex-slider" style="height: 440px;">


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


