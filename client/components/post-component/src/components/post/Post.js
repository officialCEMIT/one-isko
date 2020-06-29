import React,{useState} from "react";
import Options from "./Options";

export default function Post(props) {
    const { post } = props;

    const [optionDisplay, setOptionDisplay] = useState(false);

    return (
        <div className="post">
            <Options optionDisplay={optionDisplay} setOptionDisplay={setOptionDisplay}/>

            <img
                src={post.userPhoto}
                alt={post.name + "photo"}
                className="post__userImg"
            />
            <div className="post__content">
                <a href={post.userLink} className="post__userDetails">
                    <h3 className="post__username">{post.user}</h3>
                    <span className="post__user">{post.username}</span>
                </a>
                <button
                    className="post__dropdown"
                    onClick={() => setOptionDisplay(!optionDisplay)}
                >
                    <i className="fas fa-chevron-down"></i>
                </button>
                <p
                    className="post__text"
                    style={{ display: post.isThereText ? "block" : "none" }}
                >
                   {post.text}
                </p>
                <div
                    className="post__cover"
                    style={{ display: post.isThereImg ? "block" : "none" }}
                >
                    <img
                        src={post.imgSrc}
                        alt="post photo"
                        className="post__img"
                    />
                </div>
                <div className="post__actions">
                    <div className="post__action">
                        <button className="post__like">
                            <i className="fas fa-heart"></i> {post.comments.length}
                        </button>
                    </div>
                    <div className="post__action">
                        <button className="post__comment">
                            <i className="fas fa-comment"></i> {post.likeCount}
                        </button>
                    </div>
                    <div className="post__action">
                        <button className="post__share">
                            <i className="fas fa-share"></i> {post.shareCount}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
