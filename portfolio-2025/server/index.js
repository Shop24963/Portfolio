import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Allowed origins for CORS (add your frontend URLs)
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',') 
  : ['http://localhost:3000']

// Middleware
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true)
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}))
app.use(express.json())

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
})

const Contact = mongoose.model('Contact', contactSchema)

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running!' })
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body
    
    const contact = new Contact({ name, email, subject, message })
    await contact.save()
    
    res.status(200).json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Error saving contact:', error)
    res.status(500).json({ message: 'Error sending message' })
  }
})

app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
