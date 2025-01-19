import HeaderField from "../../components/header-field/header-field";
import InputField from "../../components/input-field/input-field";
import classes from "./reg-page.module.css";

export default function RegPage() {
    return (
        <>
            <HeaderField />
            <main className={classes.container}>
                <div className={classes.regContainer}>
                    <h1 className={classes.h1}>Раздели свои мысли</h1>
                    <form className={classes.form}>
                        <InputField name="name" placeholder="Имя" labelText="Имя" type="text" />
                        <InputField name="surname" placeholder="Фамилия" labelText="Фамилия" type="text" />
                        <InputField name="email" placeholder="E-mail" labelText="Электронная почта" type="email" />
                        <InputField name="password" placeholder="Пароль" labelText="Пароль" type="password" />
                        <button type="submit" className={classes.regButton}>Создать аккаунт</button>
                    </form>
                </div>
            </main>
        </>
    );
}