const router = require( './routes' );
const express = require( 'express' );

const app = express();

app.use( router );
app.listen( 8080, () => console.log( 'server is running on port 8080' ) );