import {Handler, CloudFrontRequestEvent, Context, CloudFrontResponse} from "aws-lambda";

const handler: Handler = async (event: CloudFrontRequestEvent, context: Context): Promise<CloudFrontResponse> {
    const request = event.Records[0].cf.request;
    const headers_host = request.headers.host[0].value;
    let redirect_url = 'https://en.wikipedia.org/wiki/HTTP_404';
    if (headers_host === 'haydenk.com' || headers_host === 'www.haydenk.com') {
        redirect_url = 'https://github.com/haydenk';
    }
    const response: CloudFrontResponse = {
        status: '302',
        statusDescription: 'Found',
        headers: {
            location: [{
                key: 'Location',
                value: redirect_url
            }]
        }
    };
    return response;
}
export { handler }