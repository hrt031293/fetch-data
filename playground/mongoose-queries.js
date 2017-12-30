const {ObjectID}=require('mongodb');

const {mongoose}= require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todos');


var id ='5a464e7400dbe74939e1ab7511';

if(!ObjectID.isValid(id)){
    console.log('Id not valid');
}

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todos', todo);
// });


Todo.findById(id).then((todo)=>{
    if(!todo){
        return(console.log('Id not found'));
    }
    console.log('Todo  By ID', todo);
}).catch((e)=>console.log(e));