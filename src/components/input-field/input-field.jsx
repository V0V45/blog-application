import classes from "./input-field.module.css";

export default function InputField({name, placeholder, labelText, type, inputClassName, labelClassName, value, handleChange}) {

    return (
        <>
            <label htmlFor={name} className={`${classes.label} ${labelClassName}`}>{labelText}</label>
            <input type={type} name={name} id={name} className={`${classes.input} ${inputClassName}`} placeholder={placeholder} value={value} onChange={handleChange}/>
        </>
    );
}