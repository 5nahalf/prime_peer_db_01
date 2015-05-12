/**
 * Created by ErikJohnson on 5/12/15.
 */

$(document).ready(function(){
    getData();
});

function getData(){
    $.ajax({
        url: '/assignment',
        dataType: 'json',
        method: 'get',
        success: function(res){
            console.log("we are the champions");
            //appendData(res);
        },
        error: function(){
            console.log("wa wa wa waaaaa");
        }
    });
}

