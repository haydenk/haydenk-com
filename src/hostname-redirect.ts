import {Handler, CloudFrontRequestEvent, Context, CloudFrontResponse, CloudFrontRequest} from "aws-lambda";

// @ts-ignore
const handler: Handler = async (event: CloudFrontRequestEvent, context: Context): Promise<CloudFrontResponse|CloudFrontRequest> => {
    const request = event.Records[0].cf.request;
    const headers_host = request.headers.host[0].value;
    const primary_host_url = 'www.haydenk.com';

    if (headers_host === primary_host_url) {
        return request;
    }

    /*
     * Generate HTTP redirect response with 302 status code and Location header.
     */
    let redirectUrl = `https://${primary_host_url}${request.uri}`;
    if (request.querystring) {
        redirectUrl += `?${request.querystring}`
    }
    const response: CloudFrontResponse = {
        status: '302',
        statusDescription: 'Found',
        headers: {
            location: [{
                key: 'Location',
                value: redirectUrl
            }]
        }
    };

    return response;
}
export { handler }