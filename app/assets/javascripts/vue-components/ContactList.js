Vue.component('contact-list', {
  name: 'contact-list',
  template: '#contact-list',
  props: ['contacts'],
  methods: {
    deleteContact (contact) {
      const contactIndex = this.contacts.indexOf(contact)
      this.contacts.splice(contactIndex, 1)
    }
  }
})
