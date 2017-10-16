// stubybudy.js
// William Horn
// Created: Oct 3, 2017
//
// Code for handling div selection on wiki page.
// each page(div) needs a button with the id 
//      #<name>-btn
// and a div with class
//      .<name>-div


// Adds event handlers to all pages
SECTIONS = ["home", "brainstorming", "contextual-design"]


$(document).ready(function() {
    $(".nav-div").hide();
    set_initially_active("brainstorming");

    register_handlers(SECTIONS);
});


function register_handlers(sections) {
    for(let i = 0; i < sections.length; ++i) {
        let section = sections[i];

        let btn_id = "#" + section + "-btn";
        let div_cls = "." + section + "-div";

        $(btn_id).click(function() {
            set_active(div_cls, this)
        });
    }
}

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


