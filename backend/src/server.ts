const supabase = require("./db/db");
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4444;

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log("click here -> http://localhost:" + port));
