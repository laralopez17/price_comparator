import { IOption } from "../models/i-option";

export class DataResource {

  static options = [
    <IOption> {
      id: 1,
      text: "Cadena 3",
      url: "https://www.cadena3.com/"
    },
    <IOption> {
      id: 2,
      text: "Clarin",
      url: "https://clarin.com/"
    },
    <IOption> {
      id: 3,
      text: "Infobae",
      url: "https://www.infobae.com/"
    },
    <IOption> {
      id: 4,
      text: "La Nación",
      url: "https://lanacion.com.ar/"
    },
    <IOption> {
      id: 5,
      text: "La Voz del Interior",
      url: "https://www.lavoz.com.ar/"
    }
  ];

}
