import HeaderField from "../../components/header-field/header-field";
import InputField from "../../components/input-field/input-field";
import classes from "./login-page.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { isEmptyString } from "../../functions/string-functions";

export default function LoginPage({ isLoggedIn, setIsLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        setError("");
        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setIsLoggedIn(true);
                navigate("/");
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError("Ошибка при отправке запроса");
        }
    }

    return (
        <>
            <HeaderField isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <main className={classes.container}>
                <div className={classes.loginContainer}>
                    <h1 className={classes.h1}>Вход в мысли</h1>
                    {isEmptyString(error) ? "" : <p className={classes.errorText}>{error}</p>}
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <InputField name="email" placeholder="E-mail" labelText="Электронная почта" type="email" value={email} handleChange={(event) => setEmail(event.target.value)} />
                        <InputField name="password" placeholder="Пароль" labelText="Пароль" type="password" value={password} handleChange={(event) => setPassword(event.target.value)} />
                        <button type="submit" className={classes.enterButton}>Войти</button>
                    </form>
                    <div className={classes.additionalButtons}>
                        <button className={classes.createAccButton} onClick={() => navigate("/register")}>Создать<br />аккаунт</button>
                        <button className={classes.forgotPasswordButton}>Забыл<br />пароль</button>
                    </div>
                </div>
            </main>
        </>
    );
}