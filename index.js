import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
app.use(express.static('public'));


app.get("/", (req, res) => {
  res.render("index.ejs", { joke: "" });
});

app.get('/joke', async (req, res) => {
    try {
        const result = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single');
        res.render('index.ejs', {
            joke: result.data.joke,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching Joke');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

