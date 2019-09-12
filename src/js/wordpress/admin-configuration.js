(function($) {
  $(() => {
    const $submitConfig       = $('#importConfig'),
          $configSavingStatus = $('#configSavingStatus'),
          $configImportStatus = $('#configImportStatus'),
          $importBlock        = $('#importBlock');

    $submitConfig.click(function(e) {
      e.preventDefault();

      const $configData = $('#configData');

      $submitConfig.prop( 'disabled', true );
      $configData.prop( 'disabled', true );
      $configSavingStatus.html( 'Please wait, importing configuration...' );
      $configImportStatus.html( '' );

      let data = new FormData();
      data.append( 'action', 'foundation_import_configuration' );
      data.append( 'data', $configData.val() );
      data.append( 'security', FOUNDATION.nonce );

      fetch( ajaxurl, {
        method: 'POST',
        body: data
      })
      .then(response => response.json())
      .then(response => {
        if ( response.error ) {
          switch( response.error ) {
            case 'invalid_data':
              $configImportStatus.html( '<span style="color:#ca4a1f;font-weight:bold">The configuration code entered is invalid. Please try again.</span>' );
            break;
          }
        } else {
          for (let property in response.updated) {
            $configImportStatus.append( '<strong>' + response.updated[property] + '</strong> (' + property + ') <span style="color:#46b450">Updated</span><br>' );
          }

          $configImportStatus.append('<br><a href="' + FOUNDATION.admin_url + 'admin.php?page=configuration">Refresh</a> the page to view the updates.');
          $importBlock.remove();
        }

        $submitConfig.prop( 'disabled', false );
        $configData.prop( 'disabled', false );
        $configSavingStatus.html( '' );
      })
    });
  });
})(jQuery);