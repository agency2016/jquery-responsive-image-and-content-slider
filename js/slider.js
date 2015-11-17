/**
 * Created by rothy on 9/3/14.
 */

$.fn.slider = function(config){
   if(config !== undefined){
       var options = $.extend(
           {'auto':1,'per_page':2,'delay': 500,'type':'fade','width':0,'height':220},config
       )
   }
    //console.log(options.per_page);
   if(options.per_page == 0 || options.per_page <0){
       options.per_page = 1;

   }
   // if pagination



       $(this).each(function(){


           var width        = $(this).width();
           var height       = $(this).height();
           var imgwidth     = Math.floor(width/options.per_page)-20;
           var imgheight    = Math.floor(height)-50;


           var images =  $(this).children('img');
           $(images).css('width',imgwidth);
           $(images).css('height',imgheight);
           $(this).children('img').hide();


           for(i = 0;i<options.per_page;i++){

               $(images).eq(i).show();
               $(images).eq(i).addClass('active');
               $(images).eq(i).css('position','relative');
           }

           var images       =  $(this).children('img');
           var length_      =  images.length;
           var page_number  = Math.ceil(length_/options.per_page);
           var current_page = 0;
           var pages_list   = [];
           // console.log(page_number);
           for(i = 0;i<page_number;i++){

               var start    = (options.per_page*i);
               var end      = start+options.per_page;
               var images_in_this_page = [];

               for(j = start;j<end;j++){
                   // console.log(j);
                   if(j <= length_){
                       images_in_this_page.push(j);
                   }

               }
               //console.log(images_in_this_page);
               pages_list.push(images_in_this_page)

           }
           $(this).prepend('<button style="z-index:8888;position: absolute;left: 0;top:'+parseInt(($(this).height()-80)/2)+'px;" class="prev btn btn-primary btn-xs">Prev</button>');
           $(this).append('<input  class="hidden-page-number" type="hidden" data-page ="'+0+'">');
           $(this).append('<button style="position: absolute;left:'+parseInt(((imgwidth+2)*options.per_page))+'px;top:'+parseInt(($(this).height()-80)/2)+'px;"class="next btn btn-primary btn-xs">Next</button>');
           var small_traverse_btn = '<ul class="sliderlist">';
           for(loop = 0;loop <pages_list.length;loop++){

               small_traverse_btn += '<li style="padding:2px;display: inline;list-style-type: none;"><a href="#" style="decoration: none" class="sliderlistlia" data-item ="'+loop+'">'+'<img src="icons/on.png" style="width: 12px;height: 12px;">'+'</a></li>';
           }
           small_traverse_btn += '</ul>';

           $(this).append(small_traverse_btn);
           var margin_ = parseInt((imgwidth*options.per_page)/2-(14*(pages_list.length)));
           //console.log(pages_list.length);
           $(this).children('.sliderlist').css('margin-left',margin_);



           if(options.auto == 1){
               // if auto change

               var i =0;
               setInterval(function(){
                  // console.log(i);
                   /*for(j = 0;j <pages_list.length;j++){
                       if ($(images).eq(j).hasClass('active')){
                           i = j;

                       }
                   }*/
                   // console.log(i);
                   //$(images).removeClass('active').slideUp(100);
                   i =  $(images).siblings('.hidden-page-number').attr('data-page') ;
                   i = parseInt(i);
                   //console.log(i);
                   for(j = 0;j <pages_list[i].length;j++){
                       $(images).eq(pages_list[i][j]).removeClass('active').slideUp(100);
                   }

                   var next = i+1;
                   if(next == (pages_list.length)){
                       next = 0;
                   }
                   for(j = 0;j <pages_list[next].length;j++){
                       $(images).eq(pages_list[next][j]).addClass('active').slideDown(100);
                       $(images).eq(pages_list[next][j]).css('position','relative');
                   }

                  // $(images).eq(next)
                   $(images).siblings('.hidden-page-number').attr('data-page',next);
                   $(images).siblings('.sliderlist').find('.sliderlistlia[data-item !='+next+']').html('<img src="icons/on.png" width="12px" height="12px"/> ');
                   $(images).siblings('.sliderlist').find('.sliderlistlia[data-item ='+next+']').html('<img src="icons/off.png" width="12px" height="12px"/> ');
                   //console.log(next);
                   i = next;
               },options.delay)
           }


       });
       /// next prev click function
       $(this).children('.next').click(function(){

           var images =  $(this).parent().children('img');
           $(images).removeClass('active').slideUp(100);
           var length_ =  images.length;
           var page_number = Math.ceil(length_/options.per_page);
           var current_page = 0;
           var pages_list = [];
           // console.log(page_number);
           for(i = 0;i<page_number;i++){
               var start = (options.per_page*i);
               var end = start+options.per_page;
               var images_in_this_page = [];

               for(j = start;j<end;j++){
                   // console.log(j);
                   if(j <= length_){
                       images_in_this_page.push(j);
                   }

               }
               //console.log(images_in_this_page);
               pages_list.push(images_in_this_page)

           }
           var current_page = $(this).siblings('.hidden-page-number').attr('data-page');
           // var pages_list = $(this).siblings('.hidden-page-list').attr('data-page-list');
           var next_page = parseInt(current_page)+1;
           if(next_page == pages_list.length){
               next_page = 0;
           }
          // console.log(next_page);
           for(p = 0;p < pages_list[next_page].length;p++){
               $(images).eq(pages_list[next_page][p]).show();
               $(images).eq(pages_list[next_page][p]).addClass('active');
               $(images).eq(pages_list[next_page][p]).css('position','relative');
           }

           $(this).siblings('.hidden-page-number').attr('data-page',next_page);
           $(this).siblings('.sliderlist').find('.sliderlistlia[data-item !='+next_page+']').html('<img src="icons/on.png" width="12px" height="12px"/> ');
           $(this).siblings('.sliderlist').find('.sliderlistlia[data-item ='+next_page+']').html('<img src="icons/off.png" width="12px" height="12px"/> ');
       });
       /// next prev click function
       $(this).children('.prev').click(function(){

           var images =  $(this).parent().children('img');
           $(images).removeClass('active').slideUp(100);
           var length_ =  images.length;
           var page_number = Math.ceil(length_/options.per_page);
           var current_page = 0;
           var pages_list = [];
           // console.log(page_number);
           for(i = 0;i<page_number;i++){
               var start = (options.per_page*i);
               var end = start+options.per_page;
               var images_in_this_page = [];

               for(j = start;j<end;j++){
                   // console.log(j);
                   if(j <= length_){
                       images_in_this_page.push(j);
                   }

               }
               //console.log(images_in_this_page);
               pages_list.push(images_in_this_page)

           }
           var current_page = $(this).siblings('.hidden-page-number').attr('data-page');
           // var pages_list = $(this).siblings('.hidden-page-list').attr('data-page-list');
           var prev_page = parseInt(current_page)-1;
           if(prev_page <0){
               prev_page = pages_list.length-1;
           }
           //console.log(prev_page);
           for(p = 0;p < pages_list[prev_page].length;p++){
               $(images).eq(pages_list[prev_page][p]).show();
               $(images).eq(pages_list[prev_page][p]).addClass('active');
               $(images).eq(pages_list[prev_page][p]).css('position','relative');
           }
           $(this).siblings('.hidden-page-number').attr('data-page',prev_page);
           $(this).siblings('.sliderlist').find('.sliderlistlia[data-item !='+prev_page+']').html('<img src="icons/on.png" width="12px" height="12px"/> ');
           $(this).siblings('.sliderlist').find('.sliderlistlia[data-item ='+prev_page+']').html('<img src="icons/off.png" width="12px" height="12px"/> ');
       });
       $('.sliderlistlia').click(function(event){

           event.preventDefault();
           var id           = parseInt($(this).attr('data-item'));
           var current      =  parseInt($(this).parents('.sliderlist').siblings('.hidden-page-number').attr('data-page'));
           //console.log(current);
           //console.log(id);

           if(current != id){

               var images       =  $(this).parents('.sliderlist').siblings('img');
               $(images).removeClass('active').slideUp(100);
               var length_      =  images.length;
               var page_number  = Math.ceil(length_/options.per_page);
               var current_page = 0;
               var pages_list   = [];
               // console.log(page_number);
               for(i = 0;i<page_number;i++){
                   var start = (options.per_page*i);
                   var end = start+options.per_page;
                   var images_in_this_page = [];

                   for(j = start;j<end;j++){
                       // console.log(j);
                       if(j <= length_){
                           images_in_this_page.push(j);
                       }

                   }
                   //console.log(images_in_this_page);
                   pages_list.push(images_in_this_page)

               }
               //console.log(pages_list);
               for(p = 0;p < pages_list[id].length;p++){
                   $(images).eq(pages_list[id][p]).slideDown(100);
                   $(images).eq(pages_list[id][p]).addClass('active');
                   $(images).eq(pages_list[id][p]).css('position','relative');
               }
               var next = id;
               if(next == pages_list.length){
                   next = 0;
               }
               //console.log(next);
               $(this).parents('.sliderlist').siblings('.hidden-page-number').attr('data-page',next);
               $(this).parents('.sliderlist').find('.sliderlistlia[data-item !='+id+']').html('<img src="icons/on.png" width="12px" height="12px"/> ');
               $(this).parents('.sliderlist').find('.sliderlistlia[data-item ='+id+']').html('<img src="icons/off.png" width="12px" height="12px"/> ');


           }

       });
       ///////

   }// end of if pagination
    //console.log(this);
