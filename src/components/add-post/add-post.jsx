import classes from "./add-post.module.css";
import LoginButton from "../login-button/login-button";
import { useState } from "react";

export default function AddPost({className, userInfo, posts, setPosts}) {
    const [content, setContent] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/createPost", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ content: content, userName: userInfo.name, userSurname: userInfo.surname, userId: userInfo.id }),
            });
            const data = await response.json();
            if (response.ok) {
                setPosts([data, ...posts]);
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.log(error);
            console.log("Ошибка при отправке запроса");
        }
    }


    return (
        <section className={`${classes.container} ${className}`}>
            <div className={classes.h2ButtonContainer}>
                <h2 className={classes.h2}>Текст поста:</h2>
                <LoginButton className={classes.addPostButton} onClick={handleSubmit}>Добавить пост</LoginButton>
            </div>
            <textarea className={classes.textarea} placeholder="Поделитесь Вашей мыслью..." onChange={(event) => setContent(event.target.value)}></textarea>
        </section>
    );
}