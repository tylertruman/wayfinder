import { ProxyState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js";
import { tripsService } from "../Services/TripsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";




// function _draw(){
//     let template = ''
//     let trips = ProxyState.trips.sort((a, b) => a.date - b.date)
//     console.log(trips);
//     trips.forEach(t => template += t.Template)
//     console.log(template);
//     document.getElementById('trips').innerHTML = template
// }

function _draw(){
    let template = ''
    let trips = ProxyState.trips.sort((a, b) => a.date - b.date)
    let reservations = ProxyState.reservations.sort((a, b) => a.date - b.date)
    console.log(trips);
    trips.forEach(t => template += t.Template)
    console.log(template);
    document.getElementById('trips').innerHTML = template
}

export class TripsController {
    constructor(){
        console.log('trips controller loaded');
        ProxyState.on('trips', _draw)
        ProxyState.on('reservations', _draw)
        ProxyState.on('trips', saveState)
        ProxyState.on('reservations', saveState)
        loadState()
        _draw()
    }

    createTrip(){
        window.event.preventDefault()
        console.log('creating trip');
        let form = window.event.target
        let newTrip = {
            title: form.title.value,
            // date: form.date.value,
            note: form.note.value
        }
        console.log(newTrip);
        tripsService.createTrip(newTrip)
        Pop.toast('Trip Created', 'success')

    }

    async deleteTrip(id){
        if(await Pop.confirm()){
            console.log('deleting trip', id);
            tripsService.deleteTrip(id)
        }
    }

    editTrip(id){
        console.log('editing', id);
        console.log(window.event.target.value)
        let newText = window.event.target.value
        tripsService.editTrip(id, newText)
    }
}