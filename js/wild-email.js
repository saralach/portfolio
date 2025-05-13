fetch('/../images/WILD/WILD-Email-Design.html').then(res => res.text()).then(data => {
  document.getElementById('emailContent').innerHTML = data;
});