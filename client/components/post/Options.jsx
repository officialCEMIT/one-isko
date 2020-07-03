import React from "react";

export default function Options(props) {
    return (
        <div
            className={props.optionDisplay ? "options showOptions" : "options"}
            onMouseLeave={() => props.setOptionDisplay(false)}
        >
            <button className="options__btn">
                <i className="fas fa-pencil-alt"></i>Edit Post
            </button>
            <button className="options__btn">
                <i className="fas fa-trash"></i>Delete Post
            </button>
            <button className="options__btn">
                <i className="fas fa-file-archive"></i>Archive Post
            </button>
        </div>
    );
}
