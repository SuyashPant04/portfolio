import { useState } from "react"

import {
  MessageCircle,
  X,
  Send
} from "lucide-react"

import { sendMessage } from "../services/api"

function Chatbot() {

  const [open, setOpen] = useState(false)

  const [input, setInput] = useState("")

  const [loading, setLoading] = useState(false)

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! Ask me anything about Suyash's portfolio."
    }
  ])

  async function handleSend() {

    if (!input.trim()) return

    const userMessage = {
      sender: "user",
      text: input
    }

    setMessages(prev => [...prev, userMessage])

    const currentInput = input

    setInput("")

    setLoading(true)

    const botReply = await sendMessage(currentInput)

    setMessages(prev => [
      ...prev,
      {
        sender: "bot",
        text: botReply
      }
    ])

    setLoading(false)
  }

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 p-4 rounded-full shadow-lg z-50"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl flex flex-col z-50">

          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-700">

            <h2 className="font-semibold">
              AI Assistant
            </h2>

            <button onClick={() => setOpen(false)}>
              <X />
            </button>

          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-500 self-end"
                    : "bg-gray-800 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bg-gray-800 self-start p-3 rounded-lg text-sm">
                Typing...
              </div>
            )}

          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700 flex gap-2">

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend()
                }
              }}
              placeholder="Type a message..."
              className="flex-1 bg-gray-800 rounded-lg px-4 py-2 outline-none"
            />

            <button
              onClick={handleSend}
              className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg"
            >
              <Send size={18} />
            </button>

          </div>

        </div>
      )}
    </>
  )
}

export default Chatbot