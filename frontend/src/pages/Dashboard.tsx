import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import api from '../lib/api'
import socket from '../lib/socket'

interface Request {
  id: string
  message: string
  customerName: string
  customerEmail: string
  status: string
  categorySnapshot: string
  prioritySnapshot: string
  createdAt: string
  sourceChannel: string
}

const priorityColor: Record<string, string> = {
  HIGH: 'bg-red-900 text-red-300',
  MEDIUM: 'bg-yellow-900 text-yellow-300',
  LOW: 'bg-green-900 text-green-300',
}

const statusColor: Record<string, string> = {
  NEW: 'bg-gray-700 text-gray-300',
  QUEUED: 'bg-blue-900 text-blue-300',
  CLASSIFYING: 'bg-purple-900 text-purple-300',
  CLASSIFIED: 'bg-teal-900 text-teal-300',
  IN_PROGRESS: 'bg-orange-900 text-orange-300',
  RESOLVED: 'bg-green-900 text-green-300',
  FAILED: 'bg-red-900 text-red-300',
}

export default function Dashboard() {
  const [requests, setRequests] = useState<Request[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [connected, setConnected] = useState(false)
  const [filters, setFilters] = useState({ status: '', priority: '', category: '' })
  const navigate = useNavigate()
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ message: '', customerName: '', customerEmail: '', sourceChannel: 'website' })
  const [submitting, setSubmitting] = useState(false)

  const fetchRequests = async () => {
    try {
      const params: any = {}
      if (filters.status) params.status = filters.status
      if (filters.priority) params.priority = filters.priority
      if (filters.category) params.category = filters.category
      const res = await api.get('/requests', { params })
      setRequests(res.data.requests)
      setTotal(res.data.total)
    } catch {
      localStorage.removeItem('token')
      navigate('/')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRequests()
  }, [filters])

  useEffect(() => {
    socket.on('connect', () => setConnected(true))
    socket.on('disconnect', () => setConnected(false))
    socket.on('request:created', () => fetchRequests())
    socket.on('request:updated', () => fetchRequests())
    return () => {
      socket.off('request:created')
      socket.off('request:updated')
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
const submitRequest = async () => {
    if (!form.message.trim()) return
    setSubmitting(true)
    try {
      await api.post('/requests', form)
      setForm({ message: '', customerName: '', customerEmail: '', sourceChannel: 'website' })
      setShowForm(false)
    } catch (err) {
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">Cognifyr</h1>
          <span className="text-gray-500">Admin</span>
          <div className={`w-2 h-2 rounded-full ${connected ? 'bg-teal-400' : 'bg-gray-600'}`} title={connected ? 'Live' : 'Disconnected'} />
          {connected && <span className="text-xs text-teal-400">Live</span>}
        </div>
        <button onClick={logout} className="text-gray-400 hover:text-white text-sm">Logout</button>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-lg font-semibold">Requests <span className="text-gray-500 text-sm font-normal">({total})</span></h2>
            <button onClick={() => setShowForm(true)} className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-sm">+ New Request</button>
          </div>
        </div>

        <div className="flex gap-3 mb-6">
          <select value={filters.status} onChange={e => setFilters(f => ({ ...f, status: e.target.value }))}
            className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700 text-sm">
            <option value="">All Status</option>
            <option value="NEW">New</option>
            <option value="QUEUED">Queued</option>
            <option value="CLASSIFYING">Classifying</option>
            <option value="CLASSIFIED">Classified</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="RESOLVED">Resolved</option>
            <option value="FAILED">Failed</option>
          </select>
          <select value={filters.priority} onChange={e => setFilters(f => ({ ...f, priority: e.target.value }))}
            className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700 text-sm">
            <option value="">All Priority</option>
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </select>
          <select value={filters.category} onChange={e => setFilters(f => ({ ...f, category: e.target.value }))}
            className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700 text-sm">
            <option value="">All Category</option>
            <option value="SALES">Sales</option>
            <option value="SUPPORT">Support</option>
            <option value="URGENT">Urgent</option>
            <option value="SPAM">Spam</option>
            <option value="OTHER">Other</option>
          </select>
        </div>

        {loading ? (
          <div className="text-gray-500 text-center py-20">Loading...</div>
        ) : requests.length === 0 ? (
          <div className="text-gray-500 text-center py-20">No requests found</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 border-b border-gray-800">
                  <th className="text-left py-3 px-4">Customer</th>
                  <th className="text-left py-3 px-4">Message</th>
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">Priority</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Created</th>
                </tr>
              </thead>
              <tbody>
                {requests.map(r => (
                  <tr key={r.id} className="border-b border-gray-800 hover:bg-gray-900 cursor-pointer"
                    onClick={() => navigate(`/requests/${r.id}`)}>
                    <td className="py-3 px-4">
                      <div className="font-medium">{r.customerName || '—'}</div>
                      <div className="text-gray-500 text-xs">{r.customerEmail || '—'}</div>
                    </td>
                    <td className="py-3 px-4 max-w-xs truncate text-gray-300">{r.message}</td>
                    <td className="py-3 px-4">
                      <span className="text-gray-400 text-xs">{r.categorySnapshot || '—'}</span>
                    </td>
                    <td className="py-3 px-4">
                      {r.prioritySnapshot ? (
                        <span className={`text-xs px-2 py-1 rounded-full ${priorityColor[r.prioritySnapshot] || ''}`}>
                          {r.prioritySnapshot}
                        </span>
                      ) : '—'}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${statusColor[r.status] || ''}`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-500 text-xs">
                      {new Date(r.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-xl p-6 w-full max-w-lg border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">New Customer Request</h2>
              <div className="mb-3">
                <label className="text-gray-400 text-sm mb-1 block">Message *</label>
                <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-teal-500 text-sm h-24"
                  placeholder="Customer message..." />
              </div>
              <div className="mb-3">
                <label className="text-gray-400 text-sm mb-1 block">Customer Name</label>
                <input value={form.customerName} onChange={e => setForm(f => ({ ...f, customerName: e.target.value }))}
                  className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-teal-500 text-sm"
                  placeholder="John Doe" />
              </div>
              <div className="mb-3">
                <label className="text-gray-400 text-sm mb-1 block">Customer Email</label>
                <input value={form.customerEmail} onChange={e => setForm(f => ({ ...f, customerEmail: e.target.value }))}
                  className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-teal-500 text-sm"
                  placeholder="john@example.com" />
              </div>
              <div className="mb-6">
                <label className="text-gray-400 text-sm mb-1 block">Source Channel</label>
                <select value={form.sourceChannel} onChange={e => setForm(f => ({ ...f, sourceChannel: e.target.value }))}
                  className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 text-sm">
                  <option value="website">Website</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="email">Email</option>
                  <option value="api">API</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowForm(false)} className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg text-sm">Cancel</button>
                <button onClick={submitRequest} disabled={submitting}
                  className="flex-1 bg-teal-600 hover:bg-teal-500 text-white py-2 rounded-lg text-sm disabled:opacity-50">
                  {submitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}