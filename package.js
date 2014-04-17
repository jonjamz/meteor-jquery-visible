Package.describe({
  summary: "jQuery plugin to check if an element is in the browser's visual viewport"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('lib/jquery-visible/jquery.visible.min.js', 'client');
});