var addContact = Vue.component('add-contact', {
  name: 'add-contact',
  template: '#add-contact',
  data () {
    return {
      nameText: '',
      phoneNumberText: '',
      isCreating: false
    }
  },
  methods: {
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    },
    sendForm () {
      if (this.nameText.length > 0 && this.phoneNumberText.length > 0) {
        const name = this.nameText
        const phoneNumber = this.phoneNumberText
        this.$emit('add-contact', {
          name,
          phoneNumber
        })
        this.nameText = ''
        this.phoneNumberText = ''
        this.isCreating = false
      }
    }
  }
})
