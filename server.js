const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ CORS LIBERADO (Para que acepte cualquier link de Vercel o Local)
app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// ✅ CONEXIÓN A MONGODB ATLAS (Intacta)
const mongoURI = "mongodb+srv://axeluniversidad:AXEL2005@ac-j1ok0ko.1s967ts.mongodb.net/ecoguardian?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
  .then(() => console.log("🔥 MongoDB conectado"))
  .catch(err => console.log("❌ Error Mongo:", err));

// RUTAS (Intactas)
const authRoutes = require("./routes/authroutes");
const cardRoutes = require("./routes/cardroutes");

app.use("/api/auth", authRoutes);
app.use("/api/card", cardRoutes);

// TEST
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Puerto ${PORT}`);
});
