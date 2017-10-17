'use strict';
// stubybudy.js
// William Horn
// Created: Oct 3, 2017
//
// Code for handling div selection on wiki page.
// each page(div) needs a button with the id 
//      #<name>-btn
// and a div with class
//      .<name>-div



let app = angular.module("stubbyBuddyWiki", []);


app.run(function($rootScope) {
    $rootScope.pages = ["home", "brainstorming", "contextual-design"];

    $rootScope.navLinks = getPages($rootScope.pages);
    $rootScope.currentPage = $rootScope.navLinks[1];    
});


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


class Page {
    constructor(name) {
        this.name = name;

        let titleWords = name.split("-");
        this.title = "";

        for(let i = 0; i < titleWords.length; ++i) {
            let word = titleWords[i];

            this.title += word.charAt(0).toUpperCase() + word.slice(1) + " ";
        }

        console.log(this.title)
    }
}


function getPages(pageNames) {
    let pages = [];

    for(let i = 0; i < pageNames.length; ++i) {
        let pageName = pageNames[i];

        pages.push(new Page(pageName));
    }

    return pages;
}
