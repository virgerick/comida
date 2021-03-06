import { Button, Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { BASE_URL } from "../../config";
import { IMenu } from "../../models/Menu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Confirm from "../../components/Confirm";
interface Props {}

export default function Platos(props: Props): ReactElement {
  const [platos, setPlatos] = useState<IMenu[]>();
  const [loading, setLoading] = useState(true);
  const [idToDelete, setIdToDelete] = useState(null);
  const [confirmProps, setConfirmProps] = useState({
    visible: false,
    title: "Confirmar",
    message: "Segurio de eliminar esta plato?",
  });
  const url: string = `${BASE_URL}/api/platos`;
  useEffect(() => {
    fetch(url)
      .then(async (result) => {
        setPlatos(await result.json());
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  const hanfleEliminar = (id: any) => {
    setConfirmProps({ ...confirmProps, visible: true });
    setIdToDelete(id);
  };
  const onCloseConfirm = () => {
    setConfirmProps({ ...confirmProps, visible: false });
    setIdToDelete(null);
  };
  const onEliminarConfirm = () => {
    eliminar(idToDelete);
  };
  async function eliminar(id: any) {
    const result = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const platoFiltered = platos?.filter((x) => x._id !== id);
    setPlatos(platoFiltered);
  }

  return (
    <Container>
      <Confirm
        visible={confirmProps.visible}
        title={confirmProps.title}
        message={confirmProps.message}
        onConfirm={onEliminarConfirm}
        onClose={onCloseConfirm}
      />
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

      <table className=" table table-hover">
        <thead>
          <tr>
            <th>Plato</th>
            <th>Precio</th>
            <th></th>
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
          {platos?.map((item) => {
            return (
              <tr key={item._id}>
                <td>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img src={item.imagen} alt={item.name} width="50" />
                    </div>
                    <div className=" ms-3">{item.name}</div>
                  </div>
                </td>
                <td>${item.price}</td>
                <td className="text-end">
                  <p>
                    <OverlayTrigger
                      overlay={
                        <Tooltip>
                          <strong>Editar</strong>
                        </Tooltip>
                      }
                      children={
                        <Link
                          className="btn btn-warning"
                          to={`/platos/edit/${item._id}`}
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Editar"
                        >
                          <FaEdit />
                        </Link>
                      }
                    ></OverlayTrigger>
                    <OverlayTrigger
                      overlay={
                        <Tooltip>
                          <strong>Eliminar</strong>
                        </Tooltip>
                      }
                      children={
                        <Button variant="danger"
                        onClick={()=>hanfleEliminar(item._id)}
                         style={{ marginLeft: 10 }}>
                          <FaTrashAlt />
                        </Button>
                      }
                    ></OverlayTrigger>
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
