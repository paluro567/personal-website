const { Client } = require('@elastic/elasticsearch');

// Instantiate Elasticsearch client
const client = new Client({ node: 'http://localhost:9200' });

// Define the index where you want to send logs
const indexName = 'personal_website_logs';

// Define the function to send logs
async function sendLog(level, message) {
  try {
    // Prepare the log document
    const log = {
      level,
      message,
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
msid="Peter"

// Example usage
sendLog('msid', msid);

