// Hide flash message
$('#flashMessage').hide()

// Click Listener on previewButton
$('#previewButton').click(function(){
  const title = $('#blogTitleInput').val();
  const content = $('#blogContentInput').val();

  // Getting contents of input fields
  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').text(content);

  // Flashing a saved message
  $('#flashMessage')
    .slideDown(1000)
    .delay(1000)
    .slideUp();
});
