/**
 * Created by rothy on 9/7/14.
 */
function dropdown(config){
    var isNotDropped = true;
    if(config !== undefined){
        var options = $.extend(
            {'data':1},config
        )
    }
    $('.draggable .btn').draggable({
        connectToSortable: '.rform',
        cursor: 'move',
        helper: 'clone',
        start: function (event, ui) {

        },
        stop: function (event, ui) {
            // body...
           /* if (isNotDropped) {
                $(this).show();
            }*/
        },
        revert: function (isDropped) {
            // body...
           /* if (isDropped) {
                isNotDropped = false;
                return false;
            } else {
                isNotDropped = true;
                return true;
            }*/
        }
    });

    $('.rform').sortable({
        appendTo: '.rform',
        cancel: ".rform",
        placeholder: "control-group-highlight",

        receive: function (event, ui) {

            var chtml = [],
                itemStr = '',
                data_type = ui.item.data('type');

            if (data_type == 'textbox') {
                chtml.push(
                    config.text
                        .replace(/{msg}/g, 'hi')

                );

            }
            $(this).find('a').replaceWith(chtml.join(''));
        }
    });
}