// import bodyParser from 'body-parser';
// import { MongoClient } from 'mongodb';

const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const express = require('express')
const nodemailer = require("nodemailer");
const history = require('connect-history-api-fallback');
const serveStatic = require('serve-static')
const path = require('path')



const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(history());

app.post('/api/subscribe', async (req, res) => {

  const client = await mongodb.MongoClient.connect(
     //turnary operator to see if process.env.MONGO_USER & process.env.MONGO_PASS exist
     process.env.MONGO_USER && process.env.MONGO_PASS ? 
     `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.elcse.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`
     :'mongodb://localhost:27017',
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
  const db = client.db(process.env.MONGODB_NAME || 'kadverts-launch-subscribers');
  const subscribedEmail = await db.collection('emails').findOne({ email :`${req.body.email}`});
  console.log(subscribedEmail);

  if(subscribedEmail == null ){
  db.collection('emails').insertOne({ email :`${req.body.email}`});

  res.send({ msg : `Thanks For subscribing ${req.body.name}`});

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
    to: "yusufgshehu@gmail.com, inspireworks01@gmail.com", // list of receivers
    subject: "Kadverts Launch Subscription ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<div style="padding:20px">
    <h1 style="text-align:center;">${req.body.email} has Subscribed👍!!!</h1>
    </div>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  } else{
    res.send({ msg : `You've already subscribed ${req.body.name}🧐`});
  }

db.close();
});

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 3080
app.listen(port)
console.log(`app is listening on port: ${port}`)