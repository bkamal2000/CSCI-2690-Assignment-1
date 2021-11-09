new Mongo()
new Mongo(host);
new Mongo(host,port);

conn = new Mongo();
db = conn.getDB("myDatabase");

/* returns a collection from mongodb*/
db.userdetails.find();

/* Retrieved from: https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/ 
*/