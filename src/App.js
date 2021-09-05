import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'
import './App.css'
import LoginForm from './components/LoginForm'

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="e6364f2e-3c2b-4e98-81f8-02694a2651fe"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;