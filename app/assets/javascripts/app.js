window.onload = function () {
  var app = new Vue({
    el: '#app',
    template: '#app',
    data: {
      contacts: [],
    },
    methods: {
      showContact (contact) {
        axios.get('/users.json').then((res) => {
          this.contacts = res.data;
        });
      },
      addContact(newContact) {
        axios.post('/users.json', {
          user: {id: newContact.id, name: newContact.name,
            phone_number: newContact.phoneNumber }
        }).then((res) => {
          this.contacts.push({ id: res.data.id, name: res.data.name,
            phone_number: res.data.phone_number })
        }).catch((error) => {
          this.errors = error.response.data.errors
        });
      },
    },
  });
  app.showContact();
}

