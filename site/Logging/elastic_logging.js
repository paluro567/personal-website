const { Client } = require('@elastic/elasticsearch');

// Instantiate Elasticsearch client
const client = new Client({ node: 'https://paluro567.github.io/personal-website/' });

// Define the index where you want to send logs
const indexName = 'personal_website_logs';

// Define the function to send logs
async function sendLog(msid, organization) {
  try {
    // Prepare the log document
    const log = {
      msid,
      orgaanization,
      timestamp: new Date()
    };

    // Send the log document to the Elasticsearch index
    const { body } = await client.index({
      index: indexName,
      body: log
    });

    console.log('Log sent:', body);
  } catch (error) {
    console.error('Error sending log:', error);
  }
}


// access user ID using OIDC client
//fetch Code URL
const authorizationEndpoint = 'https://example.com/oauth/authorize';
const clientId = 'YOUR_CLIENT_ID';
const redirectUri = 'https://yourapp.com/callback';

// Construct the authorization URL
const authorizationUrl = `${authorizationEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`;

// Redirect the user to the authorization URL
window.location.href = authorizationUrl;

const redirectedUrl = window.location.href;

// Extract the code from the redirected URL
const url = new URL(redirectedUrl);
const code = url.searchParams.get('code');

const tokenEndpoint = 'https://example.com/oauth/token';
const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';
const redirectUri = 'https://yourapp.com/callback';
const authorizationCode = 'AUTHORIZATION_CODE';

// Prepare the data for the token request
const data = new URLSearchParams();
data.append('grant_type', 'authorization_code');
data.append('code', authorizationCode);
data.append('client_id', clientId);
data.append('client_secret', clientSecret);
data.append('redirect_uri', redirectUri);

// Make a POST request to the token endpoint
fetch(tokenEndpoint, {
  method: 'POST',
  body: data
})
  .then(response => response.json())
  .then(data => {
    // Handle the response and retrieve the JWT token
    const jwtToken = data.access_token;

    // Use the JWT token for identity-related operations
    console.log(jwtToken);
  })
  .catch(error => {
    // Handle any error that occurred during the request
    console.error(error);
  });

  // Decode the JWT token
const json_object = jwt_decode(jwtToken);


// window.location.href (access code from the produced url)
// Post request (using OAuth code) to Authorization endpoint => identity JWT token
// Decode JWT token, using jsonwebtoken library, to access user identity JSON (including organization) as json_object
msid=json_object['msid']
organization=json_object['organization']

// Example usage
sendLog( msid, organization);

