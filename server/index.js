const path = require('path');
const express = require('express');
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send', (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.user,
      subject: req.body.title,
      html: req.body.content
    };

    transporter.sendMail(mailOptions, function(err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later2'
        });
        console.log(err);
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us. We will get back to you shortly'
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later3'
    });
    console.log(error);
  }
});

app.listen(3030, () => {
  console.log('server start on port 3030');
});

// const path = require('path');
// const express = require('express');
// const app = express();

// const buildPath = path.join(__dirname, '..', 'build');
// app.use(express.json());
// app.use(express.static(buildPath));

// app.post('/send', (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });

// app.listen(3030, () => {
//   console.log('server start on port 3030');
// });