import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Reservation } from "./Models/Reservation.js"
import { Trip } from "./Models/Trip.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/Trip').Trip[]} */
  trips = [
    new Trip({
      id: '62e46199767f79e9d1aef8e5',
      title: 'DisneyWorld',
      // date: '08-20-2022',
      note: 'I can\'t wait',
  })
]

  /** @type {import('./Models/Reservation').Reservation[]} */
  reservations = [
    new Reservation({
      type: '🛩',
      name: 'IF 227',
      confirmation: 'KL782',
      address: '8602 Airport Dr, Gold,ID',
      date: '08-20-2022',
      cost: 600,
      tripId: '62e46199767f79e9d1aef8e5'
    })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
