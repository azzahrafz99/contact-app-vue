Vue.component('contact', {
  template: '#contact',
  props: ['contact'],
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
    deleteContact (contact) {
      this.$emit('delete-contact', contact)
    },
    showForm () {
      this.isEditing = true
    },
    hideForm () {
      this.isEditing = false
    }
  }
})
