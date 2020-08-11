const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.user, // your email address to send email from
    pass: process.env.pass // your gmail account password
  }
});

module.exports = transporter;