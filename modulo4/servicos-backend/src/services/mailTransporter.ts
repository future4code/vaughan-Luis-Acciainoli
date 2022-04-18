import nodemailer from "nodemailer";
import dotenv from "dotenv"
import path  from "path"
dotenv.config()

export const transporter = nodemailer.createTransport({
    host: "smtp.kinghost.net",
    port: 587,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    }
  });

export const handlebarsOptions = {
    viewEngine: { 
        extName: ".handlebars",
        partialsDir: path.resolve('./view'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./view'),
    extName: ".handlebars"
}


