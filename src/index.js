const express = require("express");
const app = express();
const pool = require("./database");

// INICIO
app.get("/", async (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// CLIENTES
app.get("/clientes", async (req, res) => {
    try {
      // GET CONNECTION
      const conn = await pool.getConnection();
  
      // CREATE NEW QUERY
      const query = 'select * from clientes';
  
      // EXECUTE THE QUERY
      const rows = await conn.query(query);

      // RESPONSE TO THE CLIENT
      //res.status(200).json(rows);
      res.end(`
      <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Clientes</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
        <script>"node_modules/bootstrap/dist.js/bootstrap.bundle.js"</script>
    </head>
    <body style="font-family: 'Poppins', sans-serif;">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous"></script>


        <nav class="navbar navbar-expand-lg px-5" style="background-color: #581845">
            <div class="container">
                <a class="navbar-brand" href="#page-top"><strong style="color: aliceblue">ACME</strong></a>
                <button style="background-color: #862468" class="navbar-toggler text-uppercase font-weight-bold  text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" style="color: aliceblue" href="/">Inicio</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" style="color: aliceblue" href="/clientes">Clientes</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" style="color: aliceblue" href="/productos">Productos</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <h1>Clientes</h1>
        <ul>
            <li class="mx-0 mx-lg-1">${rows[0].name}</li>
            <li class="mx-0 mx-lg-1">${rows[1].name}</li>
            <li class="mx-0 mx-lg-1">${rows[2].name}</li>
        </ul>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    </body>
</html>
      `);
    } catch (error) {
      console.log(error);
    }
});

// PRODUCTOS
app.get("/productos", async (req, res) => {
  try {
    // GET CONNECTION
    const conn = await pool.getConnection();

    // CREATE NEW QUERY
    const query = 'select * from productos';

    // EXECUTE THE QUERY
    const rows = await conn.query(query);

    // RESPONSE TO THE CLIENT
    //res.status(200).json(rows);

    res.end(`
      <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Productos</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
        <script>"node_modules/bootstrap/dist.js/bootstrap.bundle.js"</script>
    </head>
    <body style="font-family: 'Poppins', sans-serif;">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous"></script>


        <nav class="navbar navbar-expand-lg px-5" style="background-color: #581845">
            <div class="container">
                <a class="navbar-brand" href="#page-top"><strong style="color: aliceblue">ACME</strong></a>
                <button style="background-color: #862468" class="navbar-toggler text-uppercase font-weight-bold  text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" style="color: aliceblue" href="/">Inicio</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" style="color: aliceblue" href="/clientes">Clientes</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" style="color: aliceblue" href="/productos">Productos</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <h1>Productos</h1>
        <ul>
            <li class="mx-0 mx-lg-1">${rows[0].name}</li>
            <li class="mx-0 mx-lg-1">${rows[1].name}</li>
            <li class="mx-0 mx-lg-1">${rows[2].name}</li>
        </ul>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    </body>
</html>
      `);

  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Server on port", 3000);
});
