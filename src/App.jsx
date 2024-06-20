import './App.css'
import Info from "./components/Info.jsx";
import Data from "./components/Data.jsx";
import {bgWrapper2} from "./hoc/bgWrapper.jsx";

function App() {
    return (
        <div>
            <Info/>
            <Data/>
        </div>
    );
}

export default bgWrapper2(App)
