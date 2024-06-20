import {useState} from "react";

export const bgWrapper2 = WrappedComponent => props => {
    const [bgColor, setBgColor] = useState("black");

    const toggleColor = () => {
        const newColor = bgColor === "yellow" ? "black" : "yellow";
        setBgColor(newColor);
    };

    const bgStyle = {
        backgroundColor: bgColor
    };

    return (
        <div style={bgStyle}>
            <button onClick={toggleColor} style={{backgroundColor:"aqua", marginLeft:"850px",fontSize:"25px"}}>Change Color</button>
            <WrappedComponent {...props} />
        </div>
    );
};
