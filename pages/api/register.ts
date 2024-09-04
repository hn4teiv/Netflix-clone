import bcrypt from 'bcrypt'
import { NextApiRequest,NextApiResponse } from 'next'
import  prismadb from '@/lib/prismadb'

export default async function handler(req:NextApiRequest,res:NextApiReponse) {
    if(req.method)!=== 'POST'{
        return res.status(405).end();
    }
}