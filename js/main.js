document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('is-open'); });
    });
  }

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var service = form.service.value;
      var message = form.message.value.trim();
      var status = document.getElementById('form-status');

      if (!name || !email || !message) {
        status.textContent = 'Please fill in your name, email and message.';
        return;
      }

      var subject = encodeURIComponent('Website enquiry — ' + (service || 'General'));
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Service of interest: ' + (service || 'Not specified') + '\n\n' +
        message
      );
      window.location.href = 'mailto:info@nexviakonect.com?subject=' + subject + '&body=' + body;
      status.textContent = 'Opening your email app to send this message…';
    });
  }
});
