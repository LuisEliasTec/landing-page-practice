//BLOQUE DE DEPENDECIAS
const express = require('express');//libreria de js para servidores.
const path = require('path');//construye rutas de nuestro sistema de archivos
const nsm = require('node-sass-middleware');//compilador de sass
const { dirname } = require('path');
//const express = require('express');//nos ayuda a hacer debug


//BLOQUE DE CONFIGURACIONES
const app = express();//esto es un nuevo servidor

app.use(nsm({
    src: path.join(__dirname, 'src'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compresed',
    prefix: '/assets',
    log: (sev, key, val) => console.log(`${sev} - ${key}: ${val}`)
}));
app.use('/assets', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug'); //pug es nuestro motor de vistas

//BLOQUE DE ACCIONES
app.get('/', (req, res) => {
    res.render('index',
    {
        title: 'Landing page practice',
        message: 'hola jazz'
    });
})

//Ejecucion del servidor
app.listen(3000, () => console.log('Server started'));
