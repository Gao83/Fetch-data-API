import { Routes, Route } from "react-router-dom"
import Home from "../components/Home/Home"
import Posts from "../components/Posts/Posts"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/post" element={< Posts />} />
        </Routes>
    )
}

export default AppRoutes