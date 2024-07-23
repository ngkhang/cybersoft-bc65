import nodemailer from 'nodemailer';

export const sendMail = (to, subject, text) => {

  let configMail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.DB_MAIL,
      pass: process.env.DB_PASSWORD_MAIL
    }
  })
  let infoMail = {
    from: process.env.DB_MAIL,
    to,
    subject,
    text
  }

  return configMail.sendMail(infoMail, error => error);
}
