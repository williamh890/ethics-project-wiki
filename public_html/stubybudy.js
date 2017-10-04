

$(window).on('load', function() {
})

$(document).ready(function() {
    $(".nav-div").hide();
    set_initially_active("brainstorming") 


    $("#home-btn").click(function() {
        set_active(".home-div", this)
    });


    $("#brainstorming-btn").click(function() {
        set_active(".brainstorming-div", this)
    });


});

function set_initially_active(tab) {
    let tab_btn = "#" + tab + "-btn"
    $(tab_btn).addClass("active");

    let tab_div = "." + tab + "-div"
    $(tab_div).show();
}

function set_active(div_id, list_el) {

    // Make the button clicked the active button
    $(".active").removeClass("active")
    $(list_el).addClass("active")


    let new_active = $(div_id)

    // Check to see if current 
    if( new_active.hasClass("active-div")) {
        return;
    }

    // Hide old active div
    let old_active = $(".active-div")
    old_active.hide();
    old_active.removeClass("active-div");
    
    // Show new one
    new_active.show();
    new_active.addClass("active-div");
}


