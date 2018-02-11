$(function(){


	// SMART type for titles in about.md
	var typed = $('#typed').typed({
	    strings: ['Data Scientist', 'Photographer', 'Traveler','The Devil'],
	    typeSpeed: 60,
	    backSpeed: 100,
	    backDelay: 1500,
	    smartBackspace: true, // this is a default
	    loop: true

	});

	// nano gallery 
	$("#nanogallery").nanogallery2({
        "userID": "49480774@N08",
        "kind": "flickr",
        "photoset": "none",
        "thumbnailWidth": "400",
        "thumbnailHeight": "auto",
        "thumbnailBorderVertical": 0,
        "thumbnailBorderHorizontal": 0,
        "thumbnailLabel": {
          "align": "left"
        },
        "thumbnailHoverEffect2": "imageScaleIn80|imageSepiaOff|labelAppear75",
        "thumbnailAlignment": "center",
        "thumbnailGutterWidth": 0,
        "thumbnailGutterHeight": 0,
        viewerToolbar:    {
		         standard:  'label',
		         minimized: 'label' },
		 viewerTools:    {
		         topRight:  'shareButton, zoomButton, fullscreenButton,downloadButton,closeButton' } ,
		 thumbnailToolbarAlbum:    {
		 		 bottomRight: 'ahreButton'}
      });

	// nano gallery portfolio
	$("#nanogallery2").nanogallery2({
        "userID": "49480774@N08",
        "kind": "flickr",
        "thumbnailWidth": "auto",
        "thumbnailBorderVertical": 0,
        "thumbnailBorderHorizontal": 0,
        "thumbnailLabel": {
          "align": "left"
        },
        "thumbnailHoverEffect2": "imageScaleIn80|imageSepiaOff|labelAppear75",
        "thumbnailAlignment": "center",
        "thumbnailGutterWidth": 2,
        "thumbnailGutterHeight": 2,
        viewerToolbar:    {
		         standard:  'label',
		         minimized: 'label' },
		 viewerTools:    {
		         topRight:  'shareButton, zoomButton, fullscreenButton,downloadButton,closeButton' } ,
		 thumbnailToolbarAlbum:    {
		 		 bottomRight: 'share'} 
      });

	
})