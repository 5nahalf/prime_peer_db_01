/**
 * Created by ErikJohnson on 5/12/15.
 */
var data;
var i = 0;
$(document).ready(function() {
    getData();
    $(".results").on("click", ".remove", function(){
        var id = $(this).attr('id');
        console.log("remove button is clicked");
        $.ajax({
            url: '/assignment/' + id,
            dataType: 'json',
            method: 'DELETE',
            success: function(res){
                console.log("I am deleting something");
                getData();
            },
            error: function(){
                console.log("wa wa wa waaaaa");
            }
        });


    })
});
function appendData(data){
    for (i = 0; i < data.length; i++){
        $(".results").append("<div class='row'><div class='col-md-4'>Name: " + data[i].name + "</div><div class='col-md-4'>Score: " + data[i].score + "</div><button class='remove' id='" + data[i]._id + "'>Remove</button></div>");
    }

}


//function removeName(){
//    $.ajax({
//        url: '/assignment',
//        dataType: 'json',
//        method: 'delete',
//        success: function(res){
//            console.log("I am deleting something");
//
//        },
//        error: function(){
//            console.log("wa wa wa waaaaa");
//        }
//    });
//}

function getData(){
    $(".results").empty();
    $.ajax({
        url: '/assignment',
        dataType: 'json',
        method: 'get',
        success: function(res){
            console.log("we are the champions");
            appendData(res);

        },
        error: function(){
            console.log("wa wa wa waaaaa");
        }
    });
}

