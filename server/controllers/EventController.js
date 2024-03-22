const Event = require('../models/eventModel');

// Controller function to create a new event
const createEvent = async (req, res) => {
    try {
        const { title, description, location, startDate, endDate, organizer, attendees, image } = req.body;
        const newEvent = new Event({ title, description, location, startDate, endDate, organizer, attendees, image });
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to get all events
const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to get a single event by ID
const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to update an event by ID
const updateEventById = async (req, res) => {
    try {
        const { title, description, location, startDate, endDate, organizer, attendees, image } = req.body;
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id,
            { title, description, location, startDate, endDate, organizer, attendees, image },
            { new: true }
        );
        if (!updatedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to delete an event by ID
const deleteEventById = async (req, res) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.id);
        if (!deletedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createEvent, getEvents, getEventById, updateEventById, deleteEventById };
