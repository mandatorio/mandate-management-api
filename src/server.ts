import express from "express";
import winston from "winston";

const logger = winston.createLogger({
    format: winston.format.json(),
    level: "info",
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: "logs/error.log",
            level: "error"
        }),
        new winston.transports.File({ filename: "logs/combined.log" })
    ]
});

// Create the application
const app: express.Application = express();

app.get(
    "/",
    (req, res): void => {
        res.send("Hello World!");
    }
);

// The port the express app will listen on
const port: number = 3000;
logger.debug("Hello");
app.listen(port, () => {
    // Success callback
    logger.info(`Listening at http://localhost:${port}/`);
});
