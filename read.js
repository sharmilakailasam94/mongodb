// const mongodb=require('mongodb')
// const MongoClient= mongodb.MongoClient
// const ObjectId=mongodb.ObjectId
const {MongoClient,ObjectId}=require('mongodb')
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName= 'task-manager'
MongoClient.connect(connectionURL,{ useNewUrlParser:true},(error,client)=>{
    if(error)
    {
        return console.log('Unable to connect to database!')
    }
     const db=client.db(databaseName)
     /* db.collection('users').findOne({
        _id: new ObjectId("61f3da6dab870921b34be710")  
        // we should use syntax--> new ObjectId("paste object if u want to fetch") as above line as example.
     },(error,user)=>{
         if(error)
         {
             return console.log('Unable to fetch the document')
         }
         console.log(user)

     })  
 */
/* db.collection('users').find({
    age:27}).toArray((error,users)=>
{
    if(error)
    {
        return console.log('unable to the documents')
    }
    console.log(users)
})

db.collection('users').find({
    age:27}).count((error,count)=>
{
    if(error)
    {
        return console.log('unable to the documents')
    }
    console.log(count)
}) */

db.collection('tasks').findOne({_id:new ObjectId("61f3a84ab2f03578f93a6bd6")},(error,task)=>
{
    console.log(task)
})

 db.collection('tasks').find({completed:false}).toArray((error,tasks)=>
{
console.log(tasks)
}) 

 })