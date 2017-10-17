'use strict';
// stubybudy.js
// William Horn
// Created: Oct 3, 2017
//
// Code for handling page selection on wiki page.
// To make a new page, add an html file in the 
// public_html/pages folder of the repository
// then add it to the pages list
//
// Titles will be made from name like so:
//
//     contextual-design -> Contextual Design 
//
// the path in the repos is 'public_html/pages/contextual-design.html'


let app = angular.module("stubbyBuddyWiki", []);


// Run once when the page is loaded
app.run(function($rootScope) {
    $rootScope.pageNames = ["home", "brainstorming", "contextual-design"];

    $rootScope.pages = getPages($rootScope.pageNames);
    $rootScope.currentPage = $rootScope.pages[1];    
});


// Functions for switch the current page
app.controller("pageCtrl", function($scope, $rootScope) {
    $scope.getPage = function() {
        return "pages/" + $rootScope.currentPage.name + ".html";
    }

    $scope.setPage = function(page) {
        $rootScope.currentPage = page;
    }

    $scope.isCurrentPage = function(page) {
        return $rootScope.currentPage === page;
    }
});


// Holds both the name and the title
class Page {
    constructor(name) {
        this.name = name;
        this.title = this._formatTitle(name)
    }
    
    // formating: foo-bar -> Foo Bar
    _formatTitle(name) {
        let title = ""
        let titleWords = name.split("-");

        for(let i = 0; i < titleWords.length; ++i) {
            let word = titleWords[i];

            title += word.charAt(0).toUpperCase() + word.slice(1) + " ";
        }

        return title
    }
}


// Turn a list of strings into a list of Page objects
function getPages(pageNames) {
    let pages = [];

    for(let i = 0; i < pageNames.length; ++i) {
        let pageName = pageNames[i];

        pages.push(new Page(pageName));
    }

    return pages;
}



