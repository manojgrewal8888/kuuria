const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const users = require("./routes/api/users");
const event = require("./routes/api/events");
const vendor = require("./routes/api/vendor");
const nominee = require("./routes/api/nominee");
const admin = require("./routes/api/admin");
const front = require("./routes/api/front");
// Bodyparser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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
    app.use("/api/event", event);
    app.use("/api/vendor", vendor);
    app.use("/api/nominee", nominee);
    app.use("/api/admin", admin);
    app.use("/api/front", front);
    const port = 5000;
/* const port = process.env.PORT || 8080; // process.env.port is Heroku's port if you choose to deploy the app there
 */
/*   app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
});  */


app.listen(port, () => console.log(`Server up and running on port ${port} !`));

