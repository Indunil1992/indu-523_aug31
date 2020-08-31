const AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    try {
        //cmnt
        let data = await sns.publish({
            Message: `commit from git`,
            TopicArn: "arn:aws:sns:us-east-1:318300609668:Notifications",
            MessageStructure: "String",
            MessageAttributes: {}
        }).promise();
//indu2 
    } catch (err) {
        // error handling goes here
    };
//indu77
    return { "message": "Successfully executed-2" };
};
