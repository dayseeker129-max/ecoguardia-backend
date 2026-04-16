const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ CORS CONFIGURADO PARA VERCEL
app.use(cors({
  origin: ["https://ecoguardia-frontend-3bn6ms0p6-axels-projects-f808169e.vercel.app", "http://localhost:3000"],
  credentials: true
}));

app.use(express.json());

// ✅ CONEXIÓN A MONGODB ATLAS (Versión optimizada)
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
