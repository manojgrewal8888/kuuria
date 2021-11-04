const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const users = require("./routes/api/users");
// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
const port = 5000;
app.use(bodyParser.json());
/* app.use('/',express.static(path.join(__dirname, './build')));  */
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
    .connect(
        db, { useNewUrlParser: false }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
    // Passport middleware
    app.use(passport.initialize());
    // Passport config
    require("./config/passport")(passport);
    // Routes
    app.use("/api/users", users);
/* const port = process.env.PORT || 8080; // process.env.port is Heroku's port if you choose to deploy the app there
 */
/*   app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
});  */


app.listen(port, () => console.log(`Server up and running on port ${port} !`));

