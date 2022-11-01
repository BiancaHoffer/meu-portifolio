import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const myEmail = process.env.NODEMAILER_MYEMAIL;
const myEmailPass = process.env.NODEMAILER_MYEMAILPASS;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: myEmail,
    pass: myEmailPass,
  },
  tls: {
    rejectUnauthorized: false
  }
})

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

  return new Promise((resolve, reject) => {
    transporter.sendMail(msg, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
}

export default async (req: NextApiRequest , res: NextApiResponse )  => {
  // o que vem da nossa requisição, do front-end
  const { email, name, message } = req.body;

  if ( !name || !email  || !message) {
    res.status(403).end("Some request arrived empty.");
    return;
  }

  const mailerRes = await mailer({email, name, message});
  res.send(mailerRes);
}



/*
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const { OAuth2 } = google.auth;

const myEmail = process.env.NODEMAILER_MYEMAIL;
const myEmailPass = process.env.NODEMAILER_MYEMAILPASS;

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;

const OAuth2_client = new OAuth2(clientId, clientSecret);
OAuth2_client.setCredentials({ refresh_token: refreshToken });

const accessToken = OAuth2_client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: email,
    clientId,
    clientSecret,
    refreshToken,
    accessToken
  }
});

const mailer = ({ email, name, message }) => {
  const from = `${name} <${email}>`;
  const msg = {
    from,
    to: `${myEmail}`,
    subject: `Nova mensagem de contato - ${name}`,
    text: message,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(msg, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, name, message } = req.body;

  if ( !name || !email  || !message) {
    res.status(403).end("some request arrived empty");
    return;
  }

  const mailerRes = await mailer({ email, name, message });
  res.status(200).send(mailerRes);
};*/
