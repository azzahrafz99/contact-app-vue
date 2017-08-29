window.onload = function () {
  var app = new Vue({
    el: '#app',
    template: '#app',
    data: {
      contacts: [],
    },
    methods: {
      showContacts (contact) {
        axios.get('/users.json').then((res) => {
          this.contacts = res.data;
        });
      },
    },
  });
  app.showContacts();
};

