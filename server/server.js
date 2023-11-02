
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

const app = express();
app.use(cors());
dotenv.config();

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch(err => {
    console.log("Error in connection", err);
  });

// Define the user schema and model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);


const customerInfoSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  city: String,
  state: String,
  zip: String,
  country: String,
  paymentMethod: String,
  cardNumber: String,
  cvv: String,
  expirationMonth: String,
  expirationYear: String,
});

const CustomerInfo = mongoose.model('CustomerInfo', customerInfoSchema);


app.use(bodyParser.json());

// API endpoint for user registration
app.post("/userS", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
    //  return res.status(400).json({ message: 'Username is already in use' });
      alert("username already in use");
    }

    // Hash the password before saving it to the database
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user and save it to the database
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();
   
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error in user registration' });
  }
});

app.post("/user",async(req,res)=>{
  try{
      const{username ,password}=req.body;
      const user=await User.findOne({username});
      if(!user){
        return res.status(401).json({message:'Invalid username or password'});
   
      }
      const passwordMatch=await bcrypt.compare(password,user.password);
      if(passwordMatch)
      {
        return res.status(200).json({message:'login successful'});
      }
      else{
        return res.status(401).json({message:'Invalid useranme or password'});
      }
  } catch(error){
    console.log(error);
    res.status(500).json({message:'Error in user login'});
  }
});


app.post('/checkout', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      city,
      state,
      zip,
      country,
      paymentMethod,
      cardNumber,
      cvv,
      expirationMonth,
      expirationYear,
    } = req.body;

    const customerInfo = new CustomerInfo({
      firstName,
      lastName,
      email,
      city,
      state,
      zip,
      country,
      paymentMethod,
      cardNumber,
      cvv,
      expirationMonth,
      expirationYear,
    });

    await customerInfo.save();

    res.status(201).json({ message: 'Customer information stored successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error in storing customer information' });
  }
});


const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email addresses are unique
  },
});

// Create a model for the newsletter subscriptions
const NewsletterSubscription = mongoose.model('Newsletter', newsletterSchema);

// ...

// Add a new endpoint for subscribing to the newsletter
app.post('/newsletter', async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email is already subscribed
    const existingSubscription = await NewsletterSubscription.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ message: 'Email is already subscribed' });
    }

    // Create a new subscription and save it to the database
    const newSubscription = new NewsletterSubscription({ email });
    await newSubscription.save();

    res.status(201).json({ message: 'Subscribed to the newsletter successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error in subscribing to the newsletter' });
  }
});


// Start the server
app.listen(5000, () => {
  console.log("Server is active on port 5000");
});
