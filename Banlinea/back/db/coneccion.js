var MongoClient = require( 'mongodb' ).MongoClient;
var _db;
const conectionurl = 'mongodb://admin:admin123@ds235431.mlab.com:35431/banlineadb';

module.exports = 
{

  connectToServer: function( callback ) 
  {
    MongoClient.connect(conectionurl,(err,database) => 
        { 
            _db = database.db('banlineadb')
            
            return callback( err );
        });
  },

  getDb: function() 
  {
    return _db;
  }

};