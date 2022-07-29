import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";


class TripsService{

    createTrip(newTrip){
        console.log('creating trip in the TripsService.js', newTrip);
        ProxyState.trips = [...ProxyState.trips, new Trip(newTrip)]
        console.log(ProxyState.trips);
    }

    deleteTrip(id){
        console.log('delete trip in the TripsService', id);
        ProxyState.trips = ProxyState.trips.filter(t => t.id != id)
    }

    editTrip(id, newText){
        let trip = ProxyState.trips.find(t => t.id == id)
        trip.note = newText
        ProxyState.trips = ProxyState.trips
        console.log(ProxyState.trips);
    }
}

export const tripsService = new TripsService()