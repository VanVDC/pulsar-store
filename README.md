# Pulsar's Shop server side

An online grocery store allowing users to order low carbs and keto products.

- [Client side](https://github.com/VanVDC/pulsar-store/tree/master/client)

#### Server with Node js

- Stripe allows individuals to make payments and store to receive payments over the internet. Stripe requires backend to hide the Stripe's key.
- Express backend fremework

#### Features:

- Use Stripe payment system

#### Instructions:

- Clone with HTTPS

```
git clone: https://github.com/VanVDC/pulsar-store.git
```

- `npm install`
- Create an `.env` files for server.
- Create a Stripe account and get the key for the server(server.js)
- add key in the env file here

```
STRIPE_SECRET_KEY=your-key-here
```

- `npm dev` to start the client and server together
- Visit `localhost:3000`

#### Built With:

- [Node](https://nodejs.org/en/)
- [Express](https://github.com/expressjs/express)
- [Stripe](https://github.com/stripe/stripe-node)

#### Demo:

- [Demo](https://pulsar-live.herokuapp.com/)
- Login

```
user: tom@gmail.com
pass: 123456
```
