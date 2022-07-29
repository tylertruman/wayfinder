import { TripsController } from "./Controllers/TripsController.js";
import { ReservationsController } from "./Controllers/ReservationsController.js";

class App {
  // valuesController = new ValuesController();
  tripsController = new TripsController();

  reservationsController = new ReservationsController();

}


window["app"] = new App();
