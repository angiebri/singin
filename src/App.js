import React from "react";
import "./bootstrap.min.css";
import "./styles.css";

export default function App() {
  /**
   * to fix all warning with HTML copy-pasted from a regular page into React,
   * do the following in the markup:
   * - replace all "class" with "className"
   * - replace all "for" with htmlFor
   * - and also "autoFocus" should be camelCase instead of regular "autofocus"
   *
   * These fixes are due to the need of avoiding reserved JavaScript words
   */
  return (
    <form className="form-signin">
      <img
        className="mb-4"
        src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg"
        alt=""
        width="72"
        height="72"
      />
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label htmlFor="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="inputEmail"
        className="form-control"
        placeholder="Email address"
        required=""
        autoFocus=""
      />
      <label htmlFor="inputPassword" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="inputPassword"
        className="form-control"
        placeholder="Password"
        required=""
      />
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
      <p className="mt-5 mb-3 text-muted">© 2017-2020</p>
    </form>
  );
}
