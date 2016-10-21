var baseURL, mainURL;
var premium = false;
var keystrokes = "";

if (document.location.href.indexOf('redmine') > -1) {
	baseURL = "https://projects.cs.uaf.edu/redmine/projects/cs371_group_projects/repository/revisions/master/raw/public_html/";
        mainURL = 'https://projects.cs.uaf.edu/redmine/projects/cs371_group_projects/wiki/';
}
else {
	baseURL = "file:///Users/johnpquan/UAF/Teaching/CS371_Computer_Ethics_and_Technical_Communication/HTML5Application/public_html/";
        mainURL = '';
}

function getPage(id) {
            mainURL = mainURL + id + '.html';
	$('#' + id).load(mainURL);
}

function setHead(head) {
	document.head.innerHTML = head;
}

function getActiveTabPane() {
	var panes = document.getElementsByClassName('tab-pane');

	for (var i = panes.length - 1; i >= 0; i--) {
		if (panes[i].className.indexOf('active') > -1) {
			return panes[i];
		};
	};
}

function isWebsite() {
	if (document.location.href.indexOf('redmine') < 0)
		return true;

	return false;
}

function resizeBorder() {
	var borderDiv = $('.border');
	var newWidth = ((borderDiv.width() / 50) | 0);

	borderDiv.css('border-width', newWidth + 'px');
	$("#whitepaper-iframe").width($(".whitepaper").width());

	if (isWebsite()) {
		//If we're on the whitepaper page.
		if($('.documentation-menu > ul  > li.active').text() == "Whitepaper") {
			$('#whitepaper-iframe').height(675) //hard-coded hack for size
		}
	};
}


window.onresize = function(event) {
	resizeBorder();
};

function resetBase() {
	var base = document.createElement('base');
	base.setAttribute('href', baseURL);
}

function init() {
	document.write('');
	document.close();
	resetBase();

	$.ajax({
	    url : (baseURL + "index.html"),
	    async:false,
	    success : function(result){
	    	$('html').html(result);
			// document.write(result);
		} 
	});
	
	resetBase();
	getPage('navigation');

	resizeBorder();
}

function moveToPart(position) {
	$('html,body').animate({
		scrollTop: $(position).offset().top
	}, 'slow');
}

resetBase();	
resizeBorder();
getPage('index');