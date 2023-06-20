import React from 'react';
import DisplayUser from '../components/displayUser';
import RegistrationForm from '../components/registrationForm';

function Register() {
  return (
    <div class="row">
      <div class="col-md-4">
        <RegistrationForm />
      </div>
      <div class="col-md-4">
        <DisplayUser />
      </div>
    </div>
  );
}

export default Register;