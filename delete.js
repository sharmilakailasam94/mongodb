const {MongoClient,ObjectId}=require('mongodb')
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error)
    {
        return console.log('unable to connect to database!')
    }

    const db=client.db(databaseName)
/* db.collection('users').deleteMany({
age:31
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
 */

db.collection('tasks').deleteOne({
    description:'Cleaning the house'
}).then((result)=>
{
  console.log(result)  
}).catch((error)=>
{
console.log(error)
})

})

