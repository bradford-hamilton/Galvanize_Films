$(document).ready(function() {

    $('form').submit(function(event) {
      event.preventDefault();
      var data = $(this).serialize();
      $.ajax({
      url: 'https://mighty-eyrie-15280.herokuapp.com/films',
      type: 'POST',
      dataType: 'JSON',
      data: data,
      success: function(data) {
        return data;
      },
      error: function(err) {
        return(err);
      }
    // Use returned data
    }).done(function(data) {
      console.log(data);
      $('ul').html('<li>' + data.message + '</li>');
    }).fail(function(error) {
      var msg = JSON.parse(error.responseText).message;
      $('ul').html(msg);
    });
  });

});
