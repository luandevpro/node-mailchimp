var express    = require("express");
   app         = express();
   port        = process.env.port || 3000;
   morgan      = require("morgan");
   async       = require("async");
bodyParser     = require("body-parser");
expressLayout  = require("express-ejs-layouts");
session        = require("express-session");
flash          = require("connect-flash");
mongoStore     = require("connect-mongo")(session);
mongoose       = require("mongoose");
//set statics 
app.use(express.static(__dirname + "/public"));

//set ejs
app.set("view engine" , "ejs");
app.use(expressLayout)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(morgan("dev"));

app.use(session({
   secret: "mailchip",
   resave: true,
   saveUinitialized: true,
   store: new mongoStore({
      mongooseConnection: mongoose.connection
   })
}));
app.use(flash());
// connect mongoose
mongoose.connect("mongodb://luandevpro:luandevpro12345@ds145412.mlab.com:45412/luandevpro",{ useNewUrlParser: true })

app.use(require("./app/routes"));

app.listen(port , () => {
   console.log(`localhost:${port}`)
})