import React from 'react';
import {ITitle, STitleBlock} from "./StyledComponents";

export const TitleBlock = (props: ITitle) => {
    return (
        <STitleBlock {...props}>
            {props.children}
        </STitleBlock>
    );
};
