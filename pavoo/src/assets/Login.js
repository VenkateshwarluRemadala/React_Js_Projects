import React from "react";

function Login() {
  return (
    <div>
      <form>
        <div class="row">
          <label for="inputPassword" class="col-sm-2 ">
            Email
          </label>
          <div class="col-sm-6">
            <input
              type="text"
              readonly
              class="form-control"
              value="email@example.com"
            />
          </div>
        </div>
        <div class="row">
          <label for="inputPassword" class="col-sm-2 ">
            Password
          </label>
          <div class="col-sm-6">
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="row">
            <button className="btn btn-primary">submitt</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
