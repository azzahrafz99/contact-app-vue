Vue.component('add-contact', {
  name: 'add-contact',
  template: '#add-contact',
  props: ['contacts'],
  data () {
    return {
      nameText: '',
      phoneNumberText: '',
      isCreating: false
    };
  },
  methods: {
    openForm () {
      this.isCreating = true;
    },
    closeForm () {
      this.isCreating = false;
      var div = document.getElementById('warning');
      div.style.display = "none";
    },
    createContact () {
      console.log(this.nameText);
      axios.post('/users.json', {
        user: { name: this.nameText,
          phone_number: this.phoneNumberText }
      }).then((res) => {
        const name = this.nameText;
        const phoneNumber = this.phoneNumberText;
        this.contacts.push({ name: res.data.name, phone_number: res.data.phone_number });
        this.nameText = '';
        this.phoneNumberText = '';
        this.isCreating = false;
      }).catch(function (error) {
        console.log(error);
        var div = document.getElementById('warning');
        error.response.data.errors.forEach(function(value) {
          div.innerHTML += '<p>'+value+'</p>';
        });
        div.style.display = "inline-block";
      });
    },
  },
});


