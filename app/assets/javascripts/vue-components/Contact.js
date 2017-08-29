Vue.component('contact', {
  template: '#contact',
  props: ['contact'],
  data: function () {
    return {
      isEditing: false,
      old_contact: {}
    };
  },
  methods: {
    deleteContact (contact) {
      this.$emit('delete-contact', contact);
    },
    updateContact (contact) {
      axios.patch( '/users/' + contact.id + '.json', {
        user: { name: contact.name, phone_number: contact.phone_number }
      }).then((res) => {
        contact = ({ name: res.data.name,
          phone_number: res.data.phone_number });
        this.isEditing = false;
      }).catch(function (error) {
        var div = document.getElementById('warning');
        error.response.data.errors.forEach(function(value) {
          div.innerHTML += '<p>'+value+'</p>';
        });
        div.style.display = "inline-block";
      });
    },
    editContact (contact) {
      this.old_contact.name = contact.name;
      this.old_contact.phone_number = contact.phone_number;
      this.isEditing = true;
    },
    hideForm (contact) {
      this.contact.name = this.old_contact.name;
      this.contact.phone_number = this.old_contact.phone_number;
      this.isEditing = false;
      var div = document.getElementById('warning');
      div.style.display = "none";
    },
  },
});
