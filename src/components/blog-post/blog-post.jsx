import classes from "./blog-post.module.css";

export default function BlogPost({userAvatar, userName, children}) {
    return (
        <div className={classes.container}>
            <div className={classes.userInfo}>
                <img className={classes.avatar} src={userAvatar} alt="avatar" />
                <p className={classes.name}>{userName}</p>
            </div>
            <div className={classes.text}>
                {children}
            </div>
        </div>
    );
}