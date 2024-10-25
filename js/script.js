
function sendToMail() {

  event.preventDefault();


  let name = document.getElementById("input-name").value.trim();
  let email = document.getElementById("input-email").value.trim();
  let phone = document.getElementById("input-phone").value.trim();
  let subject = document.getElementById("Subject").value;
  let message = document.getElementById("message").value.trim();

    if (name == "") {
      return alert("nama tidak boleh kosong");
    } else if (email == "") {
      return alert("Email tidak boleh kosong");
    } else if (phone == "") {
      return alert("Phone number tidak boleh kosong");
    } else if (subject == "") {
      return alert("Subject tidak boleh kosong");
    } else if (message == "") {
      return alert("Message tidak boleh kosong");
    }

  console.log("Form Data Submitted:");
  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(message);


  const a = document.createElement('a')
  a.href  = `mailto:${email}?$subject${subject}&body${encodeURIComponent(message)}`
  a.click()
}

const navbar = document.querySelector(".menu"); 

document.querySelector("#humbburger-menu").onclick = (e) => {
  navbar.classList.toggle("active");
  e.preventDefault();
};
