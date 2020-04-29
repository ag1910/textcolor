function pasuser(form) {
if (form.id.value=="Doruk") {
if (form.pass.value=="6000") {
location="do.html"
} else {
alert("Invalid Password")
}
} else {  alert("Invalid Acount name")
}
}
  setTimeout(function(){ window.location='A.html'; }, 15000);
