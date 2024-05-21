const dotenv=require('dotenv');
const { Model } = require('sequelize');


dotenv.config();
module.exports={
    PORT:process.env.PORT
}