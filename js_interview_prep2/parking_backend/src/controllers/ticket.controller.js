const express = require("express");

const router = express.Router();
const Ticket = require("../models/ticket.model");
const crudController = require("./crud.controller");
router.post("", crudController(Ticket).Post);
router.get("", crudController(Ticket).Get);
router.delete("/:id", crudController(Ticket).Delete);
router.patch("/:id", crudController(Ticket).Patch);

router.get("/:id", async (req, res) => {
    try {
        const ticket = await Ticket.findOne({ ticket_id: req.params.id })
            .populate({
                path: "spot_id",
                populate: [
                    { path: "floor_id" },
                    { path: "user_id" }
                ],
            }).lean().exec();
        
        return res.status(200).send(ticket)
        
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
});

module.exports = router;