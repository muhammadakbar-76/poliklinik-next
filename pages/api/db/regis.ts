// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../utils/prismaclient';
import * as bcrypt from 'bcrypt';

export type resData = {
  message: string | unknown
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<resData>
) 
{
  try {
    const {nik,name,phone,password} = req.body;
    const user = await client.user.findUnique({
      where: {
        nik
      }
    });
    if (user != null) {
      client.$disconnect;
      return res.status(409).json({message: "Nik Existed"});
    }
    await client.user.create({
      data: {
        nik,name,phone,password: bcrypt.hashSync(password,12)
      }
    })
    client.$disconnect;
    return res.status(200).json({message: "Register Completed"});
  } catch (error) {
    client.$disconnect;
    return res.status(500).json({message: error});
  }
    
}
