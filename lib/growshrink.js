(function($) {
  $.fn.growshrink = function(options) {
  
      // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
       type: 'grow',
       direction: 'bottomright',
       growspeed: 1000
    }, options);
  
      this.each(function() {
      var element = $(this);
      
      if(settings.type=='grow'){
	element.height(0);
	element.width(0);
        
        element.css("margin-top",0);
        element.css("margin-bottom",0);
        element.css("margin-left",0);
        element.css("margin-right",0);
        
	var myparent = element.parent();
	var targetheight = myparent.height();
	var targetwidth = myparent.width();
        
        // vz = vertical_zero_value
        // hz = horizontal_zero_value
        switch(settings.direction)
        {
        case "topleft":
          element.css("margin-top",targetheight);
          element.css("margin-left",targetwidth);
          break;
        case "topright":
          element.css("margin-top",targetheight);
          element.css("margin-right",targetwidth);
          break;
        case "bottomleft":
          element.css("margin-bottom",targetheight);
          element.css("margin-left",targetwidth);
          break;
        case "bottomright":
          element.css("margin-bottom",targetheight);
          element.css("margin-right",targetwidth);
          break;
        case "middle":
          element.css("margin-bottom",(targetheight/2));
          element.css("margin-right",(targetwidth/2));
          element.css("margin-top",(targetheight/2));
          element.css("margin-left",(targetwidth/2));
          break;
        }

	element.animate({
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: targetwidth,
          height: targetheight
 	}, settings.growspeed);
      } else {
        
	var myparent = element.parent();
	var targetheight = myparent.height();
	var targetwidth = myparent.width();
        
        // vz = vertical_zero_value
        // hz = horizontal_zero_value
        switch(settings.direction)
        {
        case "topleft":
          mb = targetheight;
          mr = targetwidth;
          mt = 0;
          ml = 0;
          break;
        case "topright":
          mb = targetheight;
          mr = 0;
          mt = 0;
          ml = targetwidth;
          break;
        case "bottomleft":
          mb = 0;
          mr = targetwidth;
          mt = targetheight;
          ml = 0;
          break;
        case "bottomright":
          mb = 0;
          mr = 0;
          mt = targetheight;
          ml = targetwidth;
          break;
        case "middle":
          mb = targetheight/2;
          mr = targetwidth/2;
          mt = targetheight/2;
          ml = targetwidth/2;
          break;
        }

	element.animate({
          marginLeft: ml,
          marginRight: mr,
          marginTop: mt,
          marginBottom: mb,
          width: 0,
          height: 0
 	}, settings.growspeed);        
       
      }
    });        
    this.each(reset);
    
    return this;
  
  };
})(jQuery);