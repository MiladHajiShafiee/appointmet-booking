# Appointment Booking

This is my Project for **appointment booking**, I used **[React js](https://reactjs.org/), [React Naitve](https://reactnative.dev/), [Node js](https://nodejs.org/en/), [Express js](http://expressjs.com/), [Mongoose js](https://mongoosejs.com/), and [MongoDB](https://www.mongodb.com/)**, it is a full-stack **MERN** Project.

![client](https://user-images.githubusercontent.com/54850998/108830168-4d991680-75de-11eb-8192-82107a6b2fdb.gif)
![mobile](https://user-images.githubusercontent.com/54850998/108830485-ac5e9000-75de-11eb-9a62-09de20d004d7.gif)

# How to use

1. Clone the repository
1. Node and npm should be installed globally in your computer.
1. nodemon should be installed globally in your computer if it is not in the cloned project root directory run:
    > npm install --save-dev nodemon
1. Sign Up in [MongoDB](https://www.mongodb.com/) and make your cluster and project and then database and connect that database to your project, you can also do it with help of [YOUTUBE](https://www.youtube.com/) videos.
1. Create a .env file in the cloned project root directory and add these:
    ```
     NODE_ENV=development
     PORT=5000
     MONGO_URI="YOUR MONGO URI"
     JWT_SECRET="YOUR JWT SECRET"
    ```
    replace your MONGO_URI and JWT_SECRET(for this use whatever you want like myawesomeproject)
1. In the mobile/source/api.js put your Wi-Fi IPv4 address instead of "YOUR URL".
1. In the cloned project root directory run:
    > npm install
1. Navigate to the web-app directory and run:
    > npm install
1. Navigate to the mobile directory and run:

    > npm install

    > npx react-native run-android

1. In the cloned project root directory run:

    > npm run data:import

    or

    > yarn data:import

1. After all start your server, client, and mobile apps with these commands in order:

    > npm run server

    > npm start

    > yarn start or npm start

1. Now you can log in to the web client application with one of the accounts in the backend/data/seller.js and also can log in to the mobile client application with one of the accounts in the backend/data/clients.js.

# License

This Repo is licensed under BSD 3-Clause permissive license. You can read it [here](./LICENSE).
