import classes from "./header-field.module.css";
import Logo from "../../components/logo/logo";
import LoginButton from "../../components/login-button/login-button";
import { useNavigate } from "react-router";

export default function HeaderField({ className }) {
    let navigate = useNavigate();

    return (
        <header className={`${classes.header} ${className}`}>
            <Logo onClick={() => navigate("/")} />
            <div className={classes.buttons}>
                <LoginButton onClick={() => navigate("/login")} className={classes.loginButton}>Войти</LoginButton>
                <LoginButton onClick={() => navigate("/register")} className={classes.regButton}>Создать аккаунт</LoginButton>
            </div>
        </header>
    );
}