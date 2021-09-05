import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'
import './App.css'

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="e6364f2e-3c2b-4e98-81f8-02694a2651fe"
            userName="Hardey"
            userSecret="nurudeen992"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;