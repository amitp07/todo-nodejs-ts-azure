import express from 'express';
import path from 'path';
import route from './routes';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
console.log('Static files being served from: ' + path.join(__dirname, 'public'));

app.use(route);

app.listen(3000, () => {
    console.log('app is running..... 3000');
});

export default app;