(function($) {
  $(() => {
    const $submitConfig       = $( '#importConfig' ),
          $configSavingStatus = $( '#configSavingStatus' ),
          $configImportStatus = $( '#configImportStatus' ),
          $importBlock        = $( '#importBlock' ),
          $generateTheme      = $( '#generateChildTheme' ),
          $childThemeStatus   = $( '#childThemeStatus' );

    // Genearte child theme
    $generateTheme.click(function(e) {
      e.preventDefault();

      const $themeName  = $( '#childThemeName' );
      const $textDomain = $( '#childThemeTextDomain' );
      const $themeDesc  = $( '#childThemeDesc' );
      const $themeURL   = $( '#childThemeURL' );
      const $themeTags  = $( '#childThemeTags' );

      let data = new FormData();
      data.append( 'action', 'foundation_generate_theme' );
      data.append( 'theme_name', $themeName.val() );
      data.append( 'text_domain', $textDomain.val() );
      data.append( 'theme_desc', $themeDesc.val() );
      data.append( 'theme_url', $themeURL.val() );
      data.append( 'theme_tags', $themeTags.val() );
      data.append( 'security', FOUNDATION.nonce );

      $themeName.prop( 'disabled', true );
      $textDomain.prop( 'disabled', true );
      $themeDesc.prop( 'disabled', true );
      $themeURL.prop( 'disabled', true );
      $themeTags.prop( 'disabled', true );
      $generateTheme.prop( 'disabled', true );

      $childThemeStatus
        .removeClass( 'error' )
        .removeClass( 'success' )
        .html('');

      fetch( ajaxurl, {
        method: 'POST',
        body: data
      })
      .then(response => response.json())
      .then(response => {
        $themeName.prop( 'disabled', false );
        $textDomain.prop( 'disabled', false );
        $themeDesc.prop( 'disabled', false );
        $themeURL.prop( 'disabled', false );
        $themeTags.prop( 'disabled', false );
        $generateTheme.prop( 'disabled', false );

        if ( response.error.length ) {
          $childThemeStatus.addClass( 'error' );
          response.error.forEach(function(errorMsg) {
            $childThemeStatus.append( '<p><strong>' + errorMsg + '</strong></p>' );
          });
        } else if( response.success.length ) {
          $childThemeStatus.addClass( 'success' );
        }

        if ( response.success.length ) {
          response.success.forEach(function(successMsg) {
            $childThemeStatus.append( '<p><strong>' + successMsg + '</strong></p>' );
          });
        }
      })
    });

    // Import configuration
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
