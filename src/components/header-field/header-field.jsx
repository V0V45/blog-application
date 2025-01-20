import classes from "./header-field.module.css";
import Logo from "../../components/logo/logo";
import LoginButton from "../../components/login-button/login-button";
import { useNavigate } from "react-router";

export default function HeaderField({ isLoggedIn, setIsLoggedIn, className }) {
    let navigate = useNavigate();

    return (
        <header className={`${classes.header} ${className}`}>
            <Logo onClick={() => navigate("/")} />
            {isLoggedIn ? (
                <div className={classes.user}>
                    <p className={classes.userName}>User Name</p>
                    <LoginButton onClick={() => setIsLoggedIn(false)}>Выйти</LoginButton>
                </div>
            ) : (
                <div className={classes.buttons}>
                    <LoginButton onClick={() => navigate("/login")} className={classes.loginButton}>Войти</LoginButton>
                    <LoginButton onClick={() => navigate("/register")} className={classes.regButton}>Создать аккаунт</LoginButton>
                </div>
            )}
        </header>
    );
}