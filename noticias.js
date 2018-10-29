const http = require('http');

const server = http.createServer((req, res) => {
  const categoria = req.url;

  if(categoria == '/tecnologia') {
    res.end('<html><body>Blog de Tecnologia</body></html>')
  }
  else if(categoria == '/moda'){
    res.end('<html><body>Blog de Moda</body></html>')
  }
  else if(categoria == '/beleza') {
    res.end('<html><body>Blog de Beleza</body></html>')
  }else {
    res.end('<html><body>Portal de Notícias</body></html>')
  }
}).listen(3000)

