## About
An inventory management system using Node.js, Express, and MongoDB for the backend, and React.js with Vite, Shadcn UI, and Tailwind CSS for the frontend.

## Local Development

### Requirements

To run locally, you will need

- Node.js(v18 or above)

## Developer QuickStart

1. Fork this repo to your Github account

2. After forking the repository, clone it to your local device by using the following command:

```
https://github.com/<your-username>/Product-Inventory-Management-App.git
```
*note: There will be two seperate directory client and server.

3. Run `npm i` in each directory.

4. Set up `.env` file using the recommendations in the `.env.example` file.

 for eg:

- PORT=3000
- DATABASE_URL=

 You can create a cluster in MongoDB Atlas to obtain the database connection URL.


5. To start the server  
```
npm run dev
``` 
You can see the server and db connection success message in the console


6. Update the API_CONFIG in the client/src/api/config.ts
```
http://localhost:3000
```

7. To start the frontend
```
npm run dev
```

That's it! You're now ready to start doing the experiment.

Encounter any  [issues](https://github.com/sumanth-08/Product-Inventory-Management-App/issues).

