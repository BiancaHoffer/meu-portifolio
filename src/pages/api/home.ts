// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { getPrismicClient } from '../../services/prismic'
import { asText } from "@prismicio/helpers"

interface ProjectData {
  result: {
    data: {
      title: string;
      subtitle: string;
    }
  }
}

export default async function handler(req: NextApiRequest , res: NextApiResponse ) {
  if (req.method === "GET") {
    const prismic = getPrismicClient({});

    const response = await prismic.getByType('home', {})
    
    const dataHome = response.results.map(i => {
      return {
        title: i.data.title,
        subtitle: asText(i.data.subtitle)
      }
    })

    //console.log(dataHome)
    //console.log(JSON.stringify(response, null, 2))

    res.status(200).json({ dataHome })
  } else {
    res.setHeader('Allow', 'GET')
    res.status(405).end('Method not allowed')
  }
}
