import React from "react";

const AccountsActivation = props => {
  return (
    <main className="container-sub">
      <h2 className="body--text body--text-main"> Welcome </h2>
      <p className="body--text body--text-sub">
        Enter your email address below to reset your password
      </p>
      <input type="email" placeholder="email@example.com" />
      <button className="btn btn-large btn-blue-dark btn-text"> Resend </button>
    </main>
  );
};

export default AccountsActivation;
