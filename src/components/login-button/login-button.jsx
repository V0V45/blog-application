import classes from "./login-button.module.css";

export default function LoginButton({children, className}) {
    return (
        <button className={`${classes.button} ${className}`}>{children}</button>
    );
}