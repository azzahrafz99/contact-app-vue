Vue.component('contact-list', {
  name: 'contact-list',
  template: '#contact-list',
  props: ['contacts'],
  methods: {
    deleteContact (contact) {
      axios.delete( '/users/' + contact.id + '.json').then((res) => {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
        console.log(this.contacts);
      }).catch(function (error) {
        var div = document.getElementById('warning');
        error.response.data.errors.forEach(function(value) {
          div.innerHTML += '<p>'+value+'</p>';
        });
        div.style.display = "inline-block";
      });
    },
  },
});
