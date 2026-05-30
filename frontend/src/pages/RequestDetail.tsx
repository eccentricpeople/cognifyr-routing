import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../lib/api'
import socket from '../lib/socket'

interface Classification {
  category: string
  priority: string
  summary: string
  confidence: number
  reason: string
  provider: string
}

interface Event {
  id: string
  eventType: string
  oldValue: string
  newValue: string
  createdAt: string
}

interface Note {
  id: string
  body: string
  createdAt: string
  author: { email: string }
}

interface RequestDetail {
  id: string
  message: string
  customerName: string
  customerEmail: string
  sourceChannel: string
  status: string
  createdAt: string
  classification: Classification
  events: Event[]
  notes: Note[]
}

export default function RequestDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [request, setRequest] = useState<RequestDetail | null>(null)
  const [newNote, setNewNote] = useState('')
  const [newStatus, setNewStatus] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchRequest = async () => {
    try {
      const res = await api.get(`/requests/${id}`)
      setRequest(res.data)
      setNewStatus(res.data.status)
    } catch {
      navigate('/dashboard')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRequest()
    socket.on('request:updated', (data: any) => {
      if (data.requestId === id) fetchRequest()
    })
    return () => { socket.off('request:updated') }
  }, [id])

  const updateStatus = async () => {
    await api.patch(`/requests/${id}/status`, { status: newStatus })
    fetchRequest()
  }

  const addNote = async () => {
    if (!newNote.trim()) return
    await api.post(`/requests/${id}/notes`, { body: newNote })
    setNewNote('')
    fetchRequest()
  }

  if (loading) return <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">Loading...</div>
  if (!request) return null

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="border-b border-gray-800 px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate('/dashboard')} className="text-gray-400 hover:text-white">← Back</button>
        <h1 className="text-lg font-semibold">Request Detail</h1>
      </div>

      <div className="p-6 max-w-4xl mx-auto grid grid-cols-1 gap-6">

        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <h2 className="text-sm text-gray-400 mb-3 uppercase tracking-wide">Customer Message</h2>
          <p className="text-white mb-4">{request.message}</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-gray-500">Name:</span> <span className="text-gray-300">{request.customerName || '—'}</span></div>
            <div><span className="text-gray-500">Email:</span> <span className="text-gray-300">{request.customerEmail || '—'}</span></div>
            <div><span className="text-gray-500">Channel:</span> <span className="text-gray-300">{request.sourceChannel}</span></div>
            <div><span className="text-gray-500">Created:</span> <span className="text-gray-300">{new Date(request.createdAt).toLocaleString()}</span></div>
          </div>
        </div>

        {request.classification && (
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-sm text-gray-400 mb-3 uppercase tracking-wide">AI Classification</h2>
            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div><span className="text-gray-500">Category:</span> <span className="text-teal-400 font-medium">{request.classification.category}</span></div>
              <div><span className="text-gray-500">Priority:</span> <span className="text-orange-400 font-medium">{request.classification.priority}</span></div>
              <div><span className="text-gray-500">Confidence:</span> <span className="text-gray-300">{(request.classification.confidence * 100).toFixed(0)}%</span></div>
              <div><span className="text-gray-500">Provider:</span> <span className="text-gray-300">{request.classification.provider}</span></div>
            </div>
            <div className="mb-2"><span className="text-gray-500 text-sm">Summary:</span> <p className="text-gray-300 text-sm mt-1">{request.classification.summary}</p></div>
            <div><span className="text-gray-500 text-sm">Reason:</span> <p className="text-gray-300 text-sm mt-1">{request.classification.reason}</p></div>
          </div>
        )}

        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <h2 className="text-sm text-gray-400 mb-3 uppercase tracking-wide">Update Status</h2>
          <div className="flex gap-3">
            <select value={newStatus} onChange={e => setNewStatus(e.target.value)}
              className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700 text-sm flex-1">
              <option value="NEW">New</option>
              <option value="QUEUED">Queued</option>
              <option value="CLASSIFIED">Classified</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="RESOLVED">Resolved</option>
              <option value="FAILED">Failed</option>
            </select>
            <button onClick={updateStatus} className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-sm">Update</button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <h2 className="text-sm text-gray-400 mb-3 uppercase tracking-wide">Internal Notes</h2>
          <div className="flex gap-3 mb-4">
            <input value={newNote} onChange={e => setNewNote(e.target.value)}
              placeholder="Add a note..."
              className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700 text-sm flex-1 focus:outline-none focus:border-teal-500"
            />
            <button onClick={addNote} className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-sm">Add</button>
          </div>
          {request.notes.length === 0 ? (
            <p className="text-gray-600 text-sm">No notes yet</p>
          ) : (
            request.notes.map(note => (
              <div key={note.id} className="border-b border-gray-800 py-3">
                <p className="text-gray-300 text-sm">{note.body}</p>
                <p className="text-gray-600 text-xs mt-1">{note.author.email} · {new Date(note.createdAt).toLocaleString()}</p>
              </div>
            ))
          )}
        </div>

        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <h2 className="text-sm text-gray-400 mb-3 uppercase tracking-wide">Event Timeline</h2>
          {request.events.map((event, i) => (
            <div key={event.id} className="flex gap-3 mb-3">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-teal-500 mt-1.5" />
                {i < request.events.length - 1 && <div className="w-0.5 bg-gray-700 flex-1 mt-1" />}
              </div>
              <div className="pb-3">
                <p className="text-sm text-white font-medium">{event.eventType}</p>
                {event.oldValue && <p className="text-xs text-gray-500">{event.oldValue} → {event.newValue}</p>}
                {!event.oldValue && event.newValue && <p className="text-xs text-gray-500">{event.newValue}</p>}
                <p className="text-xs text-gray-600 mt-0.5">{new Date(event.createdAt).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}