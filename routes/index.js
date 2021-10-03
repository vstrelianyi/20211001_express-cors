const express = require( 'express' );

const router = express.Router();

router.get( '/', auth, ( req, res  ) => {
  console.log( req.headers );
  res.json( 'GET / success' );
  // res.send( 'Home page' );
} );

function auth ( req, res, next ) {
  if ( req.query.admin ){
    next();
  }
  else {
    res.send( 'No auth' );
  }
}

router.delete( '/item', ( req, res ) => res.json( 'DELETE /imte success' ) );

module.exports = router;