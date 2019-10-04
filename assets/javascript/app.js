// Decide on a topic
// Sports
// Make an array with ~20 types of buttons that fall within the topic


var query = "Football";
var api_key = "&api_key=kMnuDOL0eSkaqR86tiRWyDEps5Y2T4Wc";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + query + api_key;


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);


});
    // Create and save a reference to new empty table row
      //var tableRow = $("<tr>");
    // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
      //var titleCell = $("<td>").text(response.Title);
      //var yearCell = $("<td>").text(response.Year);
      //var actorsCell = $("<td>").text(response.Actors);

    // Append the td elements to the new table row
      //tableRow.append(titleCell);
      //tableRow.append(yearCell);
      //tableRow.append(actorsCell);

    // Append the table row to the tbody element
      //$("tbody"),append(tableRow);





// Make an input field that will dynamically push a button into the array
// Make the array display it's latest addition as it is added
// Each button on click will call to the Giphy API and search for the topic the button is labeled as
// It will then return the first X(18?) gifs related to the topic selected and display them into the selected gifsHere div
// 