const hostNm = window.location.hostname;
const root = hostName.includes("github") ? "/portfolio": "";

fetch(`${root}/images/WILD/WILD-Email-Design.html`).then(res => res.text()).then(data => {
  document.getElementById('emailContent').innerHTML = data;
});