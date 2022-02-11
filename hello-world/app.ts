import axios from "axios";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { ServerResponse, LambdaResponse } from "./interfaces"

const url = 'http://checkip.amazonaws.com/';
let response: LambdaResponse;

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // const name: string = "Jimmy"
    // let val: number = 10
    // val = name

    const requestId = event.requestContext.requestId;
    try {
        const ret: ServerResponse = await axios(url);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world!!',
                location: ret.data.trim(),
                requestId: requestId,
                // invalid_typescript: val,
            })
        }
    } catch (err) {
        response = {
            'statusCode': 500,
            'body': JSON.stringify({
                message: err,
            })
        }
    }

    return response;
}
