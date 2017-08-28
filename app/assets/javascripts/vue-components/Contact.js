Vue.component('contact', {
  template: '#contact',
  props: ['contact'],
  data: function () {
    return {
      isEditing: false
    }
  },
  methods: {
    deleteContact (contact) {
      this.$emit('delete-contact', contact);
    },
    updateContact (contact) {
      axios.patch( '/users/' + contact.id + '.json', {
        user: { id: contact.id, name: contact.name, phone_number: contact.phoneNumber }
      }).then((res) => {
        contact = ({ id: res.data.id, name: res.data.name, phoneNumber: res.data.phone_number });
        this.isEditing = false;
      });
    },
    editContact () {
      this.isEditing = true;
    },
    hideForm () {
      this.isEditing = false;
    },
  },
});
