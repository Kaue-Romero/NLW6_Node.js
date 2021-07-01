import express from 'express';

const app = express();
const port: number = 3000;

app.get("/test", ((req, res) => {
    return res.send("Hello World");
}));

app.listen(port, () => console.log(`Server is running in port: ${port}`)); 