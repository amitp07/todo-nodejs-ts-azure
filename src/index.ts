import express from 'express';
import path from 'path';
import route from './routes';

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './public/views');

console.log('Static files being served from: ' + path.join(__dirname, 'public'));

app.use(route);

app.listen(process.env.PORT || 3000, () => {
    console.log('app is running....', process.env.PORT || 3000);
});

export default app;
