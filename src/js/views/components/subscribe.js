fun.views.subscribe = Backbone.View.extend({
  events: {
    'click #e_s': 'subscribe'
  },

  template: _.template(fun.utils.getTemplate(fun.conf.templates.components.subscribe)),

  render: function () {
    this.$el.html(this.template(fun.strings));
    return this;
  },

  subscribe: function (event) {
    event.preventDefault();
    var email = $('#email').val();
    $('#e_frm').validate();
    // check jquery validation
    if ($('#e_frm').valid()) {
      event.preventDefault();
      this.send(email);
      $('#email').val('');
    } else {
      console.log('invalid');
    }
  },

  send: function (email) {
    console.log('sending')
    // var data = {
    //   title: 'You have mail',
    //   account: 'nonsensews',
    //   description: 'About the underworld some curious soul have spawn and stuff',
    //   labels: ['press', 'start', 'nonsense', 'underworld'],
    //   source: window.location.hostname,
    //   destination: email
    // };
    // var submit = new fun.models.email(data);
    // submit.url = fun.conf.url.email;
    // submit.save();
  }

})