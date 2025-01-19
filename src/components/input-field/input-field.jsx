import classes from "./input-field.module.css";
import { useState } from "react";

export default function InputField({name, placeholder, labelText, type, inputClassName, labelClassName}) {
    const [value, setValue] = useState("");

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <>
            <label htmlFor={name} className={`${classes.label} ${labelClassName}`}>{labelText}</label>
            <input type={type} name={name} id={name} className={`${classes.input} ${inputClassName}`} placeholder={placeholder} value={value} onChange={handleChange}/>
        </>
    );
}