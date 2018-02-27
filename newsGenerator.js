$(document).ready(function() {
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url +=
    "?" +
    $.param({
      "api-key": "e045ad7c628c49e1996a6ce68b6c1360",
      begin_date: "19180527",
      end_date: "19180527"
    });
  $.ajax({
    url: url,
    method: "GET"
  })
    .done(function(result) {
      console.log(result.response.docs[1].web_url);
      $("#data").html(result.response.docs[1].web_url);
    })
    .fail(function(err) {
      throw err;
    });
});
