
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

    /*HTML - get */
    $("#butt4").click(function(){
        // alert("Get text: " + $("#div1").text());
        // alert("Get html: " + $("#div1").html());
        // alert("Get val: " + $("#input1").val());
        alert("Get attrs: " + $("#w3s").attr("href"));
    });

    /*HTML - set */
    $("#butt5").click(function(){
        // $("#div1").text("set some dummy text");
        // $("#div1").html("<p style='color: red'>set some dummy html</p>");
        // $("#input1").val("another one");
        
        // $("#w3s").attr({
        //     "href": "https://www.w3schools.com/jquery/",
        //     "title": "W3Schools jQuery Tutorial"
        // });

        $("#w3s").attr("href", function(elementIndex, originalValue){
            return originalValue + "/jquery/";
        });

        // $("#div1").text(function(elementIndex, originalText){
        //     return ("old text: " + originalText + " || new text: set some dummy text || " + "index: " + elementIndex);
            
        // });

    });

    // Event setup using the `.on()` method with data
    $( "#input1" ).on(
        "change",
        { foo: "bar" }, // Associate data with event binding
        function( eventObject ) {
            alert("An input value has changed! ", eventObject.data.foo);
        }
    );

    $("<button type='button' id='testbutt1'><a href='http://google.com' target='_blank'>testbutt1</a></button> <br>").appendTo( document.body );

    // Preventing a link from being followed
    $( "#testbutt1" ).click(function( eventObject ) {
        var elem = $( this );
        eventObject.preventDefault();
        console.log($("#testbutt1 a").attr("href"));
        // if ( elem.attr( "href" ).match( /evil/ ) ) {
        //     eventObject.preventDefault();
        //     elem.addClass( "evil" );
        // }
    });

    $("<input type='text' id='input2' name='input2'> <br>").appendTo( document.body );    
    
    // Multiple events, same handler
    $( "#input2" ).on(
        "click change", // Bind handlers for multiple events
        function() {
            console.log( "An input was clicked or changed!" );
        }
    );
    
    $("<button type='button' id='testbutt2'>testbutt2</button> <br>").appendTo( document.body );    

    // Binding multiple events with different handlers
    $( "#testbutt2" ).on({
        "click":     function() { console.log( "clicked!" ); },
        "mouseover": function() { console.log( "hovered!" ); }
    });

    $("<button type='button' id='testbutt3'>testbutt3</button> <br>").appendTo( document.body );   
    // Tearing down a particular click handler, using a reference to the function
    var foo = function() { console.log( "foo" ); };
    var bar = function() { console.log( "bar" ); };
    
    $( "#testbutt3" ).on( "click", foo ).on( "click", bar );
    $( "#testbutt3" ).off( "click", bar ); // foo is still bound to the click event

    $("<button type='button' id='testbutt4'>testbutt4</button> <br>").appendTo( document.body );   
    //Setting Up Events to Run Only Once
    $("#testbutt4").one("click", firstclick);

    function firstclick(){
        console.log("Butt4 clicked for the first time");
        $(this).click(function(){
            console.log("it was clicked before");
        });
    }

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

    
