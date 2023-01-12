const express = require("express");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

//farmer Schema
let Farmer = require('../models/farmer')

//login an auth
// This section will help you get a list of all the records.
router.route("/test").post(function (req, res) {
    let db_connect = dbo.getDb();
    console.log(req.body);
    let myobj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    };
    db_connect.collection("records").insertOne(myobj, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// router.post('/farmer', async (req, res) => {
//         const { email,firstname, password } = req.body;
//
//     let farmer;
//     try {
//         // check if the user already exists
//         farmer = await Farmer.findOne({email});
//         if (farmer) {
//             return res.status(400).json({msg: 'Email already exists'});
//         }
//         const salt = await bcrypt.genSalt(10);
//         // create new user
//         farmer = new Farmer({
//             email,
//             firstname,
//             password,
//             salt,
//         });
//
//         // hash user password
//         farmer.hashedPwd = await bcrypt.hash(password, salt);
//         await Farmer.save();
//
//         // return jwt
//         const payload = {
//             user: {
//                 id: farmer.id,
//             },
//         };
//
//         jwt.sign(
//             payload,
//             process.env.JWT_SECRET,
//             {expiresIn: '7 days'},
//             (err, token) => {
//                 if (err) throw err;
//                 res.json({token});
//             }
//         );
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
//     }
// );
// // This section will help you get a single record by id
// recordRoutes.route("/record/:id").get(function (req, res) {
//     let db_connect = dbo.getDb();
//     let myquery = { _id: ObjectId(req.params.id) };
//     db_connect
//         .collection("records")
//         .findOne(myquery, function (err, result) {
//             if (err) throw err;
//             res.json(result);
//         });
// });
//
// // This section will help you create a new record.
// recordRoutes.route("/record/add").post(function (req, response) {
//     let db_connect = dbo.getDb();
//     let myobj = {
//         name: req.body.name,
//         position: req.body.position,
//         level: req.body.level,
//     };
//     db_connect.collection("records").insertOne(myobj, function (err, res) {
//         if (err) throw err;
//         response.json(res);
//     });
// });
//
// // This section will help you update a record by id.
// recordRoutes.route("/update/:id").post(function (req, response) {
//     let db_connect = dbo.getDb();
//     let myquery = { _id: ObjectId(req.params.id) };
//     let newvalues = {
//         $set: {
//             name: req.body.name,
//             position: req.body.position,
//             level: req.body.level,
//         },
//     };
//     db_connect
//         .collection("records")
//         .updateOne(myquery, newvalues, function (err, res) {
//             if (err) throw err;
//             console.log("1 document updated");
//             response.json(res);
//         });
// });
//
// // This section will help you delete a record
// recordRoutes.route("/:id").delete((req, response) => {
//     let db_connect = dbo.getDb();
//     let myquery = { _id: ObjectId(req.params.id) };
//     db_connect.collection("records").deleteOne(myquery, function (err, obj) {
//         if (err) throw err;
//         console.log("1 document deleted");
//         response.json(obj);
//     });
// });

//map and info


//articles
module.exports = recordRoutes;