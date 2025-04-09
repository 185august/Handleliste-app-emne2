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
      loginsucess = true;
    } else if (
      model.data.users[i].username != model.input.loginPage.username &&
      model.data.users[i].password == model.input.loginPage.password
    ) {
      errormessage = "feil brukernavn";
      loginsucess = false;
    } else if (
      model.data.users[i].username == model.input.loginPage.username &&
      model.data.users[i].password != model.input.loginPage.password
    ) {
      errormessage = "feil passord";
      loginsucess = false;
    } else {
      errormessage = "feil brukernavn og passord";
      loginsucess = false;
    }
  }
  document.querySelector("#error-message").innerHTML = errormessage;
  if (loginsucess) {
    setPage("settings");
  } else {
    resetlogininputs();
  }
}
function resetlogininputs() {
  document.querySelector("#username").value = "";
  document.querySelector("#password").value = "";
  model.input.loginPage.username = "";
  model.input.loginPage.password = "";
}
