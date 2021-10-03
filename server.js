const router = require( './routes' );
const express = require( 'express' );
const corsMiddleware = require( './cors' );

const app = express();

app.options( '*', corsMiddleware );
app.use( corsMiddleware );
app.use( logger );
app.use( router );
app.listen( 8080, () => console.log( 'server is running on port 8080' ) );

function logger ( req, res, next ) {
  console.log( 'log' );
  next();
}

function auth ( req, res, next ) {
  console.log( 'auth' );
  next();
}