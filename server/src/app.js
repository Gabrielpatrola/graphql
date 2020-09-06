import 'dotenv/config'
import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'

import schema from './schema'

const app = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV === 'development',
})

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export default app
