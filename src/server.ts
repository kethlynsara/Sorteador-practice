import app from "./app.js";

const port = process.env.PORT || 5000;
console.log( "tests")
app.listen(port, () => {
  console.log(`Server is up and running on port 5000`);
})
