import classes from "./add-post-button.module.css";
import { useState } from "react";
import AddImg from "./add-img/add-img";

export default function AddPostButton({className, onClick}) {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <button onClick={onClick} className={`${classes.button} ${className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <AddImg isHovered={isHovered} />
        </button>
    );
}