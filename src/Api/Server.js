const stripe = require('stripe')('sk_test_51OOcFoSFKdNmdMIDoGF05aF9q025Er7IOdKNBKeCAwFqm3RuKqzoMg5ki66dXki4cDBLTBvCtg18XAHcqoPPWJBy002JdfYvTE');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

const YOUR_DOMAIN = 'http://localhost:1234';

app.post('/create-checkout-session', async (req, res) => {
  console.log('Received POST request to /create-checkout-session');
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: cartItems.map(item => ({
        price: item.priceId, // Use the actual price ID from Stripe
        quantity: item.count,
      })),
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    res.redirect(303, session.url);
  } catch (error) {
    console.error('Error creating checkout session:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(1234, () => console.log('Running on port 1234'));
