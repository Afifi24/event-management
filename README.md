<!-- Clone project -->

git clone https://github.com/Afifi24/event-management.git
cd project-name

<!-- Installation -->

npm install

<!-- Set up environment -->

# Clerk Authentication

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# MongoDB

MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.XXXXX.mongodb.net/...

# UploadThing

UPLOADTHING_SECRET=sk_live_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
UPLOADTHING_APP_ID=XXXXXXXXXXXX
UPLOADTHING_TOKEN=eyJhcGlLZXkiOi... (your full token)

# Stripe

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXX

# Server Config

NEXT_PUBLIC_SERVER_URL=http://localhost:3000
SIGNING_SECRET=whsec_XXXXXXXXXXXXXXXX

<!-- run the application -->

npm run dev

<!-- Screen Shoots -->

![Homepage](/public/assets/screenShoots/Home.jpg)
![createEvents](/public/assets/screenShoots/createEvents.jpg)
![eventDetails](/public/assets/screenShoots/eventDetails.jpg)
![profile](/public/assets/screenShoots/profile.jpg)
![stripe](/public/assets/screenShoots/stripe.jpg)
