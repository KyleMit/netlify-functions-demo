const AWS = require("aws-sdk");
require('dotenv').config()

const TABLE_NAME = "NetlifyTodos";

// destructure env variables
const { MY_AWS_ACCESS_KEY_ID, MY_AWS_SECRET_ACCESS_KEY, MY_AWS_REGION } = process.env

// gets credentials from ~/.aws/config
AWS.config.update({
    credentials: {
        accessKeyId: MY_AWS_ACCESS_KEY_ID,
        secretAccessKey: MY_AWS_SECRET_ACCESS_KEY
    },
    region: MY_AWS_REGION,
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = {
    dynamoDb,
    TABLE_NAME
}