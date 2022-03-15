import { BrowserRouter, Routes, Route } from "react-router-dom"
import ToC from "../components/ToC"
import HouseDetail from "../components/HouseDetail"
import NotFound from "../components/NotFound"

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ToC />} />
                <Route path="/house/:id" element={<HouseDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
