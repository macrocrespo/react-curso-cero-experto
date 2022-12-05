const { response } = require("express");
const Event = require("../models/Event");

const getEvents = async( req, res = response ) => {

    try {
        const events = await Event.find()
                                    .populate('user', 'name email');
        return res.json({
            ok: true,
            msg: 'GetEvents',
            events
        });
    } catch (error) {
        console.log( error );
        return res.status(500).json({
            ok: false,
            msg: 'Contact the administrator.'
        });
    }
}

const createEvent = async( req, res = response ) => {
    try {
        const event = new Event( req.body );
        event.user = req.uid;
        const eventSaved = await event.save();

        return res.json({
            ok: true,
            msg: 'createEvent',
            event: eventSaved
        });
    } catch (error) {
        console.log( error );
        return res.status(500).json({
            ok: false,
            msg: 'Contact the administrator.'
        });
    }
}

const updateEvent = async( req, res = response ) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try {

        const event = await Event.findById( eventId );

        if ( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'No event found.'
            });
        }

        if ( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'Not allowed to edit this event.'
            });
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const eventUpdated = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );
        
        return res.json({
            ok: true,
            msg: 'updateEvent',
            eventUpdated
        });
    } catch (error) {
        console.log( error );
        return res.status(500).json({
            ok: false,
            msg: 'Contact the administrator.'
        });
    }
}

const deleteEvent = async( req, res = response ) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try {

        const event = await Event.findById( eventId );

        if ( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'No event found.'
            });
        }

        if ( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'Not allowed to delete this event.'
            });
        }

        const eventDeleted = await Event.findByIdAndDelete( eventId );
        
        return res.json({
            ok: true,
            msg: 'deleteEvent',
            eventDeleted
        });
    } catch (error) {
        console.log( error );
        return res.status(500).json({
            ok: false,
            msg: 'Contact the administrator.'
        });
    }
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}