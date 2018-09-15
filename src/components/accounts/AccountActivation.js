import React from "react";

const AccountsActivation = props => {
  return (
    <main className="container">
      <h2 className="text-welcome"> Welcome </h2>
      <p className="text-verify">
        kindly check your email for a verification link to activate your account
        or click the link below to resend
      </p>
      <hr />
      <button className="btn btn-text"> Resend </button>
    </main>
  );
};

export default AccountsActivation;
