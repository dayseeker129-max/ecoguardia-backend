const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ CORS TOTAL
app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// ✅ CORRECCIÓN: Usar la variable de Render o el link si falla
const mongoURI = process.env.MONGO_URI || "mongodb+srv://axeluniversidad:AXEL2005@ac-j1ok0ko.1s967ts.mongodb.net/ecoguardian?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
  .then(() => console.log("🔥 MongoDB conectado"))
  .catch(err => console.log("❌ Error Mongo:", err));

const authRoutes = require("./routes/authroutes");
const cardRoutes = require("./routes/cardroutes");

app.use("/api/auth", authRoutes);
app.use("/api/card", cardRoutes);

app.get("/", (req, res) => res.send("Servidor funcionando 🚀"));

// ✅ CORRECCIÓN: Puerto dinámico para Render
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Puerto ${PORT}`);
});
