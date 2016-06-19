var baseURL;
var premium = false;
var keystrokes = "";

if (document.location.href.indexOf('redmine') > -1) {
	baseURL = "https://dev.projects.cs.uaf.edu/redmine/projects/cs371_html_from_wiki/repository/revisions/master/raw/public_html/";
}
else {
	baseURL = "file://Users/johnpquan/UAF/Teaching/CS371_Computer_Ethics_and_Technical_Communication/HTML5Application/public_html";
}

function getPage(id, checkForAuthorization) {
	var mainUrl = '';

	if(checkForAuthorization) {
		if(premium) {
			mainUrl = mainUrl + id + '.html';
		}
		else {
			mainUrl = mainUrl + 'unauthorized.html';
		}
	}
	else {
		mainUrl = mainUrl + id + '.html';
	}

	$('#' + id).load(mainUrl);
	resizeBorder();
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

$(document).on("keypress", function(e) {
	keytyped = String.fromCharCode(e.which);
	console.log("Key pressed: " + keytyped);
	e.preventDefault();

	keystrokes = keystrokes + keytyped;
	if(keystrokes.length > 9) {
		keystrokes = keystrokes.substring(1,10);
	}

	if(keystrokes === "imawesome") {
		alert("Woohoo! You're a premium member!");
		premium = true;
	}
});

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

function calculateContributions() {
	var classNames = ['dustin','dylan','josh','scott'];
	var elements;
	var total = 0;

	for(var j = 0; j < classNames.length; j++) {
		elements = document.getElementsByClassName(classNames[j]);
		for(var i = 0; i < elements.length; i++) {
			var value = elements[i].innerHTML;
			value = value.replace(/[%?]/gi, '');
			if (value.length) total = total + parseInt(value);
		}

		totalElement = document.getElementById(classNames[j] + '-total');
		totalElement.innerHTML = (total/elements.length + '%');
		total = 0;
	}
}

function moveToPart(position) {
	$('html,body').animate({
		scrollTop: $(position).offset().top
	}, 'slow');
}

resetBase();	
resizeBorder();
getPage('index');