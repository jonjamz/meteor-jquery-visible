jQuery Visible for Meteorite
============================
Meteorite package for jQuery Visible, a jQuery plugin by [Team DF](http://www.teamdf.com/)
that allows you to check if an element is in the browser's visual viewport.

This uses my fork which has been modified to allow a custom container, not just the viewport. All that's required is an extra argument at the end with the container's selector on it:

```javascript
$('#element').visible( false, false, 'horizontal', '.container');
```

[see examples at the original github repo](https://github.com/teamdf/jquery-visible)
