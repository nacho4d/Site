$(document).ready(function() {

 //console.log("logaaaaa");
//Add a functions to "a" elements
  //$("a").click(function() {
  //  alert("Hello world!");
  //});
  
  // make the search bar the first responder
  var searchField = $('#search-field');
  searchField.focus(function() {
    searchField.addClass('focused-box');
  });
  searchField.blur(function(){
    searchField.removeClass('focused-box');
  });
  
});