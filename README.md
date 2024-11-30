This is a simple project of webhook for google spreadsheets

To see the documentation you can run your app locally with the

```npm rum```

To see the documentation of routes you can go to the route

```localhost:3000/api-docs```

Also you need .env file in the root directory. Here is an example:

```angular2html
DATABASE_URL=postgresql://postgres:wp9GfjL6A3KSH8EK@jaggedly-tangible-sandgrouse.data-1.use1.tembo.io:5432/postgres?sslmode=verify-full&sslrootcert=ca.crt
GOOGLE_SHEETS_ID=1ZN7c2-_A-vsV8g3nx9YJVzLEZva-55zdFUE5aMtpWwc
WEBHOOK_URL=https://googlewebhook-1.onrender.com/webhook
PORT=3000
CACHE_TTL=300

MAILGUN_API_KEY=792f91f14dde26211c7b1539a8a02463-c02fd0ba-936a4d45
MAILGUN_DOMAIN=sandbox62654c4c118041d9bb8b2ad3887e32fd.mailgun.org
```

The project deployed now on the 
```angular2html
https://googlewebhook-1.onrender.com
```