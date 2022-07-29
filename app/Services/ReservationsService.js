import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";


class ReservationsService{
    deleteReservation(id){
        console.log('deleting', id);
        ProxyState.reservations = ProxyState.reservations.filter(reservation => reservation.id != id)
    }

    createReservation(newReservation){
        console.log('creating new reservation in service', newReservation);
        ProxyState.reservations = [...ProxyState.reservations, new Reservation(newReservation)]
        console.log(ProxyState.reservations);
    }
}

export const reservationsService = new ReservationsService()