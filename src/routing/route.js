import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../templates/pages/home';
import About from '../templates/pages/about';
import Contact from '../templates/pages/contact';
import Plans from '../templates/pages/photo&video';
import Election from '../templates/pages/election';

const Routing = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home/>}></Route>
                    <Route path="/election" exact element={<Election/>}></Route>
                    <Route path="/about" exact element={<About/>}></Route>
                    <Route path="/karya/upalapdi" exact element={<Contact/>}></Route>
                    <Route path="/photo/video" exact element={<Plans/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routing;