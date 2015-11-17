/**
 * Created by rothy on 9/7/14.
 */
/**
 * Created by rothy on 9/6/14.
 */
/**
 * Created by rothy on 9/6/14.
 */
/**
 * Created by rothy on 9/3/14.
 */

$.fn.slider = function(config){

    if(config !== undefined){
        var options = $.extend(
            {'auto':1,'per_page':5,'delay': 500,'type':'fade','width':0,'height':220},config
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
        $(images).css('width',postsliderwidth);
        $(images).css('margin','2px');
        $(images).css('height',postsliderheight);
        $(images).children().css('width',postsliderwidth-6);
        $(images).children().css('padding','2px');
        //$(images).children('img').css('height',(postsliderheight-70));
        $(this).children('.postslider').hide();

        $(this).prepend('<div style="" class="holder_slide"></div>');
        $(this).children('.holder_slide').css('width',width);
        $(this).children('.holder_slide').css('height',height);
        //var images_ = '';
        for(i = 0;i<options.per_page;i++){

            $(this).children('.holder_slide').append($(images).eq(i).clone());
            $(this).children('.holder_slide').children().show();
            $(this).children('.holder_slide').children().addClass('active');
            $(this).children('.holder_slide').children().css('position','relative');
            //images_ +=$(images).eq(i)
        }
        var images       =  $(this).children('.postslider');
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
        var _this = $(this);
        $(this).prepend('<button style="z-index:8888;position: absolute;left: 0;top:'+parseInt(($(this).height()-80)/2)+'px;" class="prev btn btn-primary btn-xs">Prev</button>');
        $(this).append('<input  class="hidden-page-number" type="hidden" data-page ="'+0+'" data-start = "'+0+'" data-end = "'+(options.per_page -1)+'" >');
        $(this).append('<button style="position: absolute;left:'+parseInt(((postsliderwidth+2)*options.per_page))+'px;top:'+parseInt(($(this).height()-80)/2)+'px;"class="next btn btn-primary btn-xs">Next</button>');

        if(options.auto == 1){
            // if auto change

            var start =0;
            setInterval(function(){

                var images =  $(_this).children('.postslider');
                //console.log('hello');
                // $(images).removeClass('active').slideUp(100);
                var length_ =  images.length;
                var start =  $(_this).children('.hidden-page-number').attr('data-start') ;
                start = parseInt(start);

                var end =  $(_this).children('.hidden-page-number').attr('data-end') ;
                end = parseInt(end);

                $(_this).children('.holder_slide').html('');
                var next_start = parseInt(start)+1;
                if(next_start == images.length){
                    next_start = 0;
                }
                //console.log(_this);
                var next_end = (next_start+(options.per_page -1))%$(images).length;
                //console.log($(this));
                //

                if(next_start < next_end){

                    for(p = next_start;p <=next_end;p++){
                        //console.log((p));
                        $(_this).children('.holder_slide').append($(images).eq(p).clone());
                        $(_this).children('.holder_slide').children().show();
                        $(_this).children('.holder_slide').children().addClass('active');
                        $(_this).children('.holder_slide').children().css('position','relative');


                    }

                }else{


                    for(p = next_start;p <$(images).length;p++){

                        $(_this).children('.holder_slide').append($(images).eq(p).clone());
                        $(_this).children('.holder_slide').children().show();
                        $(_this).children('.holder_slide').children().addClass('active');
                        $(_this).children('.holder_slide').children().css('position','relative');
                    }
                    for(p =0;p <=next_end;p++){

                        $(_this).children('.holder_slide').append($(images).eq(p).clone());
                        $(_this).children('.holder_slide').children().show();
                        $(_this).children('.holder_slide').children().addClass('active');
                        $(_this).children('.holder_slide').children().css('position','relative');
                    }

                }


                $(_this).children('.hidden-page-number').attr('data-start',next_start);
                $(_this).children('.hidden-page-number').attr('data-end',next_end);

                //i = next;
            },options.delay)
        }


    });
    /// next prev click function
    $(this).children('.next').click(function(){

        var images =  $(this).parent().children('.postslider');
        // $(images).removeClass('active').slideUp(100);
        var length_ =  images.length;
        var start =  $(images).siblings('.hidden-page-number').attr('data-start') ;
        start = parseInt(start);

        var end =  $(images).siblings('.hidden-page-number').attr('data-end') ;
        end = parseInt(end);
        //console.log(start);
        //console.log(end);
        /*for(j = start;j <=end;j++){
         $(images).eq(j).removeClass('active').fadeOut(100);
         }*/
        $(this).siblings('.holder_slide').html('');
        var next_start = parseInt(start)+1;
        if(next_start == images.length){
            next_start = 0;
        }
        // console.log(next_page);
        var next_end = (next_start+(options.per_page -1))%$(images).length;
        //console.log(next_start);
        //

        if(next_start < next_end){

            for(p = next_start;p <=next_end;p++){
                console.log((p));
                $(this).siblings('.holder_slide').append($(images).eq(p).clone());
                $(this).siblings('.holder_slide').children().show();
                $(this).siblings('.holder_slide').children().addClass('active');
                $(this).siblings('.holder_slide').children().css('position','relative');


            }

        }else{


            for(p = next_start;p <$(images).length;p++){
                //console.log(p);
                /*$(images).eq(p).fadeIn(1000);
                 $(images).eq(p).addClass('active');
                 $(images).eq(p).css('position','relative');*/
                $(this).siblings('.holder_slide').append($(images).eq(p).clone());
                $(this).siblings('.holder_slide').children().show();
                $(this).siblings('.holder_slide').children().addClass('active');
                $(this).siblings('.holder_slide').children().css('position','relative');
            }
            for(p =0;p <=next_end;p++){

                $(this).siblings('.holder_slide').append($(images).eq(p).clone());
                $(this).siblings('.holder_slide').children().show();
                $(this).siblings('.holder_slide').children().addClass('active');
                $(this).siblings('.holder_slide').children().css('position','relative');
            }
            /*$(this).siblings('.holder_slide').children().addClass('active');
             $(this).siblings('.holder_slide').children().css('position','relative');*/
        }


        $(this).siblings('.hidden-page-number').attr('data-start',next_start);
        $(this).siblings('.hidden-page-number').attr('data-end',next_end);

    });
    /// next prev click function
    $(this).children('.prev').click(function(){

        var images  =  $(this).parent().children('.postslider');
        // $(images).removeClass('active').slideUp(100);
        var length_ =  images.length;
        var start   =  $(images).siblings('.hidden-page-number').attr('data-start') ;
        start       = parseInt(start);

        var end     =  $(images).siblings('.hidden-page-number').attr('data-end') ;
        end         = parseInt(end);
        //console.log(start);
        //console.log(end);
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
        /* if(next_start <0){
         next_start = 0;
         }*/
        //console.log(next_start);
        //console.log(next_end);
        $(this).siblings('.holder_slide').html('');

        if(next_start < next_end){

            for(p = next_start;p <=next_end;p++){
                /*$(images).eq(p).fadeIn(1000);
                 $(images).eq(p).addClass('active');
                 $(images).eq(p).css('position','relative');*/
                $(this).siblings('.holder_slide').append($(images).eq(p).clone());
                $(this).siblings('.holder_slide').children().show();
                $(this).siblings('.holder_slide').children().addClass('active');
                $(this).siblings('.holder_slide').children().css('position','relative');
            }

        }
        else{

            for(p = next_start;p <$(images).length;p++){

                $(this).siblings('.holder_slide').append($(images).eq(p).clone());
                $(this).siblings('.holder_slide').children().show();
                $(this).siblings('.holder_slide').children().addClass('active');
                $(this).siblings('.holder_slide').children().css('position','relative');
            }
            for(p = 0;p <=next_end;p++){

                $(this).siblings('.holder_slide').append($(images).eq(p).clone());
                $(this).siblings('.holder_slide').children().show();
                $(this).siblings('.holder_slide').children().addClass('active');
                $(this).siblings('.holder_slide').children().css('position','relative');
            }
        }

        $(this).siblings('.hidden-page-number').attr('data-start',next_start);
        $(this).siblings('.hidden-page-number').attr('data-end',next_end);

    });

    ///////

}// end of if pagination
//console.log(this);
