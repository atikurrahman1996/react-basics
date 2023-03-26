import React from "react";

function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration />

        <Form className={classes.signup} />
      </div>
    </>
  );
}

export default Signup;
