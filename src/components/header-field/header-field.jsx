import classes from "./header-field.module.css";
import Logo from "../../components/logo/logo";
import LoginButton from "../../components/login-button/login-button";
import { useNavigate } from "react-router";
import AddPostButton from "../add-post-button/add-post-button";

export default function HeaderField({ userInfo, setUserInfo, className }) {
    let navigate = useNavigate();

    return (
        <header className={`${classes.header} ${className}`}>
            <Logo onClick={() => navigate("/")} />
            {userInfo ? (
                <>
                <AddPostButton className={classes.addPostButton} />
                <div className={classes.user}>
                    <p className={classes.userName}>{`${userInfo.name} ${userInfo.surname}`}</p>
                    <LoginButton onClick={() => setUserInfo(null)}>Выйти</LoginButton>
                </div>
                </>
            ) : (
                <div className={classes.buttons}>
                    <LoginButton onClick={() => navigate("/login")} className={classes.loginButton}>Войти</LoginButton>
                    <LoginButton onClick={() => navigate("/register")} className={classes.regButton}>Создать аккаунт</LoginButton>
                </div>
            )}
        </header>
    );
}