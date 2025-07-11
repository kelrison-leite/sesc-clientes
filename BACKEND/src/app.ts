import express from "express";
import cors from "cors";
import clienteRoutes from "./routes/cliente.routes";
import responsavelRoutes from "./routes/responsavel.routes";
import atividadeRoutes from "./routes/atividade.routes";
import inscricaoRoutes from "./routes/inscricao.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/clientes", clienteRoutes);
app.use("/responsaveis", responsavelRoutes);
app.use("/atividades", atividadeRoutes);
app.use("/inscricoes", inscricaoRoutes);

export default app;