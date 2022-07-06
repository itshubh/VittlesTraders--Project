require('../models/database');
const Category = require('../models/Category');
const dryFruits = require('../models/dryFruits');


exports.homepage = async(req, res)=>{
  try{
    const limitnumber = 5;
    const categories = await Category.find({}).limit(limitnumber);
    const fresh = await dryFruits.find({}).sort({_id:-1}).limit(limitnumber);
    const fruit = {fresh};
    res.render('index' , {title:'Vittles-Traders',categories,fruit});
  }catch(error){
    res.satus(500).send({message : error.message || "error occured"}); 
  }
}

exports.exploreCategories = async(req, res)=>{
  try{
    const limitnumber = 20;
    const categories = await Category.find({}).limit(limitnumber);
    res.render('categories' , {title:'Vittles-Traders -categories',categories});
  }catch(error){
    res.satus(500).send({message : error.message || "error occured"}); 
  }
}

exports.freshCollection = async(req, res)=>{
  try{
    let fruitsId = req.params.id;
    const fruits = await dryFruits.findById(fruitsId)
    res.render('fruits' , {title:'Vittles-Traders -dryfruits',fruits});
  }catch(error){
    res.satus(500).send({message : error.message || "error occured"}); 
  }
}


exports.exploreCategoriesById = async(req, res)=>{
  try{
    let categoryId = req.params.id;
    const limitnumber = 20;
    const categoryById = await dryFruits.find({'category ': categoryId}).limit(limitnumber);
    res.render('categories' , {title:'Vittles-Traders -categories',categoryById});
  }catch(error){
    res.satus(500).send({message : error.message || "error occured"}); 
  }
}


exports.searchFruits = async(req, res)=>{
    
     try{
        let searchTerm = req.body.searchTerm;
        let fruits = await dryFruits.find({ $text: {$search : searchTerm , $diacriticSensitive :true}});
        res.render('search' , {title:'Vittles-Traders -search',fruits});
     }catch(error){
      res.satus(500).send({message : error.message || "error occured"}); 
     }
} 

exports.explorefresh = async(req, res)=>{
  try{
    const limitnumber = 20;
    const fruits = await dryFruits.find({}).sort({_id:-1}).limit(limitnumber);
    res.render('exploreFresh' , {title:'Vittles-Traders -categories',fruits});
  }catch(error){
    res.satus(500).send({message : error.message || "error occured"}); 
  }
}



exports.exploreRandom = async(req, res)=>{
  try{
    let count = await dryFruits.find().countDocuments();
    let random = Math.floor(Math.random() * count);
    const fruits = await dryFruits.findOne().skip(random).exec();
    res.render('random' , {title:'Vittles-Traders -categories',fruits});
  }catch(error){
    res.satus(500).send({message : error.message || "error occured"}); 
  }
}


exports.requestform = async(req, res)=>{
    const infoErrorsObj = req.flash('infoErrors');
    const infoSubmitObj = req.flash('infoSubmit');
    res.render('requestForm' , {title:'Vittles-Traders -categories', infoErrorsObj, infoSubmitObj});
 
}
exports.requestformOnPost = async(req, res)=>{
  try{
    // const newRequest = new requests(
    //   {
    //     email : 'yadavshubham@gmail.com',
    //     name : 'Shubham yadav',
    //     description : 'i want to buy dates',
    //     category : 'dates'
    //   });
    //   await newRequest.save();


    req.flash('infoSubmit','We got your request');
    res.redirect('requestForm' );
  }
  catch(error){

  req.flash('infoErrors',error);
  res.redirect('requestForm' );
  }
}

exports.contact= async(req, res)=>{
  res.render('contact' , {title:'Vittles-Traders -contact'});

}


// async function insertDymmyCategoryData(){

//     try{
//      await Category.insertMany(
//         [
//             {
//                 "name" : "Dates",
//                 "image" :"image.jpg"
//             },
//             {
//                 "name" : "alomnds",
//                 "image" :"image.jpg"
//             },
//             {
//                 "name" : "makhana",
//                 "image" :"image.jpg"
//             },
//             {
//                 "name" : "Cashew",
//                 "image" :"image.jpg"
//             },
//             {
//                 "name" : "Pistachio",
//                 "image" :"image.jpg"
//             },
//             {
//                 "name" : "kesar",
//                 "image" :"image.jpg"
//             },
//         ]
//      );
//     } catch (error)
//     {
//       console.log('err' , +error)

//     }
// }

 

// async function insertDymmyCategoryData(){
//   try {
//     await Category.insertMany([
      
//                   {
//                 "name" : "Dates",
//                 "image" :"dates.jpeg"
//             },
//             {
//                 "name" : "Almonds",
//                 "image" :"almonds.jpg"
//             },
//             {
//                 "name" : "Makhana",
//                 "image" :"makhana.jpeg"
//             },
//             {
//                 "name" : "Cashew",
//                 "image" :"cashew.jpeg"
//             },
//             {
//                 "name" : "Pista",
//                 "image" :"pista.jpeg"
//             }
//     ]);
//   } catch (error) {
//     console.log('err', + error)
//   }
// }

// insertDymmyCategoryData();

// async function insertDummyRequestData(){
//   try {
//     await request.insertMany([
      
//            {
//             "name" : "Shubham Yadav",
//             "description" :`50 kg dates`,
//             "email" : "shubham@gmail.com",
//             "quantity": ["50"],
//             "category" :"dates"
//             },
//             {
//             "name" : "Shubham Yadav",
//             "description" :`50 kg dates`,
//             "email" : "shubham@gmail.com",
//             "quantity": ["50"],
//             "category" :"dates"
//           }
            
//     ]);
//   } catch (error) {
//     console.log('err', + error)
//   }
// }

// insertDummyRequestData();


// async function insertDummyRequestData(){
//   try {
//     await request.insertMany(
//     //   [
//     //   { 
//     //     "name": "shubham yadav",
//     //     "description": `want to buy some dates`,
//     //     "email": "shubham@gmail.com",
//     //     "quantity": [
//     //      "10","40",
//     //     ],
//     //     "category": "dates"
//     //   },
//     //   { 
//     //     "name": "shubham",
//     //     "description": `want to buy some dates`,
//     //     "email": "shubham@gmail.com",
//     //     "quantity": [
//     //      "10","40",
//     //     ],
//     //     "category": "dates", 
//     //   },
//     // ]
//     );
//   } catch (error) {
//     console.log('err', + error)
//   }
// }

// insertDummyRequestData();

// async function insertDummydryFruitsData(){
//   try {
//      dryFruits.insertMany([
//       {
//         "name": "Gurbandi Almond",
//         "description": `Gurbandi almonds are also rich in nutrients like omega 3, vitamin E and phytochemicals,
//         gives abundant energy and are rich in antioxidant.The antioxidant-rich Gurbandi almonds serve as a nutritious 
//         snack and are also used as the prime ingredient in many oils, tablets and cosmetics.`,
//         "nutrition" :[
//           "calories : 82",
//           "carbs : 3g",
//           "fat : 7g",
//           "protein :3g"
//         ],
//         "category" : "almonds",
//         "image" : "gurbandi.jpeg"
//       },
//       {
//         "name": "Medjool Dates",
//         "description": `Medjool dates are just one of hundreds of varieties of dates, but they are the only one known as “the fruit of kings.” With a sweet,
//          caramel taste and chewy texture, Medjool dates were originally eaten by royalty and thought to fend off fatigue.Medjool dates are now grown in warm climates globally,
//           and research shows these ancient energy-boosting claims may be true. They are also high in vitamins and nutrients that can contribute to other health benefits.   `,
//         "nutrition" :[
//           "calories : 110",
//           "sugar : 27g",
//           "fat : 0g",
//           "protein :1g"
//         ],
//         "category" : "dates",
//         "image" : "medjool.jpeg"
//       },
//       {
//         "name": "organic makhana",
//         "description": `Makhana is seen as an Elixir of Life. Cultivated in wetlands with tropical Areas, Makhana or Fox nut, 
//         production of Makhana has seen a rise in number of countries namely Japan, China, Nepal, South Korea etc. 
//         Also called as Lotus seeds, they are consumed by all age groups of people globally. Being health Conscious, 
//         people are looking for options that are healthy yet tasty
//         Replacing the unhealthy fried snacks like Potato Chips, fries, popcorns etc., Makhana presents as a much better snack option.
//         Organic Makhana has a higher glycemic index as compared to an Inorganic Makhana`,
//         "nutrition" :[
//           "calories : 82",
//           "carbs : 3g",
//           "fat : 7g",
//           "protein :3g"
//         ],
//         "category" : "makhana",
//         "image" : "orgaincmakhana.jpeg"
//       },
//       {
//         "name": "Jumbo cashew",
//         "description": `Cashews, like all nuts, are a high-fat food, but they provide both poly- and monounsaturated fats—a healthy 
//         form of fat that helps boost heart health and reduce cholesterol levels when consumed in moderation.Cashews are consumed as a snack on their own, 
//         are commonly used in nut mixes, and can also be processed into cashew butter, cashew milk, and other products. Cashews can be a healthy addition to your diet when consumed in moderation`,
//         "nutrition" :[
//           "calories : 128",
//           "carbs : 8.6g",
//           "fat : 12g",
//           "protein :5.2g"
//         ],
//         "category" : "cashew",
//         "image" : "cashewjumbo.jpeg"
//       },
//       {
//         "name": "badami pista",
//         "description": `They are commonly green in colour, although the kernels can range from yellow to various shades of green. They are usually around an inch long and half an inch in diameter.
//          To get to this greatness, you will have to crack open the tough outer shell, but once you will do that you will have a tasty nut that has a slightly sweet flavour`,
//         "nutrition" :[
//           "calories : 160",
//           "carbs : 8g",
//           "fat : 12g",
//           "protein :6g"
//         ],
//         "category" : "pista",
//         "image" : "pistabadami.jpeg"
//       }
//     ]);
//   } catch (error) {
//     console.log('err', + error)
//   }
// }

// insertDummydryFruitsData();