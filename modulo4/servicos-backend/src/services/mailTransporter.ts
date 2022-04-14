import nodemailer from "nodemailer";
import dotenv from "dotenv"
import path  from "path"
dotenv.config()

export const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0cd0913e1a0daa",
      pass: "e83762fd1863d8"
    }
  });

export const handlebarsOptions = {
    viewEngine: { 
        extName: ".handlebars",
        partialsDir: path.resolve('./views'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views'),
    extName: ".handlebars"
}