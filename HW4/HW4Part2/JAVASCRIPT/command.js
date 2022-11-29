/*
    Creator : Anson Cheang
    Contact : Anson0906@gmail.com
    Source : TA, W3schools
    Description : essentially checks 
    for incorrect inputs, and create
    the multiplication table, then added
    in the validation for part 1, and then 
    added in sliders and tabs for part 2
*/

/* to validate every inputs*/
$(document).ready(function() {
    /* This creates the tab */
    $('#graph').tabs();
    var tabcounter = 1;
    /* This stores all the slider info, and make it auto update the table, and form*/
    $(function() {
        var slide = {
            min: -50,
            max: 50,
            value: 0,
            animate: true
        }
        $("#my_slider1").slider(slide, {
            slide: function(event, ui) {
                $("#hmin").val(ui.value);
                if($('#Aform').valid())
                {
                    multi();
                }
            }
        });
        $("#my_slider2").slider(slide, {
            slide: function(event, ui) {
                $("#hmax").val(ui.value);
                if($('#Aform').valid())
                {
                    multi();
                }
            }
        });
        $("#my_slider3").slider(slide, {
            slide: function(event, ui) {
                $("#vmin").val(ui.value);
                if($('#Aform').valid())
                {
                    multi();
                }
            }
        });
        $("#my_slider4").slider(slide, {
            slide: function(event, ui) {
                $("#vmax").val(ui.value);
                if($('#Aform').valid())
                {
                    multi();
                }
            }
        });
    });
    /* This stores all function causing the table and slide to update, as long as you click off the input box*/

    $(function(){
        $("#hmin").focusout(function(){
            $("#my_slider1").slider('value', Number(document.getElementById("hmin").value));
            if($('#Aform').valid())
            {
                multi();
            }
        });
        $("#hmax").focusout(function(){
            $("#my_slider2").slider('value', Number(document.getElementById("hmax").value));
            if($('#Aform').valid())
            {
                multi();
            }
        });
        $("#vmin").focusout(function(){
            $("#my_slider3").slider('value', Number(document.getElementById("vmin").value));
            if($('#Aform').valid())
            {
                multi();
            }
        });
        $("#vmax").focusout(function(){
            $("#my_slider4").slider('value', Number(document.getElementById("vmax").value));
            if($('#Aform').valid())
            {
                multi();
            }
        });
    });

    $.validator.addMethod('le', function (value, element, param) {
        return this.optional(element) || parseInt(value) >= parseInt($(param).val());
    }, 'Invalid value');
    $('#Aform').validate({
        rules: {
            hmin: {
                pattern: '-?[0-9]{0,10}',
                min: -50,
                max: 50,
                required: true,
            },
            hmax: {
                pattern: '-?[0-9]{0,10}',
                min: -50,
                max: 50,
                required: true,
                le: '#hmin'
            },
            vmin: {
                pattern: '-?[0-9]{0,10}',
                min: -50,
                max: 50,
                required: true
            },
            vmax: {
                pattern: '-?[0-9]{0,10}',
                min: -50,
                max: 50,
                required: true,
                le: '#vmin'
            },
        },
        messages : {
            hmin: {
                required: "Please enter starting horizontal value",
                pattern: "Please enter an integer (whole number)",
                min: "-50 or greater please",
                max: "50 or less please"
            },
            hmax: {
                required: "Please enter ending horizontal value",
                pattern: "Please enter an integer (whole numbers)",
                min: "-50 or greater please",
                max: "50 or less please",
                le: "Please make sure the maximum x value is greater than the minimum x value"
            },
            vmin: {
                required: "Please enter starting vertical value",
                pattern: "Please enter an integer (whole numbers)",
                min: "-50 or greater please",
                max: "50 or less please"
            },
            vmax: {
                required: "Please enter ending vertical value",
                pattern: "Please enter an integer (whole numbers)",
                min: "-50 or greater please",
                max: "50 or less please",
                le: "Please make sure the maximum y value is greater than the minimum y value"
            }
        }
    });
    $('#graph').tabs();
    /* This is what creates the tabs and allow it to function as it should*/
    $('#btn1').click(function(){
        var label ="[" + Number(document.getElementById("hmin").value) + 
            "," + Number(document.getElementById("hmax").value) + 
            "]x[" + Number(document.getElementById("vmin").value) + 
            "," + Number(document.getElementById("vmax").value) + "]";
        var h = document.getElementById("current").innerHTML;
        var id ="RL" + Number(document.getElementById("hmin").value) + 
            "RH" + Number(document.getElementById("hmax").value) + 
            "xCL" + Number(document.getElementById("vmin").value) + 
            "CH" + Number(document.getElementById("vmax").value);

        $('#alltabs').append("<li id=\"" + id + "\"><input type = \"checkbox\" id = \"box" + 
            id + "\"><a href=\"#div" + id +"\">" + label +"</a></li>");
        $('#graph').append("<div id=\"div" + id + "\">" + h + "</div>");
        $('#graph').tabs("refresh");
    });
    /* This removes all the tabs, at least the one you checked off*/
    $('#btn2').click(function(){
        var id;
        var box;
        var list = document.querySelectorAll('li');
        for(var i = list.length - 1; i >= 1; i--)
        {
            id = list[i].id;
            box = document.getElementById("box" + id);
            if(box.checked)
            {
                id = list[i].id;
                $("#" + id).remove();
                id = 'div' + id;
                $("#" + id).remove();
                $('#graph').tabs("refresh");
            }
        }
    });
});

function multi(){
    let hmin = Number(document.getElementById("hmin").value);
    /*hmin = parseInt(hmin);*/
        
    let hmax = Number(document.getElementById("hmax").value);
    /*hmax = parseInt(hmax);*/
        
    let vmin = Number(document.getElementById("vmin").value);
    /*vmin = parseInt(vmin);*/
        
    let vmax = Number(document.getElementById("vmax").value);
    /*vmax = parseInt(vmax);*/
    let t;
    //This clears the innerHTML making it so the table or error message is gone
    document.getElementById("current").innerHTML = '';

    //the creation of the multiplication table
    t = '<table border = 1px>';
    t += '<tr>';
    t += '<th id="topleft"> ' + ' ' + ' </th>';
    for(var i = hmin; i <= hmax; i++)
    {
        t += '<th> ' + i + ' </th>';
    }

    t += '</tr>';

    for(var i = vmin; i <= vmax; i++)
    {
        t += '<tr>';
        t += '<th> ' + i + ' </th>';
        for(var j = hmin; j <= hmax; j++)
        {
            t += '<th> ' + i * j + ' </th>';
        }
        t += '</tr>';
    }

    t += '</table>';
    document.getElementById("current").innerHTML = t;
    //});
}