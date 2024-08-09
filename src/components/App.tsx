import { motion } from "framer-motion";
import LandingPage from "./sections/Landing";
import Redacted from "./sections/StickyRedacted/StickyRedacted";

function App() {
    return (
        <div className=" bg-red-500">
            <LandingPage />
            {/* <Redacted /> */}
        </div>
    )
}

export default App
