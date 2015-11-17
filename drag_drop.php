<?php
/**
 * Created by PhpStorm.
 * User: rothy
 * Date: 9/7/14
 * Time: 12:57 AM
 */
?>
<!doctype html>
<html lang="en">
<head>

<title>A jQuery Drag-and-Drop</title>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<link rel="stylesheet" type="text/css" href="css/dragdrop.css">

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/jquery-ui.min.js"></script>


    <script src="js/dragdrop.js"></script>
<script type="text/javascript">
 /*  $(document).ready(function(){
       init();
   });

// JavaScript will go here
function init() {






        $( '#rform' ).droppable( {
            accept: '#rbuttons a',
            hoverClass: 'hovered',
            drop: handleCardDrop,
            tolerance: 'pointer'
        } );



}
   function clone_this(event,ui){

       $(this).clone();
   }
function handleCardDrop( event, ui ) {

    var slotNumber = $(this).data( 'number' );
    var cardNumber = ui.draggable.data( 'item' );

        ui.draggable.addClass( 'correct' );
        ui.draggable.draggable( 'disable' );

        ui.draggable.draggable( 'option', 'revert', false );
        correctCards++;

}*/

</script>

</head>
<body>

<div id="content">

  <div class="draggable" style="background: #e4e4e4">
      <a class="btn btn-small btn-drag btn-success" data-type="textbox" data-item="cloneable"><i
              class="icon-font icon-white"></i>  Single Line Text</a>
  </div><br>
  <div class="rform"  style="display:inline-block;width:900px;background: #e4e4e4"> try me</div>
<?php echo '<script type="text/javascript">
    jQuery(document).ready(function($){
        var data = '.file_get_contents("form.html").';
        dropdown(data);
    });
</script>';?>

</div>

</body>
</html>