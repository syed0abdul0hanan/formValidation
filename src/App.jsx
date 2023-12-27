import React, { useState } from "react";
import { checkEmail, checkPassword } from "./Validation";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);

  function formSubmitHandler(e) {
    e.preventDefault();

    const emailErrors = checkEmail(email);
    const passwordErrors = checkPassword(password);

    setEmailErrors(emailErrors);
    setPasswordErrors(passwordErrors);

    if (emailErrors.length == 0 && passwordErrors.length == 0) {
      alert("submit");
    }
  }

  return (
    <form onSubmit={formSubmitHandler} className="form">
      <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {emailErrors.length > 0 && (
          <div className="msg">{emailErrors.join(", ")}</div>
        )}
      </div>

      <div className={`form-group ${passwordErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
        />
        {passwordErrors.length > 0 && (
          <div className="msg">{passwordErrors.join(", ")}</div>
        )}
      </div>

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default App;
