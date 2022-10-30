import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { useEffect } from "react";

function Infobooking() {

    const [datos, setDatos] = useState([]);
    const getData = async () => {
        // const snapshot = await getDocs(collection(db, "empleados"));
        // console.log(snapshot.docs.map((doc) => doc.data()));
        // setDatos(snapshot.docs.map((doc) => doc.data()));

        onSnapshot(collection(db, "clientes"), (querySnapshot) => {
            setDatos(querySnapshot.docs.map(doc => {
                return { ...doc.data() }
            }));
        });
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>

            <h3 className="text-aline-center"> <strong className="text-aline-center">Booking Information</strong></h3>
            <table className ="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col"># of people</th>
                        <th scope="col">Date and Time</th>
                        <th scope="col">Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datos.map((clientes, index) => {
                            return (
                                <tr key={index}>
                                    <th >{index}</th>
                                    <td>{clientes.nombre}</td>
                                    <td>{clientes.cuantas_personas}</td>
                                    <td>{clientes.horario_dia}</td>
                                    <td>{clientes.mensaje}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Infobooking;