import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";



export class Trip{
    constructor(data){
        this.id = data.id || generateId()
        this.title = data.title,
        // this.date = new Date(data.date),
        this.note = data.note
    }

    get Template(){
        return `
        <h3 class="offset-1 col-3 text-center mt-3 mb-0 bg-trip rounded-top elevation-2">${this.title}</h3>
        <h5 class="col-2 mb-2 mt-3 "><span id="" class="selectable bg-danger rounded px-1" onclick="app.tripsController.deleteTrip('${this.id}')">X</span></h5>
        <div class="offset-1 col-10 bg-trip elevation-2 pt-2">
          <section class="row">
            <div class="col-1">
              <h5>Type</h5>
            </div>
            <div class="col-2">
              <h5>Name</h5>
            </div>
            <div class="col-3">
              <h5>Confirmation Number</h5>
            </div>
            <div class="col-3">
              <h5>Address</h5>
            </div>
            <div class="col-2">
              <h5>Date</h5>
            </div>
            <div class="col-1">
              <h5>Cost</h5>
            </div>
          </section>
          <div id="">
            <section id="" class="row bg-reservation rounded">

            ${this.Reservations}

            </section>
            <form class="" onsubmit="app.reservationsController.createReservation('${this.id}')">
            <section class="row">
              <div class="col-12">
                <hr>
              </div>
              <div class="col-1">
              
                  <select class="form-control" name="type" id="type" required>
                    <option value="🛩">🛩 Flight</option>
                    <option value="🏨">🏨 Lodging</option>
                    <option value="🎡">🎡 Attraction</option>
                    <option value="🚗">🚗 Rental Car</option>
                  </select>
              </div>
              <div class="col-2">
                <input class="form-control" type="text" name="name" id="name" required>
              </div>
              <div class="col-3">
                <input class="form-control" type="text" name="confirmation" , id="confirmation" required>
              </div>
              <div class="col-3">
                <input class="form-control" type="text" name="address" id="address" required>
              </div>
              <div class="col-2">
                <input class="form-control" type="date" name="date" id="date" required>
              </div>
              <div class="col-1">
                <input class="form-control" type="number" name="cost" id="cost" required>
              </div>
              <div class="col-12 text-end">
                <button class="btn btn-primary mt-2">Add Reservation</button>
              </div>
            </form>
              <div class="col-6">
                <label class="form-label fw-bold">Notes</label>
                <textarea rows="3" class="form-control" onblur="app.tripsController.editTrip('${this.id}')">${this.note}</textarea>
              </div>
              <div class="col-12 text-end my-2">Trip Total: <span class="text-success">$${this.TripTotal}</span></div>
            </section>

          
          </div>
        </div> `
    }

    get Reservations(){
        let template = ''
        let reservations = ProxyState.reservations.filter(reservation => reservation.tripId == this.id)
        reservations.forEach(reservation => template += reservation.Template)
        if(template){
            return template
        } else {
            return '<p> no reservations yet. </p>'
        }
    }

    get TripTotal(){
        let total = 0
        let reservations = ProxyState.reservations.filter(reservation => reservation.tripId == this.id)
        reservations.forEach(reservation => total += reservation.cost)
        return total
    }
}