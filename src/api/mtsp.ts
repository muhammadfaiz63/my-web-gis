import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { headquarters, warehouses } = req.body;

  console.log("headquarters, warehouses",req.body)

  const coordinates = [headquarters, ...warehouses];
  
  // Define the payload for OpenRouteService
  
}
