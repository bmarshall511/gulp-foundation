"use strict";

(function ($) {
  $(function () {
    var $submitConfig = $('#importConfig'),
        $configSavingStatus = $('#configSavingStatus'),
        $configImportStatus = $('#configImportStatus'),
        $importBlock = $('#importBlock');
    $submitConfig.click(function (e) {
      e.preventDefault();
      var $configData = $('#configData');
      $submitConfig.prop('disabled', true);
      $configData.prop('disabled', true);
      $configSavingStatus.html('Please wait, importing configuration...');
      $configImportStatus.html('');
      var data = new FormData();
      data.append('action', 'foundation_import_configuration');
      data.append('data', $configData.val());
      data.append('security', FOUNDATION.nonce);
      fetch(ajaxurl, {
        method: 'POST',
        body: data
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        if (response.error) {
          switch (response.error) {
            case 'invalid_data':
              $configImportStatus.html('<span style="color:#ca4a1f;font-weight:bold">The configuration code entered is invalid. Please try again.</span>');
              break;
          }
        } else {
          for (var property in response.updated) {
            $configImportStatus.append('<strong>' + response.updated[property] + '</strong> (' + property + ') <span style="color:#46b450">Updated</span><br>');
          }

          $configImportStatus.append('<br><a href="' + FOUNDATION.admin_url + 'admin.php?page=configuration">Refresh</a> the page to view the updates.');
          $importBlock.remove();
        }

        $submitConfig.prop('disabled', false);
        $configData.prop('disabled', false);
        $configSavingStatus.html('');
      });
    });
  });
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRwcmVzcy9hZG1pbi1jb25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbIiQiLCIkc3VibWl0Q29uZmlnIiwiJGNvbmZpZ1NhdmluZ1N0YXR1cyIsIiRjb25maWdJbXBvcnRTdGF0dXMiLCIkaW1wb3J0QmxvY2siLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiRjb25maWdEYXRhIiwicHJvcCIsImh0bWwiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ2YWwiLCJGT1VOREFUSU9OIiwibm9uY2UiLCJmZXRjaCIsImFqYXh1cmwiLCJtZXRob2QiLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVycm9yIiwicHJvcGVydHkiLCJ1cGRhdGVkIiwiYWRtaW5fdXJsIiwicmVtb3ZlIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsVUFBU0EsQ0FBVCxFQUFZO0FBQ1hBLEVBQUFBLENBQUMsQ0FBQyxZQUFNO0FBQ04sUUFBTUMsYUFBYSxHQUFTRCxDQUFDLENBQUMsZUFBRCxDQUE3QjtBQUFBLFFBQ01FLG1CQUFtQixHQUFHRixDQUFDLENBQUMscUJBQUQsQ0FEN0I7QUFBQSxRQUVNRyxtQkFBbUIsR0FBR0gsQ0FBQyxDQUFDLHFCQUFELENBRjdCO0FBQUEsUUFHTUksWUFBWSxHQUFVSixDQUFDLENBQUMsY0FBRCxDQUg3QjtBQUtBQyxJQUFBQSxhQUFhLENBQUNJLEtBQWQsQ0FBb0IsVUFBU0MsQ0FBVCxFQUFZO0FBQzlCQSxNQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFFQSxVQUFNQyxXQUFXLEdBQUdSLENBQUMsQ0FBQyxhQUFELENBQXJCO0FBRUFDLE1BQUFBLGFBQWEsQ0FBQ1EsSUFBZCxDQUFvQixVQUFwQixFQUFnQyxJQUFoQztBQUNBRCxNQUFBQSxXQUFXLENBQUNDLElBQVosQ0FBa0IsVUFBbEIsRUFBOEIsSUFBOUI7QUFDQVAsTUFBQUEsbUJBQW1CLENBQUNRLElBQXBCLENBQTBCLHlDQUExQjtBQUNBUCxNQUFBQSxtQkFBbUIsQ0FBQ08sSUFBcEIsQ0FBMEIsRUFBMUI7QUFFQSxVQUFJQyxJQUFJLEdBQUcsSUFBSUMsUUFBSixFQUFYO0FBQ0FELE1BQUFBLElBQUksQ0FBQ0UsTUFBTCxDQUFhLFFBQWIsRUFBdUIsaUNBQXZCO0FBQ0FGLE1BQUFBLElBQUksQ0FBQ0UsTUFBTCxDQUFhLE1BQWIsRUFBcUJMLFdBQVcsQ0FBQ00sR0FBWixFQUFyQjtBQUNBSCxNQUFBQSxJQUFJLENBQUNFLE1BQUwsQ0FBYSxVQUFiLEVBQXlCRSxVQUFVLENBQUNDLEtBQXBDO0FBRUFDLE1BQUFBLEtBQUssQ0FBRUMsT0FBRixFQUFXO0FBQ2RDLFFBQUFBLE1BQU0sRUFBRSxNQURNO0FBRWRDLFFBQUFBLElBQUksRUFBRVQ7QUFGUSxPQUFYLENBQUwsQ0FJQ1UsSUFKRCxDQUlNLFVBQUFDLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLE9BSmQsRUFLQ0YsSUFMRCxDQUtNLFVBQUFDLFFBQVEsRUFBSTtBQUNoQixZQUFLQSxRQUFRLENBQUNFLEtBQWQsRUFBc0I7QUFDcEIsa0JBQVFGLFFBQVEsQ0FBQ0UsS0FBakI7QUFDRSxpQkFBSyxjQUFMO0FBQ0VyQixjQUFBQSxtQkFBbUIsQ0FBQ08sSUFBcEIsQ0FBMEIsa0hBQTFCO0FBQ0Y7QUFIRjtBQUtELFNBTkQsTUFNTztBQUNMLGVBQUssSUFBSWUsUUFBVCxJQUFxQkgsUUFBUSxDQUFDSSxPQUE5QixFQUF1QztBQUNyQ3ZCLFlBQUFBLG1CQUFtQixDQUFDVSxNQUFwQixDQUE0QixhQUFhUyxRQUFRLENBQUNJLE9BQVQsQ0FBaUJELFFBQWpCLENBQWIsR0FBMEMsYUFBMUMsR0FBMERBLFFBQTFELEdBQXFFLGtEQUFqRztBQUNEOztBQUVEdEIsVUFBQUEsbUJBQW1CLENBQUNVLE1BQXBCLENBQTJCLGtCQUFrQkUsVUFBVSxDQUFDWSxTQUE3QixHQUF5Qyx5RUFBcEU7QUFDQXZCLFVBQUFBLFlBQVksQ0FBQ3dCLE1BQWI7QUFDRDs7QUFFRDNCLFFBQUFBLGFBQWEsQ0FBQ1EsSUFBZCxDQUFvQixVQUFwQixFQUFnQyxLQUFoQztBQUNBRCxRQUFBQSxXQUFXLENBQUNDLElBQVosQ0FBa0IsVUFBbEIsRUFBOEIsS0FBOUI7QUFDQVAsUUFBQUEsbUJBQW1CLENBQUNRLElBQXBCLENBQTBCLEVBQTFCO0FBQ0QsT0F4QkQ7QUF5QkQsS0F4Q0Q7QUF5Q0QsR0EvQ0EsQ0FBRDtBQWdERCxDQWpERCxFQWlER21CLE1BakRIIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcbiAgJCgoKSA9PiB7XG4gICAgY29uc3QgJHN1Ym1pdENvbmZpZyAgICAgICA9ICQoJyNpbXBvcnRDb25maWcnKSxcbiAgICAgICAgICAkY29uZmlnU2F2aW5nU3RhdHVzID0gJCgnI2NvbmZpZ1NhdmluZ1N0YXR1cycpLFxuICAgICAgICAgICRjb25maWdJbXBvcnRTdGF0dXMgPSAkKCcjY29uZmlnSW1wb3J0U3RhdHVzJyksXG4gICAgICAgICAgJGltcG9ydEJsb2NrICAgICAgICA9ICQoJyNpbXBvcnRCbG9jaycpO1xuXG4gICAgJHN1Ym1pdENvbmZpZy5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0ICRjb25maWdEYXRhID0gJCgnI2NvbmZpZ0RhdGEnKTtcblxuICAgICAgJHN1Ym1pdENvbmZpZy5wcm9wKCAnZGlzYWJsZWQnLCB0cnVlICk7XG4gICAgICAkY29uZmlnRGF0YS5wcm9wKCAnZGlzYWJsZWQnLCB0cnVlICk7XG4gICAgICAkY29uZmlnU2F2aW5nU3RhdHVzLmh0bWwoICdQbGVhc2Ugd2FpdCwgaW1wb3J0aW5nIGNvbmZpZ3VyYXRpb24uLi4nICk7XG4gICAgICAkY29uZmlnSW1wb3J0U3RhdHVzLmh0bWwoICcnICk7XG5cbiAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBkYXRhLmFwcGVuZCggJ2FjdGlvbicsICdmb3VuZGF0aW9uX2ltcG9ydF9jb25maWd1cmF0aW9uJyApO1xuICAgICAgZGF0YS5hcHBlbmQoICdkYXRhJywgJGNvbmZpZ0RhdGEudmFsKCkgKTtcbiAgICAgIGRhdGEuYXBwZW5kKCAnc2VjdXJpdHknLCBGT1VOREFUSU9OLm5vbmNlICk7XG5cbiAgICAgIGZldGNoKCBhamF4dXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBkYXRhXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAoIHJlc3BvbnNlLmVycm9yICkge1xuICAgICAgICAgIHN3aXRjaCggcmVzcG9uc2UuZXJyb3IgKSB7XG4gICAgICAgICAgICBjYXNlICdpbnZhbGlkX2RhdGEnOlxuICAgICAgICAgICAgICAkY29uZmlnSW1wb3J0U3RhdHVzLmh0bWwoICc8c3BhbiBzdHlsZT1cImNvbG9yOiNjYTRhMWY7Zm9udC13ZWlnaHQ6Ym9sZFwiPlRoZSBjb25maWd1cmF0aW9uIGNvZGUgZW50ZXJlZCBpcyBpbnZhbGlkLiBQbGVhc2UgdHJ5IGFnYWluLjwvc3Bhbj4nICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gcmVzcG9uc2UudXBkYXRlZCkge1xuICAgICAgICAgICAgJGNvbmZpZ0ltcG9ydFN0YXR1cy5hcHBlbmQoICc8c3Ryb25nPicgKyByZXNwb25zZS51cGRhdGVkW3Byb3BlcnR5XSArICc8L3N0cm9uZz4gKCcgKyBwcm9wZXJ0eSArICcpIDxzcGFuIHN0eWxlPVwiY29sb3I6IzQ2YjQ1MFwiPlVwZGF0ZWQ8L3NwYW4+PGJyPicgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkY29uZmlnSW1wb3J0U3RhdHVzLmFwcGVuZCgnPGJyPjxhIGhyZWY9XCInICsgRk9VTkRBVElPTi5hZG1pbl91cmwgKyAnYWRtaW4ucGhwP3BhZ2U9Y29uZmlndXJhdGlvblwiPlJlZnJlc2g8L2E+IHRoZSBwYWdlIHRvIHZpZXcgdGhlIHVwZGF0ZXMuJyk7XG4gICAgICAgICAgJGltcG9ydEJsb2NrLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJHN1Ym1pdENvbmZpZy5wcm9wKCAnZGlzYWJsZWQnLCBmYWxzZSApO1xuICAgICAgICAkY29uZmlnRGF0YS5wcm9wKCAnZGlzYWJsZWQnLCBmYWxzZSApO1xuICAgICAgICAkY29uZmlnU2F2aW5nU3RhdHVzLmh0bWwoICcnICk7XG4gICAgICB9KVxuICAgIH0pO1xuICB9KTtcbn0pKGpRdWVyeSk7Il0sImZpbGUiOiJ3b3JkcHJlc3MvYWRtaW4tY29uZmlndXJhdGlvbi5qcyJ9