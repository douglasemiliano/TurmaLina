const express = require('express');
const path = require('path');
const app = express();

// Determinar o diretório base corretamente
const distDir = path.join(__dirname, '..', 'dist', 'turma-lina', 'browser');
console.log('Servindo arquivos de:', distDir);

// Servir arquivos estáticos do Angular
app.use(express.static(distDir));

// Roteamento para a aplicação Angular (Single Page Application - SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.csr.html'));
});

// Definir a porta
const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(distDir);
    
  console.log(`Servidor rodando na porta ${port}`);
});