const AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    try {
        let data = await sns.publish({
            Message: `jkjkjkjk`,
            TopicArn: "arn:aws:sns:us-east-1:318300609668:Notifications",
            MessageStructure: "String",
            MessageAttributes: {}
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed-2" };
};