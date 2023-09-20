import './App.css'
import {createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider} from "react-router-dom";
import Home from "./components/Home.jsx";
import {Data, dataLoader} from "./components/Data.jsx";
import About from "./components/About.jsx";


function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={"/"} element={<Root />}>
                <Route index element={<Home />}></Route>
                <Route path={"/data"} element={<Data />} loader={dataLoader}></Route>
                <Route path={"/about"} element={<About />}></Route>
            </Route>
        )
    )

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

const Root = () => {
    return (
        <>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/data"}>Data</Link>
                <Link to={"/about"}>About</Link>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </>
    );
}

export default App
