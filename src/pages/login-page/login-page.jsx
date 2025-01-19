import HeaderField from "../../components/header-field/header-field";
import InputField from "../../components/input-field/input-field";
import classes from "./login-page.module.css";

export default function LoginPage() {
    return (
        <>
            <HeaderField />
            <main className={classes.container}>
                <div className={classes.loginContainer}>
                    <h1 className={classes.h1}>Вход в мысли</h1>
                    <form className={classes.form}>
                        <InputField name="email" placeholder="E-mail" labelText="Электронная почта" type="email" />
                        <InputField name="password" placeholder="Пароль" labelText="Пароль" type="password" />
                        <button type="submit" className={classes.enterButton}>Войти</button>
                    </form>
                    <div className={classes.additionalButtons}>
                        <button className={classes.createAccButton}>Создать<br />аккаунт</button>
                        <button className={classes.forgotPasswordButton}>Забыл<br />пароль</button>
                    </div>
                </div>
            </main>
        </>
    );
}