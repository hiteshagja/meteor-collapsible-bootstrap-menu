Package.describe({
  summary: "Side menu",
  version: "0.3.1"
});


Package.on_use(function (api) {
  api.versionsFrom("METEOR@1.0.3");
  api.use('jquery', 'client');
  // api.use('less@2.5.1', 'client');

  // javascript
  api.add_files(['lib/js/bs_leftnavi.js', 'lib/less/bs_leftnavi.css'], 'client');
  api.export('sideMenu');
});
