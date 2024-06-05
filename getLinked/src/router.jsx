import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Rules from "./pages/Rules";
import { Sponsors } from "./pages/Sponsors";


export default function Router() {
    return (
        <div className=" bg-[#150e28] w-full min-h-[100vh] text-white">
            {/* <Navbar /> */}
            {/* <Sponsors /> */}
            {/* <Footer /> */}
            <Rules />
        </div>
    )
}