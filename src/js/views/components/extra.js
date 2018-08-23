fun.views.extra = Backbone.View.extend({
  events: {
    'click #subscribe-btn': 'subscribe',
    'click .navigate': 'navigate'
  },

  template: _.template(fun.utils.getTemplate(fun.conf.templates.components.extra)),

  render: function () {
    this.$el.html(this.template(fun.strings));
    this.email();
    return this;
  },

  email: function () {
    var emailView = new fun.views.subscribe({el: '#fun_es'});
    emailView.render();
  },

  navigate: function (event) {
    event.preventDefault()
    var href = $(event.target).attr('href');
    Backbone.history.navigate(href, {trigger: true});
  }

})