import { Routes, Route } from "react-router-dom";
import Test from "./pages/test/index";

function App() {
    return (
        <Routes>
            <Route path="/test" element={<Test />} />
        </Routes>
    );
}

export default App;