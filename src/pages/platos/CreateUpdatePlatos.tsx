import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, Button, Row, Col, Figure } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import { useHistory, useParams } from "react-router";
import { BASE_URL } from "../../config";
import { useForm } from "../../hooks/useForm";
import { ICategory } from "../../models/Category";

interface IParams {
  id?: string;
}
interface IForm {
  _id?: string;
  category?: string;
  imagen?: string;
  name?: string;
  price?: number;
  rate?: number;
}

export default function CreateUpdatePlatos() {
  const { id } = useParams<IParams>();
  const [categories, setCategories] = useState<ICategory[]>();
  const { formState, setFormState, handleInputChange } = useForm<IForm>({});
  const [loading, setLoading] = useState(true);
  const platosUrl: string = `${BASE_URL}/api/platos`;
  const history = useHistory();
  const savePlato = async () => {
    try {
      setLoading(true);
      if (id) {
        const result = await axios.put(platosUrl + `/${id}`, formState);
        console.log(await result.data);
        return;
      }
      const result = await axios.post(platosUrl, formState);
      console.log(await result.data);
      history.goBack();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      
    }
  };
  useEffect(() => {
    const categoryUrl: string = `${BASE_URL}/api/category`;
    try {
      fetch(categoryUrl)
        .then(async (result) => setCategories(await result.json()))
        .catch((error) => console.error(error));

      if (id) {
        axios
          .get(`${platosUrl}/${id}`)
          .then(async (result) => {
            const nuevoState: IForm = await result.data;
            setFormState(nuevoState);
          })
          .catch((error) => console.error(error));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <Container className="mt-3">
      <label className="display-6">{!id ? "Crear" : "Modificar"}</label>
      <h2>Platos</h2>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          savePlato();
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formState?.name}
            onChange={(e) => handleInputChange(e)}
            placeholder="Nombre del plato"
            required
          />
          <Form.Text>Requerido</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria</Form.Label>
          <Form.Select
            name="category"
            value={formState?.category}
            onChange={(e) => handleInputChange(e)}
          >
            {categories?.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </Form.Select>
          <Form.Text>Requerido</Form.Text>
        </Form.Group>
        {formState?.imagen && (
          <Form.Group>
            <Figure>
              <Figure.Image
                alt="171x180"
                width={500}
                height={500}
                src={formState?.imagen}
              />
            </Figure>
          </Form.Group>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Imagen URL</Form.Label>
          <Form.Control
            name="imagen"
            value={formState?.imagen}
            onChange={(e) => handleInputChange(e)}
            type="url"
            placeholder="https://your-image.com"
            required
          />
          <Form.Text>Requerido</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            name="price"
            value={formState?.price}
            onChange={(e) => handleInputChange(e)}
            type="number"
            placeholder="20.0"
          />
          <Form.Text className="text-danger">Requerido</Form.Text>
        </Form.Group>
        <Button type="submit">
          <FaSave style={{ marginRight: 2 }} />
          Guardar
        </Button>
      </Form>
    </Container>
  );
}
