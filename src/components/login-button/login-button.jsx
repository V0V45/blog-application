import classes from "./login-button.module.css";

export default function LoginButton({children, className, onClick}) {
    return (
        <button onClick={onClick} className={`${classes.button} ${className}`}>{children}</button>
    );
}