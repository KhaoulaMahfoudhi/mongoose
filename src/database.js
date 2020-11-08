 let mongoose = require("mongoose");
 mongoose.connect("mongodb://localhost:27017/personsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true, });

 const personSchema = new mongoose.Schema({
  name: String,
   age: Number,
  favoriteFoods: [{type: String}]
});
let Person = mongoose.model("Person", personSchema);

// var createAndSavePerson = function(done){
//   let Fransis = new Person({
//     name: "fransis",
//     age : 37,
//     favoriteFoods: ["suchi", "strawberry"]
//   })
//   Fransis.save((error, data) => {
// if(error){
//   console.log(error)
// } else{
//   done(null, data)
// }
//   })
// }

// let arrayOfPeople = [
//   { name: 'Will Riker', age:30, favoriteFoods: ["Apple", "burrito"]},
//   { name: 'Geordi LaForge', age: 20, favoriteFoods: ["burrito", "Avocado"] },
//   { name: 'John Smith', age: 25, favoriteFoods: ["salad",  "Kiwi"] },
//   { name: 'lili dell', age : 37, favoriteFoods: ["burrito",  "Orange"]}
// ]
// var createManyPeople = function(arrayOfPeople, done){
//   Person.create(arrayOfPeople, (error, dataCreated) => {
// if(error){
//   console.log(error)
// } else{
//   done(null, dataCreated)
// }
//   })
// }

// Person.find({name: 'lili dell'},function(err, data){
//   if (err){
//     console.log(err)
//   }else{
//     mongoose.connection.close();
//     console.log(data)
//   }
// });

// var findPeopleByName = function(personName,done){
//   Person.find({name: personName}, (error, data) =>{
//     if(error){
//       console.log(error)
//     } else{
//       done(null, data)
//     }
//   } )
// }

// Person.findOne({favoriteFoods:{$all: ["Kiwi"]}},function(err, people){
//   if (err){
//     console.log(err)
//   }else{
//     mongoose.connection.close();
//       console.log(people.name)
//   }
// });

// var findOneByFood = function(food, done){
//   Person.findOne({favoriteFoods: {$all: [food]}}, (err, data) => {
// if(err){
//   console.log(err)
// }else{
//   done(null, data)
// }
//   })
// }

// var id = "5fa7a6b0e9e1be0480add2db";
// Person.findById(id,function(err, people){
//   if (err){
//     console.log(err)
//   }else{
//     mongoose.connection.close();
//       console.log(people.name)
//   }
// });

// var findPersonById = function(personId, done){
//   Person.findById(personId, (err, data)=>{
//     if(err){
//       console.log(err)
//     }else{
//       done(null, data)
//     }
//   })
// }

// Person.findOne({name: "fransis"}, (error, result) =>{
//   if(error){
//     console.log(error)
//   }else{
//     result.favoriteFoods.push("hamburger");
//     result.save((error, updateRecord) =>{
//       if(error){
//         console.log(error)
//       }else{
//         console.log(updateRecord)
//       }
//     })
//   }
// })

// var findEditThenSave = (personId, done)  => {
//   var foodToAdd = 'hamburger';
//   Person.findById({personId},(err, person) => {
//     if (err) return console.log(err);
//     person.favoriteFoods.push(foodToAdd);
//     person.save((err, data) => {
//      if (err) return console.log(err);
//      done(null , data);
//     });
//   });
// }

// Person.findOneAndUpdate({name: "Will Riker"} , {age : 20},{new : true} ,(err, data) =>{
// if (err){
//   console.log(err)
// } else{
//   console.log(data)
// }
// })

// var findOneAndUpdate = function(personName, done) {
//   var ageToSet = 20;
//   Person.findOneAndUpdate({name : personName}, {age: ageToSet}, {new : true}, (err, data) =>{
//     if (err){
//       console.log(err)
//     }else{
//       done(null, data)
//     }
//   })
// }

// Person.findOneAndRemove({name: "Geordi LaForge"}, (error, deleteRecord) => {
//   if (!error){
//     console.log(deleteRecord)
//   }
// })

// Person.findByIdAndRemove("5fa800bee94eab11841e9998", (error, deleteRecord)=>{
// if(!error){
//   console.log(deleteRecord)
// }
// })

//  var RemoveById = function(personId, done){
//    Person.findByIdAndRemove(personId, (error, deleteRecord )=>{
//      if(error){
//        console.log(error)
//      } else{
// done(null,  deleteRecord )
//      }
//    })
//  }

// Person.remove({age:{$gte : 20}}, (error, data) => {
//   if(!error){
//     console.log(data);
//   }
// })

// var removeManyPeople = function(done){
//   var nameToRemove = "Mary";
//   Person.remove({name : nameToRemove}, (error, JSONStatus) =>{
//     if(error){
//       console.log(error);
//     } else{
//       done(null, JSONStatus)
//     }
//   })
// }

// Person.find({favoriteFoods: {$all: ["burrito"]}})
// .sort({name : 'asc'})
// .limit(2)
// .select('-age')
// .exec((error, data) =>{
//   if (!error){
//     console.log(data)
//   }
// })

// var queryChain = function(done) {
//   var foodToSearch = "burrito";
//   Person.find({favoriteFoods: {$all: [foodToSearch]}})
//   sort({name : 'asc'})
//   .limit(2)
//   .select('-age')
//   .exec((error, data) => {
//     if(!error){
//       done(null, data)
//     }
//   })
// }


