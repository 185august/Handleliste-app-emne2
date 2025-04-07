function loginView() {
  let loginhtml = /*html*/ `<div class="login-container">
        <h2>Login</h2>
        <form id="loginform">
          <input type="text" id="username" placeholder="Username" onchange="loginsaveusernameinput(this.value)" />
          <input type="password" id="password" placeholder="Password" onchange="loginsavepasswordinput(this.value)"/>
          <button type="submit" onclick="loginhandler()">Loginn</button>
          <p id="error-message"></p>
        </form>
      </div>
  `;
  return loginhtml;
}
