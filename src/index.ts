import express from 'express';
import dotenv from 'dotenv';
import { userRoutes } from './routes/userRoutes';
import { chatService } from './services/chatService';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
