// ==UserScript==
// @name                OneGreyLady
// @namespace	        http://marcua.net
// @description	        Convert New York Times articles that are not single page into ones that are
// @include		http*://nytimes.com/*
// @include		http*://www.nytimes.com/*
// ==/UserScript==

// Testing reveals I don't have to sanitize the URLs.  If you find any
// URLs that this breaks, let me know.
if (window.location.pathname.length > 1 && window.location.search.indexOf("pagewanted=") == -1) {
    var hashParts = window.location.href.split("#");
    var searchParts = hashParts[0].split("?");

    var newLoc = searchParts[0];
    if (searchParts.length == 1) {
        newLoc += "?pagewanted=all";
    } else {
        newLoc += "?" + searchParts[1] + "&pagewanted=all";
    }
    if (hashParts.length == 2) {
        newLoc += "#" + hashParts[1];
    }

    window.location.replace(newLoc);   
}