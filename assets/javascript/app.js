// GLOBAL VARIABLES HERE //
var sportsArray = ["Football", "Soccer", "Baseball", "Basketball", "Golf", "Skiing", "Snowboarding", "Hockey", "Lacrosse"]


// FUNCTIONS HERE //
function buttonClick(topic) {

  $("#gifsHere").empty();

  var api_key = "&api_key=kMnuDOL0eSkaqR86tiRWyDEps5Y2T4Wc";
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + api_key;
  console.log("inside buttonClick function");
  console.log(topic);

  //This is the ajax call to search the giphy database with the above queryURL and my api key
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    for (var i = 0; i < response.data.length; i++) {

      var image = response.data[i].images.fixed_height_still.url;

      // var div = $("<div>");
      var rating = response.data[i].rating;

      var p = $("<p>").text("Rating: " + rating);

      var gif = response.data[i].images.fixed_height.url;

      var topicImage = $("<img>");

      topicImage.attr("data-still", image);

      topicImage.attr("data-state", "still");

      topicImage.attr("src", image);

      topicImage.attr("data-animate", gif);

      topicImage.attr("class", "toggler");

      $("#gifsHere").append(p);

      $("#gifsHere").append(topicImage);
    }
  });


}

function renderButtons() {

  $("#buttonsHere").empty();

  for (var i = 0; i < sportsArray.length; i++) {
    var b = $("<button>");
    b.text(sportsArray[i]);
    b.attr("class", "topic-gif")
    b.attr("data-topic", sportsArray[i])
    $("#buttonsHere").append(b);

  }

}

renderButtons();




// CLICK EVENT HERE //
$(document).on("click", ".topic-gif", function () {

  console.log("clickEvent fired");

  console.log(this);

  var buttonClicked = $(this).attr("data-topic");

  buttonClick(buttonClicked);
}
)


$(document).on("click", ".toggler", function () {

  var state = $(this).attr("data-state");

  if (state === "still") {

    $(this).attr("src", $(this).attr("data-animate"));

    $(this).attr("data-state", "animate");
    
  }

  else {

    $(this).attr("src", $(this).attr("data-still"));

    $(this).attr("data-state", "still");
  }
} 
)

$(document).on("click", "#addCustomButton", function () {

  var customButton = $("#customButtonText").val();

  $("#customButtonText").val("");

  var newestButton = $("<button>").text(customButton);

  $("#buttonsHere").append(newestButton);

}
)













//This for loop will loop through the sportsArray and dynamically create buttons for each index point and push them to the "buttonsHere" id div









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