import React from 'react';
import { LoginForm } from '../../entities/Auth/LoginForm';
import { RegistrationForm } from '../../entities/Auth/RegistrationForm';

export const AuthPage = ({match}:any) => {
    const {formType} = match.params;
    return (
        <div>
            {formType === "login" ? <LoginForm /> : <RegistrationForm />}
        </div>
    );
};
