import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';

const myEmail = process.env.NODEMAILER_MYEMAIL;
const myEmailPass = process.env.NODEMAILER_MYEMAILPASS;

const transporter = nodemailer.createTransport({
  name: process.env.NODEMAILER_MYEMAIL,
  service: "gmail",
  auth: {
    user: myEmail,
    pass: myEmailPass,
  },
  host: "smtp.gmail.com",
  port: 465,
  tls: {
    rejectUnauthorized: false
  }
})

export default async (req: NextApiRequest , res: NextApiResponse )  => {
  // o que vem da nossa requisição, do front-end
  const { email, name, message } = req.body;

  if ( !name || !email  || !message) {
    res.status(403).end("some request arrived empty");
    return;
  }

  const mailerRes = await mailer({email, name, message});
  res.send(mailerRes);
}

const mailer = ({ email, name, message }) => {
  // garante que não dê erro. 
  const from = name && email ? `${name} <${email}>` : `${name || email}`;

  const msg = {
    from,
    to: `${myEmail}`,
    subject: `Nova mensagem de contato - ${name} `,
    text: message,
    replyTo: from,
  }

  return transporter.sendMail(msg, (error, info) => {
      error ? error : info
    })
}
