import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import IntrestRate from "../components/Interest/InterestRate";
import Counter from "../pages/Counter";

const  AppRouter  = () =>{
    return  <Router>
    <div className="App">
        <ul className="">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">
                    About Us
                </Link>
            </li>
            <li>
                <Link to="/contact">
                    Contact Us
                </Link>
            </li>
        </ul>
        <Routes>
            <Route
                path="/"
                element={<IntrestRate />}
            ></Route>
            <Route
                path="/about"
                element={<Counter />}
            ></Route>
        </Routes>
    </div>
</Router>
}

export default AppRouter;