new Vue({
  el: '#app-1',
  template: '#app',
  components: {addContact: addContact},
  data: {
    contacts: [{
      name: 'Fatimah Az-Zahra',
      phoneNumber: '088218598615'
    },
    {
      name: 'Test',
      phoneNumber: '088218598615'
    }]
  },
  methods: {
    addContact (newContact) {
      this.contacts.push(newContact)
    }
  }
})


