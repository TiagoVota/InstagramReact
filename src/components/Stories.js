export default ({ users }) => {

    return(
        <div class="stories">
            <>{users.map(Story)}</>

            <div class="right-arrow">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}


const Story = (userName) => {
    return (
        <div class="story">
            <div class="story-img">
                <img src={`assets/img/${userName}.svg`} />
            </div>
            <div class="user">
                {userName}
            </div>
        </div>
    )
}