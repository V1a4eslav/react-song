import {createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import {Route} from "react-router";
import {HomePage} from "../../modules/pages/HomePage/HomePage";

export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/' element={<HomePage/>}/>
    </>
))