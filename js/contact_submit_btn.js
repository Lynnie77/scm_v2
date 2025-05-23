  function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var subject = "Contact Form Submission";
    var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

    var emailLink = "mailto:sacredconnectionsministry@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    document.getElementById("contact-form").action = emailLink;
  }