import { useState } from "react";
import FeatherImg from "./feather-img/feather-img";
import classes from "./logo.module.css";

export default function Logo({className}) {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <div className={`${classes.logoContainer} ${className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <FeatherImg className={classes.logo} isHovered={isHovered} />
            <p className={`${classes.text} ${isHovered ? classes.hover : classes.noHover}`}>мысли</p>
        </div>
    );
}