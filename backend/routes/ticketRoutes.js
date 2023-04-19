const express = require("express");
const router = express.Router();
const {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  patchTicket,
} = require("../controllers/ticketController");

const { protect } = require("../middleware/authMiddleware");

const noteRouter = require("./noteRoutes");
router.use("/:ticketId/notes", noteRouter);

router.route("/").get(protect, getTickets).post(protect, createTicket);

router
  .route("/:id")
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .patch(protect, patchTicket);

module.exports = router;
