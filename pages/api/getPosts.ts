import { getDoc, postLinkConverter } from 'lib/helper';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = await getDoc("SoftsquirrelPosts", req.body.type, postLinkConverter);

    res.status(200).json({
        docPosts: data
    });
}