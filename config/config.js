import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'
dotenv.config()


export const PORT = process.env.PORT || 5000
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/Backend"
export const JWT_SECRET = process.env.JWT_SECRET || "amanansari"




export const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 500, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})