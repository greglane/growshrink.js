# growshrink.js

Growshrink.js is a jQuery Plugin for scaling divs from zero size to the same size as the
parent and back again.  I used similar code on [https://sequoiaheritage.com/ this site]
because I found the jQuery UI wouldn't do what I wanted - especially when using size/scale
from the bottom right to top left or bottom left to top right.

You can see a live demo of this plugin here -> http://greglane.me/demos/growshrink/

## Quick start

See the source of the enclosed index.html for details.
All that is required is to include the plugin and then call growshrink on an element.
The element must be nested inside a div with a specific height and width. The nested
element will grow to the same size as the parent div.

## Options

When calling growshrink on your divs, you have the following parameters and options.
(defaults are shown)

###type: 'grow'

options are 'grow' or 'shrink'.

###direction: 'bottomright'

options are topleft, topright, bottomleft, bottomright

This is the direction in which the animation is heading and it always begins from the
opposite corner.  So a 'grow' with direction set as 'topleft' will begin in the bottom
right corner.  Likewise, a 'shrink' with direction set to 'bottomright' will begin in
the top right corner.

###growspeed: 1000

This is the speed of the animation in milliseconds. So 1000 is equal to one second.

## License and acknowledgements

This plugin is released under an MIT style license. However, it does include HTML5
Boilerplate which has its own license.

