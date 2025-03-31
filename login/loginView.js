function loginView() {
  let loginhtml = /*html*/ `<div class="login-container">
        <h2>Login</h2>
        <form id="loginform">
          <input type="text" id="username" placeholder="Username" required value="${model.input.loginPage.username}"oninput=´model.input.loginPage.username = this.value´ />
          <input type="password" id="password" placeholder="Password" required value="${model.input.loginPage.password}"oninput=´model.input.loginPage.password = this.value´/>
          <button type="submit">Login</button>
          <p id="error-message"></p>
        </form>
      </div>
  
  `;
  return loginhtml;
}
