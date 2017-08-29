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
      if (contact.name.length > 0 && contact.phone_number.length > 0) {
        axios.patch( '/users/' + contact.id + '.json', {
          user: { name: contact.name, phone_number: contact.phone_number }
        }).then((res) => {
          contact = ({ name: res.data.name,
            phone_number: res.data.phone_number });
          this.isEditing = false;
        });
      } else {
        var div = document.getElementById('warning');
        div.innerHTML += 'Missing Input';
        div.style.display = "inline-block";
      }
    },
    editContact () {
      this.isEditing = true;
    },
    hideForm (contact) {
      this.isEditing = false;
    },
  },
});
