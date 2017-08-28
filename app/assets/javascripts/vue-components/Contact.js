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
        console.log(contact);
        contact = ({ id: res.data.id, name: res.data.name, phoneNumber: res.data.phone_number });
        if (contact.phoneNumber.length > 0) {
          this.isEditing = false;
          var div = document.getElementById('warning');
          div.style.display = "none";
        } else {
          var div = document.getElementById('warning');
          div.innerHTML += 'Missing Input';
          div.style.display = "inline-block";
        }
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
