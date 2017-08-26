window.onload = function () {
  new Vue({
    el: '#app-1',
    template: '#app',
    data: {
      contacts: []
    },
    methods: {
      addContact(newContact) {
        axios.post('/users.json', {
          user: {name: newContact.name, phone_number: newContact.phoneNumber}
        }).then((res) => {
          this.contacts.push({id: res.data.id, name: res.data.name, phoneNumber: res.data.phone_number})
        }).catch((error) => {
          this.errors = error.response.data.errors
        })
      }
    }
  })
}

