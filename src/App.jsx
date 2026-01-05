import React from 'react';
import MainHeader from './components/MainHeader/MainHeader.jsx';
import MainBody from './components/MainBody/MainBody.jsx';
import "./App.css";
import {RouterProvider} from "react-router-dom";
import {mainRouters} from "./app/mainRouter";
import {Provider} from "react-redux";
import {store} from "./store/store";

export default function App() {
    return (
        <div>
            <Provider store={store}>
            <MainHeader />
            <RouterProvider router={mainRouters}>
                <MainBody />
            </RouterProvider>
            </Provider>
        </div>
    );
}