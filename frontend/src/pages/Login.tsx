import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../lib/api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await api.post('/auth/login', { email, password })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      navigate('/dashboard')
    } catch {
      setError('Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-xl w-full max-w-md border border-gray-800">
        <h1 className="text-2xl font-bold text-white mb-2">Cognifyr</h1>
        <p className="text-gray-400 mb-6">Admin Dashboard</p>
        {error && <div className="bg-red-900 text-red-300 p-3 rounded mb-4 text-sm">{error}</div>}
        <div className="mb-4">
          <label className="text-gray-400 text-sm mb-1 block">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-teal-500"
            placeholder="admin@cognifyr.com"
          />
        </div>
        <div className="mb-6">
          <label className="text-gray-400 text-sm mb-1 block">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-teal-500"
            placeholder="••••••••"
          />
        </div>
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-teal-600 hover:bg-teal-500 text-white p-3 rounded-lg font-medium transition disabled:opacity-50"
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </div>
    </div>
  )
}