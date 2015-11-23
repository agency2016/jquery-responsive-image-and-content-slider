/**
 * Created by rothy on 9/6/14.
 */


$.fn.slider = function(config){

    if(config !== undefined){
        var options = $.extend(
            {'auto':1,'per_page':5,'delay': 500,'type':'fade','width':0,'height':220,'prev':'<i class="fa fa-arrow-circle-left fa-2x"></i>','next':'<i class="fa fa-arrow-circle-right fa-2x"></i>','show_next_prev':1},config
        )
    }
    //console.log(options.per_page);
    if(options.per_page == 0 || options.per_page <0){
        options.per_page = 1;

    }
    // if pagination

    $(this).each(function(){

        var width               = $(this).width();
        var height              = $(this).height();
        var postsliderwidth     = Math.floor(width/options.per_page)-20;
        var postsliderheight    = Math.floor(height)-50;


        var images =  $(this).children('.postslider');

        
        $(this).children('.postslider').hide();

        $(this).prepend('<div style="" class="holder_slide"></div>');


        for(i = 0;i<options.per_page;i++){

            $(this).children('.holder_slide').append($(images).eq(i).clone());
            $(this).children('.holder_slide').children().show();
            $(this).children('.holder_slide').children().addClass('active');
         

        }
        var images       =  $(this).children('.postslider');
        var length_      =  images.length;
        var page_number  = Math.ceil(length_/options.per_page);

        var _this = $(this);
        
        $(this).append('<input  class="hidden-page-number" type="hidden" data-page ="'+0+'" data-start = "'+0+'" data-end = "'+(options.per_page -1)+'" >');
        if(options.show_next_prev == 1){
            $(this).prepend('<a class="prev">'+options.prev+'</a>');
            $(this).append('<a class="next">'+options.next+'</a>');
        }
        

          if(options.auto == 1){
            // if auto change

            var start =0;
            setInterval(function(){

                var images  =  $(_this).children('.postslider');
                var length_ =  images.length;
                var start   =  $(_this).children('.hidden-page-number').attr('data-start') ;
                start       = parseInt(start);
                var end     =  $(_this).children('.hidden-page-number').attr('data-end') ;
                end         = parseInt(end);

                $(_this).children('.holder_slide').html('');
                var next_start = parseInt(start)+1;
                if(next_start == images.length){
                    next_start = 0;
                }

                var next_end = (next_start+(options.per_page -1))%$(images).length;
                if(next_start < next_end){

                    for(p = next_start;p <=next_end;p++){

                        $(_this).children('.holder_slide').append($(images).eq(p).clone());
                        $(_this).children('.holder_slide').children().show();
                        $(_this).children('.holder_slide').children().addClass('active');
                       
                    }

                }else if(next_start > next_end){

                    for(p = next_start;p <$(images).length;p++){

                        $(_this).children('.holder_slide').append($(images).eq(p).clone());
                        $(_this).children('.holder_slide').children().show();
                        $(_this).children('.holder_slide').children().addClass('active');
                        
                    }
                    for(p =0;p <=next_end;p++){

                        $(_this).children('.holder_slide').append($(images).eq(p).clone());
                        $(_this).children('.holder_slide').children().show();
                        $(_this).children('.holder_slide').children().addClass('active');
                       
                    }
                }
                else{
                        $(_this).children('.holder_slide').append($(images).eq(next_start).clone());
                        $(_this).children('.holder_slide').children().show();
                        $(_this).children('.holder_slide').children().addClass('active');
                }

                $(_this).children('.hidden-page-number').attr('data-start',next_start);
                $(_this).children('.hidden-page-number').attr('data-end',next_end);


            },options.delay)
        }
    });
    /// next prev click function
    $(this).children('.next').click(function(){

        var images  =  $(this).parent().children('.postslider');
        var length_ =  images.length;
        var start   =  $(images).siblings('.hidden-page-number').attr('data-start') ;
        start       = parseInt(start);
        var end     =  $(images).siblings('.hidden-page-number').attr('data-end') ;
        end         = parseInt(end);

        $(this).siblings('.holder_slide').html('');
        var next_start = parseInt(start)+1;
        if(next_start == images.length){
            next_start = 0;
        }

        var next_end = (next_start+(options.per_page -1))%$(images).length;

        if(next_start < next_end){

            for(p = next_start;p <=next_end;p++){

                $(this).siblings('.holder_slide').append($(images).eq(p).clone());
                $(this).siblings('.holder_slide').children().show();
                $(this).siblings('.holder_slide').children().addClass('active');
               
            }

        }else if(next_start >next_end){

            for(p = next_start;p <$(images).length;p++){

                $(this).siblings('.holder_slide').append($(images).eq(p).clone());
                $(this).siblings('.holder_slide').children().show();
                $(this).siblings('.holder_slide').children().addClass('active');
               
            }
            for(p =0;p <=next_end;p++){

                $(this).siblings('.holder_slide').append($(images).eq(p).clone());
                $(this).siblings('.holder_slide').children().show();
                $(this).siblings('.holder_slide').children().addClass('active');
                
            }
        }
        else{
            $(this).siblings('.holder_slide').append($(images).eq(next_start).clone());
            $(this).siblings('.holder_slide').children().show();
            $(this).siblings('.holder_slide').children().addClass('active');
        }
        $(this).siblings('.hidden-page-number').attr('data-start',next_start);
        $(this).siblings('.hidden-page-number').attr('data-end',next_end);

    });
    /// next prev click function
    $(this).children('.prev').click(function(){

        var images  =  $(this).parent().children('.postslider');
        var length_ =  images.length;
        var start   =  $(images).siblings('.hidden-page-number').attr('data-start') ;
        start       = parseInt(start);
        var end     =  $(images).siblings('.hidden-page-number').attr('data-end') ;
        end         = parseInt(end);

        for(j = start;j <=end;j++){
            $(images).eq(j).removeClass('active').fadeOut(100);
        }
        if(start == 0){
            next_start = $(images).length -1;

        }
        else{
            var next_start = parseInt(start)-1;
        }

        var next_end = (next_start+(options.per_page -1))%$(images).length;

        $(this).siblings('.holder_slide').html('');

        if(next_start < next_end){

            for(p = next_start;p <=next_end;p++){

                $(this).siblings('.holder_slide').append($(images).eq(p).clone());
                $(this).siblings('.holder_slide').children().show();
                $(this).siblings('.holder_slide').children().addClass('active');
                
            }
        }
        else if(next_start > next_end){

            for(p = next_start;p <$(images).length;p++){

                $(this).siblings('.holder_slide').append($(images).eq(p).clone());
                $(this).siblings('.holder_slide').children().show();
                $(this).siblings('.holder_slide').children().addClass('active');
               
            }
            for(p = 0;p <=next_end;p++){

                $(this).siblings('.holder_slide').append($(images).eq(p).clone());
                $(this).siblings('.holder_slide').children().show();
                $(this).siblings('.holder_slide').children().addClass('active');
               
            }
        }else{
            $(this).siblings('.holder_slide').append($(images).eq(next_start).clone());
            $(this).siblings('.holder_slide').children().show();
            $(this).siblings('.holder_slide').children().addClass('active');
        }

        $(this).siblings('.hidden-page-number').attr('data-start',next_start);
        $(this).siblings('.hidden-page-number').attr('data-end',next_end);

    });

  

}// end of if pagination

