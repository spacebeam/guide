var Workspace = Backbone.Router.extend({
  routes: {
    '': 'home',
    'about': 'about',
    'research': 'research',
    'privacy': 'privacy',
    'technology': 'technology',
    'terms': 'terms'
  },
  home: function () {
    this.components()
    var content = new fun.views.landing({el: '#fun_content'})
    content.render()
  },
  about: function () {
    this.components()
    var content = new fun.views.about({el: '#fun_content'})
    content.render()
  },
  research: function () {
    this.components()
    var content = new fun.views.research({el: '#fun_content'})
    content.render()
  },
  privacy: function () {
    this.components()
    var content = new fun.views.privacy({el: '#fun_content'})
    content.render()
  },
  technology: function () {
    this.components()
    var content = new fun.views.technology({el: '#fun_content'})
    content.render()
  },
  terms: function () {
    this.components()
    var content = new fun.views.terms({el: '#fun_content'})
    content.render()
  },
  components: function () {
    var navbar = new fun.views.navbar({el: '#fun_navbar'})
    var footer = new fun.views.footer({el: '#fun_footer'})
    navbar.render()
    footer.render()
  }
})
fun.instances.router= new Workspace();
Backbone.history.start({pushState: true});
fun.instances.router.on('route', function () {
	$('body').scrollTop(0)
});
