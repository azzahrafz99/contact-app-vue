window.onload = function () {
  var app = new Vue({
    el: '#app',
    template: '#app',
    data: {
      contacts: [],
    },
    methods: {
      showContact () {
        axios.get('/users.json').then((response) => {
          this.contacts = response.data;
        });
      },
      addContact(newContact) {
        axios.post('/users.json', {
          user: { name: newContact.name, phone_number: newContact.phoneNumber }
        }).then((res) => {
          this.contacts.push({ id: res.data.id, name: res.data.name,
            phoneNumber: res.data.phone_number })
        }).catch((error) => {
          this.errors = error.response.data.errors
        });
      },
    },
  });
  app.showContact();
}

