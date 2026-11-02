import express from "express";

const PORT = process.env.PORT || 3000; 

const app = express();

app.get("/", (req, res) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Todo App</title>
        </head>
        <body>
            <h1>Description</h1>
            <p>This is todo app.</p>
        </body>
        </html>
    `);
});

const server = app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}.`);
})