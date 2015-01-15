Router.route('/', function () {
  this.render('home');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});

Router.route('/profile', function () {
  this.render('profile');
});
