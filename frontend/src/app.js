const exphbs = require('express-handlebars')
const path = require('path')
const express = require('express')

// Definição porta servidor
const PORT = process.env.PORT;
const app = express();

// Configuração do Handlebars como mecanismo de template para renderização de views
app.engine('.handlebars', exphbs.engine({ extname: '.handlebars' }, { defaultLayout: 'Main' }));
app.set('view engine', '.handlebars');
app.set('views', './src/views');

// Define diretório de arquivos estáticos
app.use(express.static('./src/public'));    

// Importação das rotas do Front End
const frontEndRoutes = require('./routes/frontEndRoutes');

// Rota base
app.use('/', frontEndRoutes);               

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});