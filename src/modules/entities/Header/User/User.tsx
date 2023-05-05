import React from 'react';
import {SUser, SUserText} from "./SUser";
import {IconUser} from "./UserIcon";


export const User = () => {
    return (
        <SUser to='/auth'>
            <SUserText>Login</SUserText>
            <IconUser/>
        </SUser>
    );
};
