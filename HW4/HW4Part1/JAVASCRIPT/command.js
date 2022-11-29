/*
    Creator : Anson Cheang
    Contact : Anson0906@gmail.com
    Source : TA, W3schools
    Description : essentially checks 
    for incorrect inputs, and create
    the multiplication table, Then for
    Homework 4 part 1 the validations was 
    added in to make sure every input is valid
*/

/* to validate every inputs*/
$(document).ready(function() {
    /* This creates a validate method to make sure the minimum is not larger than the maximum*/
    $.validator.addMethod('le', function (value, element, param) {
        return this.optional(element) || parseInt(value) >= parseInt($(param).val());
    }, 'Invalid value');
    /* This function stores all of the validations to make sure you inputted the correct info */
    $('#btn1').click(function(){
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
        /* essentially test if the form is valid before making the table, otherwise it would not */
        if($('#Aform').valid())
        {
            multi();
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
    document.getElementById("graph").innerHTML = '';

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
    document.getElementById("graph").innerHTML = t;
    //});
}