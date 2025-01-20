import HeaderField from "../../components/header-field/header-field";
import InputField from "../../components/input-field/input-field";
import classes from "./reg-page.module.css";
import { useState } from "react";
import { isEmptyString } from "../../functions/string-functions";
import { useNavigate } from "react-router";

export default function RegPage({ userInfo, setUserInfo }) {
    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [upperText, setUpperText] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        setUpperText("");
        try {
            const response = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, surname, email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setUpperText(data.message);
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            } else {
                setUpperText(data.message);
            }
        } catch (error) {
            setUpperText("Ошибка при отправке запроса");
        }
    }

    return (
        <>
            <HeaderField userInfo={userInfo} setUserInfo={setUserInfo} />
            <main className={classes.container}>
                <div className={classes.regContainer}>
                    <h1 className={classes.h1}>Раздели свои мысли</h1>
                    {isEmptyString(upperText) ? "" : <p className={classes.upperText}>{upperText}</p>}
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <InputField name="name" placeholder="Имя" labelText="Имя" type="text" value={name} handleChange={(event) => setName(event.target.value)} />
                        <InputField name="surname" placeholder="Фамилия" labelText="Фамилия" type="text" value={surname} handleChange={(event) => setSurname(event.target.value)} />
                        <InputField name="email" placeholder="E-mail" labelText="Электронная почта" type="email" value={email} handleChange={(event) => setEmail(event.target.value)} />
                        <InputField name="password" placeholder="Пароль" labelText="Пароль" type="password" value={password} handleChange={(event) => setPassword(event.target.value)} />
                        <button type="submit" className={classes.regButton}>Создать аккаунт</button>
                    </form>
                </div>
            </main>
        </>
    );
}