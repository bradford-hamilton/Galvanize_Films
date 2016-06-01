$(document).ready(function() {

    $('form').submit(function(event) {
      $('.jumbo2').show();
      var movieName = $('#movie-search').val();
      event.preventDefault();
      $.ajax({
      url: 'https://galvanize-cors-proxy.herokuapp.com/https://api.themoviedb.org/3/search/movie/?api_key=23d39666c667c080fa38d23936073bb1&query=' + movieName,
      type: 'GET',
      dataType: 'JSON',
      success: function(data) {
        return data;
      },
      error: function(err) {
        alert(err);
      }
    // Use returned data
    }).done(function(data) {
      $('ul').empty();
      $('ul').append('<li class="text-center">' + data.results[1].original_title + '</li><br>');
      $('ul').append('<li>' + data.results[0].overview + '</li>');
    });
  });

});
