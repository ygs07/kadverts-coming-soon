// import bodyParser from 'body-parser';

const bodyParser = require('body-parser');
const express = require('express')

const nodemailer = require("nodemailer");
// const cors = require('cors');


const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/subscribe', (req, res) => {
// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "550db5422d5d41", // generated ethereal user
        pass: "4cf2f0493acf14", // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"${req.body.name}" ${req.body.email}`, // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `<div style="padding:20px">
      <h1 style="text-align:center;">${req.body.name} has Subscribed👍!!!</h1>
      </div>
      `, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);

//here we are configuring dist to serve app files
// app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
// app.get(/.*/, function (req, res) {
// 	res.sendFile(path.join(__dirname, '/dist/index.html'))
// })


    res.send("Sent");
});


app.route('api/subscribe')
.post((req,res) => {
    console.log(req.body); 
    res.status(200);
    res.send(req.body);
});

const port = process.env.PORT || 3080
app.listen(port)
console.log(`app is listening on port: ${port}`)