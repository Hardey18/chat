import React, { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObject = { 'Project-ID': "e6364f2e-3c2b-4e98-81f8-02694a2651fe", 'User-Name': username, 'User-Secret': password}
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
        } catch (error) {
            setError('Oops, invalid credentials!!')
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="paassword" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <div className="error">
                        {error}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
