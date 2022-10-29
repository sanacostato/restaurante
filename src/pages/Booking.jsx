import Infobooking from "./Infobooking";
import { useState } from "react";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../firebase";
import { json } from "react-router-dom";
// import Swal from 'sweetalert2';

function Booking() {
  const [booking, setBooking] = useState({
    nombre: '',
    cuantas_personas: '',
    horario_dia: '',
    mensaje: '',
});
const handleInputChange = (event) => {
  setBooking({
      ...booking,
      [event.target.name]: event.target.value
  });
}
const guardarBooking = async (event) =>{
  event.preventDefault();
  console.log(booking);
  await addDoc(collection(db, "clientes"), booking );
  // Swal.fire(
  //   'Mensaje',
  //   'Formulado enviado a la base de datos',
  //   'success',
  // )
  };


  return (
    <>
    <code>{JSON.stringify(booking)}</code>
    <div className="w3-container w3-content  " style={{ marginTop: "2rem" }}>
      {/* <br></br> */}
      <p className=" mt-5">
        <strong>Reserve</strong> a table, ask for today's special or just send
        us a message:
      </p>
      <form onSubmit={guardarBooking} action="/action_page.php" target="_blank">
        <p>
          <input
            className="w3-input w3-padding-16 w3-border"
            type="text"
            placeholder="Name"
            required=""
            name="nombre"
            onChange={handleInputChange}

          />
        </p>
        <p>
          <input
            className="w3-input w3-padding-16 w3-border"
            type="number"
            placeholder="How many people"
            required=""
            name="cuantas_personas"
            onChange={handleInputChange}
          />
        </p>
        <p>
          <input
            className="w3-input w3-padding-16 w3-border"
            type="datetime-local"
            placeholder="Date and time"
            required=""
            name="horario_dia"
            defaultValue="2020-11-16T20:00"
            onChange={handleInputChange}
          />
        </p>
        <p>
          <input
            className="w3-input w3-padding-16 w3-border"
            type="text"
            placeholder="Message \ Special requirements"
            required=""
            name="mensaje"
            onChange={handleInputChange}
          />
        </p>
        <p>
          <button className="w3-button w3-black" type="submit">
            SEND MESSAGE
          </button>
        </p>
      </form>
      <Infobooking/>
    </div>

    </>
  );

};
export default Booking;