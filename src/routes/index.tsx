import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import App from "../App"
import { Home } from '../pages/home'

export const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    )
}