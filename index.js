const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = process.env.POST || 5000;

app.use(cors());
app.use(express.json());

// user : dbuser1
//password: b2phyhDNQZeYAzie

const uri =
  "mongodb+srv://dbuser1:b2phyhDNQZeYAzie@cluster0.ghltq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const userCollection = client.db("foodExpress").collection("user");
    app.post("/user", (req, res) => {});
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Running my Node CRUD server");
});

app.listen(port, () => {
  console.log("crud server is runnning");
});
