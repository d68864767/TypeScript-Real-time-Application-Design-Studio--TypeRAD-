import express from 'express';
import { userRoutes } from './routes/userRoutes';
import { chatService } from './services/chatService';

const app = express();

// Middleware for JSON parsing
app.use(express.json());

// User routes
app.use('/users', userRoutes);

// Chat service
app.use('/chat', chatService);

export default app;
