/**
 * For a gpheader.html "onclick" event, get the html document matching this id
 *  name, stop displaying its siblings, and only display this as a div.
 * This is mainly used on index.html to only display the current div while 
 * hiding sibling divs, but it can be used anywhere.
 *  
 * @param {type} id the div id, which should match the HTML page name
 * @returns {undefined}
 */
function displaySingleDiv(id) {
    $.get(id + '.html', function (data) {
        $('#' + id).html(data).css("display", "block");
    });
    $('#' + id).siblings().css("display", "none");
}
/**
 * Get the html document matching this id name and display as a div.
 * This is mainly used on index.html to display menu, home, and group-projects-footer, 
 *  but it can be used anywhere.
 *  
 * @param {type} id the div id, which should match the HTML page name
 * @returns {undefined}
 */
function displayDiv(id) {
    $.get(id + '.html', function (data) {
        $('#' + id).html(data).css("display", "block");
    });
}