function loginsaveusernameinput(inputusername) {
  model.input.loginPage.username = inputusername;
}
function loginsavepasswordinput(inputpassword) {
  model.input.loginPage.password = inputpassword;
}
function loginhandler() {
  let errormessage = "";
  for (let i = 0; i < model.data.users.length; i++) {
    if (
      model.data.users[i].username == model.input.loginPage.username &&
      model.data.users[i].password == model.input.loginPage.password
    ) {
      //loginsuccess
      errormessage = "loginsuccess";
    } else if (
      model.data.users[i].username != model.input.loginPage.username &&
      model.data.users[i].password == model.input.loginPage.password
    ) {
      errormessage = "feil brukernavn";
    } else if (
      model.data.users[i].username == model.input.loginPage.username &&
      model.data.users[i].password != model.input.loginPage.password
    ) {
      errormessage = "feil passord";
    } else {
      errormessage = "feil brukernavn og passord";
    }
  }
  document.querySelector("#error-message").innerHTML = errormessage;
}
