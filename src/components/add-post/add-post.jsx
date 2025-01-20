import classes from "./add-post.module.css";
import LoginButton from "../login-button/login-button";

export default function AddPost({className}) {
    return (
        <section className={`${classes.container} ${className}`}>
            <div className={classes.h2ButtonContainer}>
                <h2 className={classes.h2}>Текст поста:</h2>
                <LoginButton className={classes.addPostButton}>Добавить пост</LoginButton>
            </div>
            <textarea className={classes.textarea} placeholder="Поделитесь Вашей мыслью..."></textarea>
        </section>
    );
}