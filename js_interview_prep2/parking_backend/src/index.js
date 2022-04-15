const express = require("express")
const app = express();
const connect = require("./config/db")
const userController = require("./controllers/user.controller");
const floorController = require("./controllers/floor.controller");
const ticketController = require("./controllers/ticket.controller");
const spotController = require("./controllers/spot.controller");

app.use(express.json());
app.use("/user", userController)
app.use("/floor", floorController)
app.use("/ticket", ticketController)
app.use("/spot", spotController)

const port = `${process.env.PORT}` || 3000;

const start = async () => {
    try {
        await connect();
        app.listen(port, () => {
            console.log(`listening to port ${port}`);
});
    } catch (err) {
        console.log({ Error: err.message });
    }
}

start();