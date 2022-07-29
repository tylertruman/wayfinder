import { generateId } from "../Utils/generateId.js"


export class Reservation{
    constructor(data){
        this.id = data.id || generateId()
        this.type = data.type,
        this.name = data.name,
        this.confirmation = data.confirmation,
        this.address = data.address,
        this.date = data.date,
        this.cost = data.cost
        this.tripId = data.tripId
    }

    get Template(){
        return `
        <div class="col-1">
                <p>${this.type}</p>
              </div>
              <div class="col-2">
                <p>${this.name}</p>
              </div>
              <div class="col-3">
                <p>${this.confirmation}</p>
              </div>
              <div class="col-3">
                <p>${this.address}</p>
              </div>
              <div class="col-2">
                <p>${this.date}</p>
              </div>
              <div class="col-1">
                <p>${this.cost}</p>
                <i class="mdi mdi-delete-forever selectable px-2" onclick="app.reservationsController.deleteReservation('${this.id}')"></i>
              </div>`
    }
}