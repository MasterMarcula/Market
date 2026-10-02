import express from 'express';
import chalk from 'chalk';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`<div>
        <h1>Mini Market Place</h1>
  </div>`);
});

app.get(`/productos`, (req, res) => {
  res.json({
    productos: [
      { id: 1, nombre: "Silla", precio: 100 },
      { id: 2, nombre: "Usuario 2", precio: 200 }
    ]
  });
});

app.get(`/usuarios`, (req, res) => {
  res.json({
    usuarios: [
      { id: 1, nombre: "admin", rol: "admin" },
      { id: 2, nombre: "Usuario 2", rol: "usuario" }
    ]
  });
});

app.get(`/productos/:id`, (req, res) => {
  const { id } = req.params;
  
    res.json(`El producto es: ${id}`);
});

app.get(`/categorias`, (req, res) => {
  res.json({
    categorias: [
      { id: 1, nombre: "Software" },
      { id: 2, nombre: "Hardware" }
    ]
  });
});

app.get(`/empresa`, (req, res) => {
  res.json({
    empresa: {
      nombre: "Minimarket Place",
      version: "1.0.0"
    }
  });
});

app.get(`/buscar`, (req, res) => {
    const { categoria } = req.query;
    res.send(`Buscando productos en la categoría: ${categoria}`);

    // Por ejemplo: /buscar?categoria=Software
});

app.listen(port, () => {
  console.log(chalk.cyan.blackBright(`Esto corre por el puerto ${port}`));
});