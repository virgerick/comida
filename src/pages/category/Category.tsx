import React, { ReactElement, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../config";
import { ICategory } from "../../models/Category";
import Loading from "../../components/Loading";
import Confirm from "../../components/Confirm";

interface Props {}

export default function Category({}: Props): ReactElement {
  const [categories, setCategories] = useState<ICategory[]>();
  const [loading, setLoading] = useState(true);
  const [idToDelete, setIdToDelete] = useState(null);
  const [confirmProps, setConfirmProps] = useState({
    visible: false,
    title: "Confirmar",
    message: "Segurio de eliminar esta categoria?",
  });
  const url: string = `${BASE_URL}/api/category`;
  useEffect(() => {
    fetch(url)
      .then(async (result) => {
        setCategories(await result.json());
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  const hanfleEliminar = (id: any) => {
    setConfirmProps({...confirmProps,visible:true})
    setIdToDelete(id)

  };
  const onCloseConfirm=()=>{
    setConfirmProps({...confirmProps,visible:false})
    setIdToDelete(null)
  }
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
    const categorias = categories?.filter((x) => x._id !== id);
    setCategories(categorias);
  }
  return (
    <div className="container mt-3">
      <div
        className="d-flex flex-row"
        style={{
          alignItems: "center",
        }}
      >
        <Confirm
          visible={confirmProps.visible}
          title={confirmProps.title}
          message={confirmProps.message}
          onConfirm={onEliminarConfirm}
          onClose={onCloseConfirm}
        />
        <h1 style={{ width: "20%" }}>Categorias</h1>
        <div style={{ width: "60%" }}></div>
        <Link
          className="btn btn-primary"
          style={{ width: "20%" }}
          to="/category/create"
        >
          Nuevo
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table mt-2 table-hover">
          <thead>
            <tr >
              <th >Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={2}>
                  <Loading />
                </td>
              </tr>
            )}
            {categories?.map((x, i) => (
              <tr key={i}>
                <td >{x.name}</td>
                <td>
                    <Link
                      to={`/category/edit/${x._id}`}
                      className="mx-2 btn btn-warning"
                    >
                      Editar
                    </Link>
                    <Button variant="danger" onClick={() => hanfleEliminar(x._id)}>
                      Eliminar
                    </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
