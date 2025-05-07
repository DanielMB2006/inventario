import getConnection from "./../db/database.js";

const getCategorias = async (req, res) => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");
    res.json(rows);
  } catch (error) {
    console.error("ERROR 500:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

const postCategorias = async (req, res) => {
  try {
    const { CategoriaNombre, Descripcion, Imagen } = req.body;
    const category = { CategoriaNombre, Descripcion, Imagen };
    const connection = await getConnection();
    const [result] = await connection.query("INSERT INTO categorias SET ?", category);
    res.json({ message: "Categoría insertada", insertId: result.insertId });
  } catch (error) {
    console.error("ERROR 500:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const [rows] = await connection.query(
      "SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?",
      [id]
    );
    res.json(rows[0] || {}); // Retorna el primer resultado o un objeto vacío
  } catch (error) {
    console.error("ERROR 500:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const [result] = await connection.query("DELETE FROM categorias WHERE CategoriaID = ?", [id]);
    res.json({ message: "Categoría eliminada", affectedRows: result.affectedRows });
  } catch (error) {
    console.error("ERROR 500:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

const updateCategorias = async (req, res) => {
  try {
    const { id } = req.params;
    const { CategoriaNombre, Descripcion, Imagen } = req.body;
    const category = { CategoriaNombre, Descripcion, Imagen };
    const connection = await getConnection();
    const [result] = await connection.query("UPDATE categorias SET ? WHERE CategoriaID = ?", [category, id]);
    res.json({ message: "Categoría actualizada", changedRows: result.changedRows });
  } catch (error) {
    console.error("ERROR 500:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

export const methodHTTP = {
  getCategorias,
  postCategorias,
  getCategory,
  deleteCategory,
  updateCategorias
};