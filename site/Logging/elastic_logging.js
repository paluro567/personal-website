const { Client } = require('@elastic/elasticsearch');

// Instantiate Elasticsearch client
const client = new Client({ node: 'http://localhost:9200' });

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
// window.location.href (access code from the produced url)
// Post request (using OAuth code) to Authorization endpoint => identity JWT token
// Decode JWT token, using jsonwebtoken library, to access user identity JSON (including organization) as json_object
msid=json_object['msid']
organization=json_object['organization']

// Example usage
sendLog( msid, organization);

