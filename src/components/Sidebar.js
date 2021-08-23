export default ({ myUserData, suggestionsData }) => {
    return (
        <div class="sidebar">
            <MyUser myUserData={myUserData} />

            <Suggestions suggestionsData={suggestionsData} />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais
                relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}


const MyUser = ({ myUserData }) => {
    const { myUserName, myDisplayName } = myUserData
    return (
        <div class="user">
            <img src={`assets/img/${myUserName}.svg`} />
            <div class="text">
                <strong>{myUserName}</strong>
                {myDisplayName}
            </div>
        </div>
    )
}


const Suggestions = ({ suggestionsData }) => {
    return (
        <div class="suggestions">
            <div class="title">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestionsData.map(Suggestion)}
        </div>
    )
}


const Suggestion = ({ userName, status }) => {
    return (
        <div class="suggestion">
            <div class="user">
                <img src={`assets/img/${userName}.svg`} />
                <div class="text">
                    <div class="name">{userName}</div>
                    <div class="status">{status}</div>
                </div>
            </div>

            <div class="follow">Seguir</div>
        </div>
    )
}
