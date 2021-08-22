import {Button} from "react-bootstrap";
import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { BASE_URL } from "../../config";
import { IMenu } from "../../models/Menu";
interface Props {}

export default function Platos(props: Props): ReactElement {
  const [platos, setPlatos] = useState<IMenu[]>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url: string = `${BASE_URL}/api/platos`;
    fetch(url)
      .then(async (result) => {
        setPlatos(await result.json());
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="container pt-3">
      <div
        className="d-flex flex-row"
        style={{
          alignItems: "center",
        }}
      >
        <h1 style={{ width: "20%" }}>Platos</h1>
        <div style={{ width: "60%" }}></div>
        <Link
          className="btn btn-primary"
          style={{ width: "20%" }}
          to="/platos/create"
        >
          Nuevo
        </Link>
      </div>

      <table className="mt-3 table table-hover">
        <thead>
          <tr>
            <th>Plato</th>
            <th>Precio</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={4}>
                <Loading />
              </td>
            </tr>
          )}
          {platos?.map((item) => (
            <tr key={item._id}>
              <td style={{ alignItems: "center" }}>
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img src={item.imagen} alt={item.name} width="50" />
                  </div>
                  <div className=" ms-3">{item.name}</div>
                </div>
              </td>
              <td>${item.price}</td>
              <td>
                <div >
                  <Link className="btn btn-warning mx-2" to={`/platos/edit/${item._id}`}>Editar</Link>
                   
                   <Button variant="danger" className="mx-2" >Eliminar</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}