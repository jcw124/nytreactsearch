//Packages 
const EXPRESS = require("express");
const BODYPARSER = require("body-parser");
const APP = express();
const ROUTES = require("./routes");
const MONGOOSE = require("mongoose");
const MONGODB = require('mongodb').MongoClient;
const PORT = process.env.PORT || 3001;


//Database
MONGOOSE.connect(
    process.env.MONGODB_URI || "mongodb://localhost/nyreact",
    {
      useMongoClient: true
    }
  );

//Body Parser
APP.use(BODYPARSER.urlencoded({ extended: false }));
APP.use(BODYPARSER.json());


//Logging
const LOGGER = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });

  //Routes
APP.use(ROUTES);


// Start the API server
APP.listen(PORT, () =>
  console.log(` Server now listening on PORT ${PORT}!`)
);
