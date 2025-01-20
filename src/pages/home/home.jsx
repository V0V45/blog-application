import HeaderField from "../../components/header-field/header-field";
import BlogPost from "../../components/blog-post/blog-post";
import classes from "./home.module.css";
import { useState, useEffect } from "react";

export default function Home({ isLoggedIn, setIsLoggedIn }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/postList")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error("Ошибка при загрузке постов", error));
    }, []);

    return (
        <>
            <HeaderField isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <main className={classes.blog}>
                {posts.map((post) => {
                    return (
                        <BlogPost userName={post.userName} dateTime={post.dateTime} userAvatar={`/images/avatars/${post.userId - 1}.jpg`}>
                            {post.content}
                        </BlogPost>
                    );
                })}
            </main>
        </>
    );
}