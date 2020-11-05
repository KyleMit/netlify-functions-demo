const AWS = require("aws-sdk");
require('dotenv').config()

const TABLE_NAME = "NetlifyTodos";

// destructure env variables
const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } = process.env

// gets credentials from ~/.aws/config
AWS.config.update({
    credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
    },
    region: AWS_REGION,
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = {
    dynamoDb,
    TABLE_NAME
}