//importamos al framework express
import express from "express";
import cors from "cors"
import categoriasRoutes from "./routes/categorias.routes.js"


//asignamos a app toda funcionalidad para mi server web
const app = express();

//setear un puerto a mi web server
app.set("port",5000)

/* Middlewear */
app.use(express.json());

app.use(cors());
//routes
app.use("/api/categorias",categoriasRoutes)

app.get("/",(req,res)=>{
    res.send("REST API EN RENDER WITHOUT DATABASE ENDPOINT")
})

//hacemos disponible a mi server app para toda la aplicacion
export default app;
