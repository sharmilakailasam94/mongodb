// const mongodb=require('mongodb')
// const MongoClient= mongodb.MongoClient
// const ObjectId=mongodb.ObjectId
 const {MongoClient,ObjectId}=require('mongodb')
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName= 'task-manager'

const id= new ObjectId() // creating object id by ourselves and referenced in id varaiable, we can give anyname for id instead
console.log(id.getTimestamp())
console.log(id)
console.log(id.id.length) 
console.log(id.toHexString().length)
// string has double the size of binary size 
//console.log(id.id) 
// id has id property which stores binary value of a object id. 
// will be able to see in the terminal. and it also has length property which we indeed can see it in terminal.

MongoClient.connect(connectionURL,{ useNewUrlParser:true},(error,client)=>{
    if(error)
    {
        return console.log('Unable to connect to database!')
    }
     //console.log('connected correctly!') 
     const db= client.db(databaseName)  // referencing the database name
      db.collection('users').insertOne({
        _id:id, 
        name:'swapna',
         age:27,

     },(error,result)=>{
         if(error)
         {
             return console.log('Unable to insert User!')
         }
         console.log(result)
     })
 
/* db.collection('users').insertMany([{
    name:'kailasam',
    age:61
},
{
    name:'latha',
    age:51

}],(error,result)=>
{
if(error)
{
  return console.log('uanble to insert the document')  
}
console.log(result)
})*/
/* db.collection('tasks').insertMany([
    {
     description:'Cleaning the house',
     completed: true
    },
    {
      description:'Cooking',
      completed:false
    },
    {
      description:'Did Laundry',
        completed:false
   }],(error,result)=>{
       if(error)
       {
           return console.log('unable to insert the documents')
       }
   console.log(result.insertedIds)
   }) */

 })