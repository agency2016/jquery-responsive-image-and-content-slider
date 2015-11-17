<!DOCTYPE html>
<html>
<head>
    <script src="js/jquery-1.11.1.min.js"></script>
    <script src="css/Chart.js"></script>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/slider.css">
    <script type="text/javascript">
        $( document ).ready(function($) {


            var data = [
                {
                    value: 300,
                    color:"#F7464A",
                    highlight: "#FF5A5E",
                    label: "Red"
                },
                {
                    value: 50,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "Green"
                },
                {
                    value: 100,
                    color: "#FDB45C",
                    highlight: "#FFC870",
                    label: "Yellow"
                }
            ]
            var ctx = document.getElementById("myChart").getContext("2d");
            var myNewChart = new Chart(ctx).Pie(data);
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
            <canvas id="myChart" width="400" height="400"></canvas>

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
<div class="container">
    <div class="row">
        <div class="col-md-12 col-xs-12">
            <div class="ex-slider" style="height: 440px;">



            </div>
        </div>
    </div>
</div>

<div class="container" style="margin-top:330px">

</div>

</body>
</html>


