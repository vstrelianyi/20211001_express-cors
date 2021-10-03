var cors = require( 'cors' );

const options = {
  origin: [ 'https://origin1.com', 'https://origin2.com', ],
  optionsSuccessStatus: 200,
};

module.exports = cors( options );

// function( req, res, next ){
// 	//...
// 	next();
// }