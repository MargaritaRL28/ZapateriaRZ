// Función para generar la tabla con los datos de productos
var misDatos = (info) => {
    var html = "";
    html += "<h2>Productos</h2>";
    html += "<table border='1'>";
    html += "<thead>";
    html += "<tr>";
    html += "<th>Folio</th>";
    html += "<th>Descripción</th>";
    html += "<th>Talla</th>";
    html += "<th>Precio</th>";
    html += "</tr>";
    html += "</thead>";
    
    html += "<tbody>";
    
    // Recorrer los productos y generar las filas de la tabla
    info.forEach(tabla => {
        html += "<tr>";
        html += "<td>" + tabla.Folio + "</td>";
        html += "<td>" + tabla.Descripcion + "</td>";
        html += "<td>" + tabla.Talla + "</td>";
        html += "<td>" + tabla.Precio + "</td>";
        html += "</tr>";
    });
    
    html += "</tbody>";
    html += "</table>";
    
    // Insertar la tabla generada en el elemento con el id "resultado"
    document.getElementById("resultado").innerHTML = html;
};

// Datos de ejemplo de productos
misDatos([
    {
        "Folio": 1,
        "Descripcion": "Tenis blanco",
        "Talla": 38,
        "Precio": 600
    },
    {
        "Folio": 2,
        "Descripcion": "Zapato de tacon negro",
        "Talla": 39,
        "Precio": 900
    },
    {
        "Folio": 3,
        "Descripcion": "Bota de cuero marron",
        "Talla": 35,
        "Precio": 1000
    },
    {
        "Folio": 4,
        "Descripcion": "Zapato de vestir",
        "Talla": 40,
        "Precio": 800
    },
    {
        "Folio": 5,
        "Descripcion": "Sandalia roja",
        "Talla": 37,
        "Precio": 200
    }
]);
