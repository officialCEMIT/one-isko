import React,{useState} from "react";
import Post from "./components/post/Post";

function App() {
    const [post,setPost] = useState( {
      user: "Ken Kaneki",
      username: "@OneEyedKing",
      userLink: "something",
      userPhoto: `https://i.ebayimg.com/images/g/t78AAOSw2sFdGt-s/s-l640.jpg`,
      isThereText: true,
      text: `I am the one eyed king. 👁`,
      isThereImg: true,
      imgSrc: `https://jikman.files.wordpress.com/2014/09/kaneki-ken-transformation.jpg`,
      comments: ["Comment 1", "Comment 2"],
      likeCount: 12,
      shareCount: 2,
  })
        return (
            <>
                <Post post={post} />
            </>
        );

}

export default App;
