const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

// @desc    Get user tickets
// @route   GET /api/tickets
// @access  Private
const getTickets = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const tickets = await Ticket.find({ user: req.user.id });

  if (!tickets) {
    res.status(401);
    throw new Error("You do not have any tickets");
  }

  res.status(200).json(tickets);
});

// @desc    Get a single user ticket
// @route   GET /api/tickets/:id
// @access  Private
const getTicket = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(401);
    throw new Error("Ticket not found");
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  res.status(200).json(ticket);
});

// @desc    Create new ticket
// @route   POST /api/tickets
// @access  Private
const createTicket = asyncHandler(async (req, res) => {
  const { product, description } = req.body;

  if (!product || !description) {
    res.status(401);
    throw new Error("Please provide a product and description");
  }

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status: "New",
  });

  res.status(201).json(ticket);
});

// @desc    Delete existing ticket
// @route   DELETE /api/tickets/:id
// @access  Private
const deleteTicket = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(401);
    throw new Error("Ticket not found");
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  await Ticket.deleteOne({ _id: ticket._id });

  res.status(200).json({ message: "Ticket deleted successfully" });
});

// @desc    Patch existing ticket
// @route   PATCH /api/tickets/:id
// @access  Private
const patchTicket = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(401);
    throw new Error("Ticket not found");
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  const updatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedTicket);
});

module.exports = {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  patchTicket,
};
