import React from 'react';
import {Header} from '../Header/Header';
import {SWrapper} from "./SWrapper";
import {SMain} from "./SMain";
import {Outlet} from "react-router";
import {Footer} from "../Footer/Footer";

export const Layout = () => {
    return (
            <SWrapper>
                <Header/>
                <SMain>
                    <Outlet/>
                </SMain>
                <Footer/>
            </SWrapper>
    );
};
