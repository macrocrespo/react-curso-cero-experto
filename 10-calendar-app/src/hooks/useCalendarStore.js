import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import calendarApi from '../api/caledarApi';
import { convertEventsToDateEvents } from '../helpers';
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store';


export const useCalendarStore = () => {
  
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );
    const { user } = useSelector( state => state.auth );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }

    const startSavingEvent = async( calendarEvent ) => {
        try {

            if ( calendarEvent.id ) {
                // Update
                await calendarApi.put( `/events/${ calendarEvent.id }`, calendarEvent );
                dispatch( onUpdateEvent({ ...calendarEvent, user }) );
                return;
            } else {
                // Create
                const { data } = await calendarApi.post('/events', calendarEvent);
                dispatch( onAddNewEvent({ ...calendarEvent, id: data.event.id, user }) );
            }

        } catch (error) {
            console.log(error);
            Swal.fire('Error on saving event.', error.response.data?.msg, 'error');
        }
    }

    const startDeletingEvent = async() => {
        try {
            await calendarApi.delete( `/events/${ activeEvent.id }` );
            dispatch( onDeleteEvent() );
        } catch (error) {
            console.log(error);
            Swal.fire('Error on deleting event.', error.response.data?.msg, 'error');
        }
    }

    const startLoadingEvents = async() => {
        try {

            const { data } = await calendarApi.get('/events');
            const events = convertEventsToDateEvents( data.events );
            dispatch( onLoadEvents( events ) );

        } catch (error) {
            console.log('Error loading events.');
            console.log( error );
        }
    }


    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //* Métodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
        startLoadingEvents,
    }
}
