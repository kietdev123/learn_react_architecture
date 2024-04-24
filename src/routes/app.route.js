import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import IntrestRate from "../components/Interest/InterestRate";
import Counter from "../pages/Counter";
import Header from "../components/layouts/header";
import TodoPage from "../pages/todo/todo.page";

const  AppRouter  = () =>{
    return  <Router>
    <div className="App">
        <Header></Header>
        <Routes>
            <Route
                path="/"
                element={<IntrestRate />}
            ></Route>
            <Route
                path="/about"
                element={<Counter />}
            ></Route>
             <Route
                path="/todo"
                element={<TodoPage />}
            ></Route>
        </Routes>
    </div>
</Router>
}

export default AppRouter;