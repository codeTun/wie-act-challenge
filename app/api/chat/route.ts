// pages/api/chat.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { findResponse } from '../../utils/chatLogic'; // Adjust the import path if necessary

type Data = {
  reply: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | { message: string }>) {
  console.log('Request received:', req.body);

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ message: 'Invalid input' });
  }

  try {
    const response = findResponse(message);
    console.log('Response:', response);
    res.status(200).json({ reply: response });
  } catch (error) {
    console.error('Error processing message:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}