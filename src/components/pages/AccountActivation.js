import React from "react";

const AccountsActivation = props => {
  return (
    <main className="container-sub">
      <h2 className="body--text body--text-main"> Welcome </h2>
      <p className="body--text body--text-sub">
        kindly check your email for a verification link to activate your account
        or click the link below to resend
      </p>
      <hr />
      <button className="btn btn-large btn-blue-dark btn-text"> Resend </button>
    </main>
  );
};

export default AccountsActivation;
