import React from 'react';
import { LoginForm } from '../../UIKit/Auth/LoginForm';
import { RegistrationForm } from '../../UIKit/Auth/RegistrationForm';

export const AuthPage = ({match}:any) => {
    const {formType} = match.params;
    return (
        <div>
            {formType === "login" ? <LoginForm /> : <RegistrationForm />}
        </div>
    );
};
