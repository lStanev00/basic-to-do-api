import express from 'express';
import router from './src/router.ts';
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());

app.use(`/`, router)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});