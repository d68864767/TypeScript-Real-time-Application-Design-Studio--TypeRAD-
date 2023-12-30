import express from 'express';
import { Request, Response } from 'express';

const router = express.Router();

// Mock chat service
router.post('/', (req: Request, res: Response) => {
  const { message, user } = req.body;

  if (!message || !user) {
    return res.status(400).json({
      error: 'Invalid request. Please provide both message and user.'
    });
  }

  // In a real-world application, here you would implement the logic to send the message to the chat

  return res.status(200).json({
    message: 'Message sent successfully',
    data: {
      message,
      user
    }
  });
});

export { router as chatService };
