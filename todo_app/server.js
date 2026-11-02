import express from "express";

const PORT = process.env.PORT || 3000; 

const app = express();
const server = app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}.`);

})