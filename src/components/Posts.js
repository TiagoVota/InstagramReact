export default ({ postsData }) => {
    return (
        <div class="posts">
            {postsData.map(Post)}
        </div>
    )
}


const Post = (postData) => {
    return (
        <div class="post">
            <PostTop postData={postData}/>

            <PostContent postData={postData}/>

            <PostFooter postData={postData}/>
        </div>
    )
}


const PostTop = ({ postData }) => {
    const { userName } = postData
    return (
        <div class="top">
            <div class="user">
                <img src={`assets/img/${userName}.svg`} />
                {userName}
            </div>
            <div class="actions">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}


const PostContent = ({ postData }) => {
    const { imageSource } = postData
    return (
        <div class="post-content">
            <img src={`assets/img/${imageSource}.svg`} />
        </div>
    )
}


const PostFooter = ({ postData }) => {
    const { userThatLiked, countLikes } = postData

    return (
        <div class="footer">
            <div class="actions">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="likes">
                <img src={`assets/img/${userThatLiked}.svg`} />
                <div class="text">
                    Curtido por <strong>{userThatLiked}</strong> e <strong>outras {countLikes} pessoas</strong>
                </div>
            </div>
        </div>
    )
}