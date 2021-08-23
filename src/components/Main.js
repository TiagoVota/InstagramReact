import Posts from './Posts.js'
import Stories from './Stories.js'
import Sidebar from './Sidebar.js'


export default () => {
    const users = [
        '9gag',
        'meowed',
        'barked',
        'nathanwpylestrangeplanet',
        'wawawicomics',
        'respondeai',
        'filomoderna',
        'memeriagourmet'
    ]
    
    const postsData = [
        {
            userName: 'meowed',
            imageSource: 'gato-telefone',
            userThatLiked: 'respondeai',
            countLikes: '101.523'
        },
        {
            userName: 'barked',
            imageSource: 'dog',
            userThatLiked: 'adorable_animals',
            countLikes: '99.159'
        }
    ]
    
    const myUserData = {
        myUserName: 'catanacomics',
        myDisplayName: 'Catana'
    }
    
    const suggestionsData = [
        {
            userName: 'bad.vibes.memes',
            status: 'Segue você'
        },
        {
            userName: 'chibirdart',
            status: 'Segue você'
        },
        {
            userName: 'razoesparaacreditar',
            status: 'Novo no Instagram'
        },
        {
            userName: 'adorable_animals',
            status: 'Segue você'
        },
        {
            userName: 'smallcutecats',
            status: 'Segue você'
        }
    ]

    return (
        <main>
            <div class="feed">
                <Stories users={users} />

                <Posts postsData={postsData} /> 
            </div>

            <Sidebar myUserData={myUserData} suggestionsData={suggestionsData} />   
        </main>
    )
}