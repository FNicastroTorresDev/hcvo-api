<h1 align="center">
HCVO - api
</h1>

<div align="center">

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

</div>


## Development

To get a local copy, clone it using:
```
git clone https://github.com/FNicastroTorresDev/hcvo-api.git
```

### Install dependencies:

```
npm install 
```

### Available Scripts

In this project, you can run the following scripts:

| Script            | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| npm start         | Runs the app at port 8080                                             |

## Base Dependencies

- [bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme) to hash passwords.
- [cors](https://github.com/expressjs/cors#readme) for providing a Connect/Express middleware.
- [dotenv](https://github.com/motdotla/dotenv#readme) loads environment variables from a .env file into process.env.
- [express](https://expressjs.com/) framework for Node.js.
- [mongoose](https://mongoosejs.com/) mongodb object modeling for node.js.

## Folder Structure

```
hcvo-api
└── src
    ├── controllers
    ├── db
    ├── helpers
    ├── middlewares
    ├── model
    ├── routes
    ├── services
    ├── server.js
├── .env
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
├── README.md
```
