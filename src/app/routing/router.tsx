import {createBrowserRouter, createRoutesFromElements, Navigate} from "react-router-dom"
import {Route} from "react-router";
import {HomePage} from "../../modules/pages/HomePage";
import {Layout} from "../../modules/UIKit/Layout/Layout";
import {FaqPage} from "../../modules/pages/FaqPage";
import {ServicesPages} from "../../modules/pages/ServicesPages";
import {AuthPage} from "../../modules/pages/AuthPage/AuthPage";
import {PaymentPage} from "../../modules/pages/CreatePages/PaymentPage/PaymentPage";
import {CreatePage} from "../../modules/pages/CreatePages/CreatePage/CreatePage";
import {SubmitPage} from "../../modules/pages/CreatePages/SubmitPage/SubmitPage";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route index element={<Navigate to='home' replace/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/faq' element={<FaqPage/>}/>
        <Route path='/services' element={<ServicesPages/>}/>
        <Route path='/auth/:formType' element={<AuthPage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/payment' element={<PaymentPage/>}/>
        <Route path='/submit' element={<SubmitPage/>}/>
    </Route>
))