/**
 * Created by ErikJohnson on 5/12/15.
 */



var i = 0;
$(document).ready(function() {
    getData();
    $(".results").on("click", ".update", function(){
        var rd = $(this).attr('id');
        $('.' + rd).children(".nameChange").replaceWith("<textarea name='name' cols='20' rows='1'></textarea>");
        $('.' + rd).children(".scoreChange").replaceWith("<textarea name='score' cols='20' rows='1'></textarea>");

    })
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
    });


    $(".results").on("click", ".poster", function(){
        var dd = $(this).attr('id');
        var person = new Object();
        person.name = $('.' + dd).children('[name="name"]').val();
        person.score = $('.' + dd).children('[name="score"]').val();
        console.log(person.name);
        $.ajax({
            url: '/assignment/' + dd,
            method: 'PUT',
            data: person,
            dataType: 'json',
            success: function(){
                console.log("we are the putting things here");
                getData();

            },
            error: function(){
                console.log("wa wa wa waaaaa");
            }
        });
    });
});
function appendData(data){
    for (i = 0; i < data.length; i++){
        $(".results").append("<div class='container-fluid " + data[i]._id + "'><p class='fred'>Name: </p><p class='nameChange'>" + data[i].name + "</p><br /><p class='fred'>Score: </p><p class='scoreChange'>" + data[i].score + "</p><br /><p class='fred'>Completed: " + data[i].completed + "</p><br /><button class='remove' id='" + data[i]._id + "'>Remove</button><button class='update' id='" + data[i]._id + "'>Update</button><button class='poster' id='" + data[i]._id + "'>Post</button></div>");
    }

}



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

function valid(){
    var vl = $('.validate').val();
    if(vl !== "" && !$.isNumeric(vl)) {
        alert("Please enter a number for the score.\n Thank you");
    }
}
