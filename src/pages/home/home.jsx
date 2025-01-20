import HeaderField from "../../components/header-field/header-field";
import BlogPost from "../../components/blog-post/blog-post";
import classes from "./home.module.css";
import { useState, useEffect } from "react";
import AddPost from "../../components/add-post/add-post";

export default function Home({ userInfo, setUserInfo }) {
    const [posts, setPosts] = useState([]);
    const [addPostShown, setAddPostShown] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/api/postList")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error("Ошибка при загрузке постов", error));
    }, []);

    return (
        <>
            <HeaderField userInfo={userInfo} setUserInfo={setUserInfo} addPostShown={addPostShown} setAddPostShown={setAddPostShown} />
            <main className={classes.blog}>
                {addPostShown && <AddPost />}
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