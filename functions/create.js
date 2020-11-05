const { nanoid } = require("nanoid");
const { TABLE_NAME, dynamoDb } = require("../dyno-client")


exports.handler = async(event, context) => {
    // check for POST
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 400,
            body: "You are not using a http POST method for this endpoint.",
            headers: { Allow: "POST" },
        };
    }

    try {

        // parse form data
        const body = JSON.parse(event.body);

        // create item to insert
        const params = {
            TableName: TABLE_NAME,
            Item: {
                key: nanoid(7),
                text: body.text,
                createDate: new Date().toISOString(),
            },
        };

        let result = await dynamoDb.put(params).promise();

        // return success
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                data: result,
            }),
        };

    } catch (error) {

        // return error
        return {
            statusCode: error.statusCode || 500,
            body: JSON.stringify({
                message: error.message,
            }),
        };
    }


};