
$(document).ready( function(){
    /* hide, show, toggle */
    $("h3").click(function(){
        $("#input1").toggle(500, function(){
            $("h2").toggle(500);
        });
    });

    /* events */
    // $("#butt1").on("click", function(){
    //     $("h2").toggle();
    // });

    // $("#butt1").dblclick(function(){
    //     $("h2").toggle();
    // });

    // $("#butt1").mouseleave(function(){
    //     $("h2").toggle();
    // });

    // $("#input1").focus(function(){
    //     $(this).css('background-color', "#22c2c2");
    // });
    
    // $("#input1").blur(function(){
    //     $(this).css('background-color', "#3272f2");
    // });

    /* multiple event handler*/
    $("#butt1").on({
        mouseenter: function(){
            $("#input1").css("background-color", "black");
        },
        mouseleave: function(){
            $("#input1").css("background-color", "white");
        },
        click: function(){
            $("#input1").css("background-color", "lightgreen");
        }
    });

    /* fade in-out-toggle */
    // $("#butt2").click(function(){
    //     // $(".text_container").fadeIn(500);
    //     // $(".text_container").fadeOut(500);
    //     $(".text_container").fadeToggle(500);
    //     // $(".text_container").fadeTo("slow", 0.2);
    // });

    /* slide-up-down-toggle */
    $("#butt2").click(function(){
        // $(".text_container").slideToggle(500);

        /* method chaining */
        $(".text_container").slideUp(500).slideDown(500);
    });

    /* animation */
    $("#butt3").click(function(){
        // $("#div_animate").animate({
        //     left: '250px',
        //     height: '+=40px',
        //     width: '+=40px'
        // }, function(){
        //     $("#para_animate").animate({
        //         fontSize: '3em'
        //     });
        // });
        
        var newdiv = $("#div_animate");
        newdiv.animate({left: '250px'}, "fast");
        newdiv.animate({left:  '50px'}, "fast");
        newdiv.animate({left: '250px'}, "fast");
        newdiv.animate({left:  '50px'}, "fast");
        newdiv.animate({height: '200', opacity: '0.4'}, "slow");
        newdiv.animate({width:  '200', opacity: '0.8'}, "slow", function(){
                $("#para_animate").animate({fontSize: '3em'}, "slow");
        });
        newdiv.animate({height: '100', opacity: '0.4'}, 500, function(){
                $("#para_animate").animate({fontSize: '1em'}, "slow");
        });
        newdiv.animate({width:  '100', opacity: '1'}, 500);

    });
});


/*
jquery selectors:
-----------------
$("*")          -   selects all element 
$(this)         -   selects the current HTML element  
$("p.intro")    -   selects <p> element with class .intro
$("p:first")    -   selects the first <p> element 
$("ul li:first")            -   selects first <li> of the first <ul>
$("ul li:first-child")      -   selects first <li> of every <ul>
$("[href]")                 -   selects all elements with href attribute 
$("a[target='_blank']")     -   selects all <a> elements with a target attribute value equal to "_blank"
$("a[target!='_blank']")    -   selects all <a> elements with a target attribute value NOT equal to "_blank"
$(":button")    -   selects all <button> elements and <input> elements of type="button"
$("tr:even")    -   selects all even <tr> elements 
$("tr:odd")     -   selects all odd <tr> elements 
*/

    
