import crypto from "node:crypto";
import express from "express";

const PORT = 3000;
const interval = setInterval(() => {
    const randomString = crypto.randomBytes(16).toString('hex');
    console.log(`${new Date().toISOString()}: ${randomString}`);
}, 5000);

const app = express();

app.get("/status", (req, res) => {
    res.status(200).json({
        timestamp: new Date().toISOString(), 
        randomString: crypto.randomBytes(16).toString('hex')
    });
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})

function shutDown(signal) {
  console.log("Shutting down server.");
  clearInterval(interval);
  server.close(() => process.exit(0));
}

process.on('SIGTERM', () => shutDown());
process.on('SIGINT', () => shutDown());