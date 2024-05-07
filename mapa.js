
var map = L.map('map', {
    center: [20.5791, -98.9621],
    zoom: 9,
    zoomControl: false,
    minZoom:8,
    maxZoom: 18 // Establece aquí el nivel máximo de zoom que desees
});


// Añadiendo la capa base al mapa
var tiles =L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);

// Función para obtener el color en función del número de proyectos
function getColor(d) {
    return d > 29 ? 'black' :
           d > 17 ? '#006d2c' :
           d > 9  ? '#31a354' :
           d > 4  ? '#74c476' :
           d > 2  ? '#bae4b3' :
           d > 0  ? '#edf8e9' :
                    'white';
}

// Estilo para las áreas geográficas del mapa
function style(feature) {
    return {
        fillColor: '#DDc9A3',
        weight: 1,
        opacity:0.7,
        color: 'black',
        fillOpacity: 0.2
    };
}
function style2(feature) {
    return {
    color: "#691c32", // Color de la línea
    weight: 7,        // Grosor de la línea
    opacity: 0.9     // Opacidad de la línea
    };
}
function style3(feature) {
    return {
    color: "#0099CD", // Color de la línea
    weight: 7,        // Grosor de la línea
    opacity: 0.9     // Opacidad de la línea
    };
}
// Resalta la característica bajo el mouse
/*function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    info.update(layer.feature.properties);
}

// Restablece el resaltado al sacar el mouse
function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

// Zoom al hacer clic en una característica
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

// Eventos para cada característica
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}*/

// Añadiendo las áreas geográficas al mapa


var geojson = L.geoJson(municipios_proyectos, {
    style: style,
}).addTo(map);


function onLayerClick(feature, layer) {
    layer.on('click', function (e) {
        // Iniciar la tabla con los encabezados y estilos para bordes
        var tableHtml = `<table style="width:100%; border-collapse: collapse;">
                            <tr>
                                <th style="border: 1px solid black; padding: 5px;">Propiedad</th>
                                <th style="border: 1px solid black; padding: 5px;">Valor</th>
                            </tr>`;

        // Iterar a través de todas las propiedades del feature
        for (var key in feature.properties) {
            // Solo añadir una fila si el valor de la propiedad no es null
            if (feature.properties[key] !== null) {
                tableHtml += `<tr>
                                <td style="border: 1px solid black; padding: 5px;">${key}</td>
                                <td style="border: 1px solid black; padding: 5px;">${feature.properties[key]}</td>
                              </tr>`;
            }
        }

        // Cerrar la tabla
        tableHtml += `</table>`;

        // Mostrar el popup de SweetAlert2 con la tabla
        Swal.fire({
            title: feature.properties.Name,
            html: tableHtml,
            width: 'auto', // Ajustar al contenido
            padding: '3em',
            backdrop: true
        });
    });
}

// Capas
var AcueductoLayer = L.geoJSON(CAI1A2023001, {
    style: style3,
    onEachFeature: onLayerClick // Pasar la función aquí para que se aplique a cada feature
}).addTo(map);
// Define el ícono personalizado
var customIcon = L.icon({
    iconUrl: 'img/piramide.png', // Asegúrate de que esta es la ruta correcta al ícono
    iconSize: [30, 30], // Establece el tamaño original del ícono aquí
    iconAnchor: [10, 10], // Ajusta este valor para que el ícono se ancle correctamente
    popupAnchor: [0, -50] // Ajusta si es necesario para que el popup aparezca en la ubicación deseada
});
var customIcon2 = L.icon({
    iconUrl: 'img/interseccion2.png', // Asegúrate de que esta es la ruta correcta al ícono
    iconSize: [30, 30], // Establece el tamaño original del ícono aquí
    iconAnchor: [10, 10], // Ajusta este valor para que el ícono se ancle correctamente
    popupAnchor: [0, 0] // Ajusta si es necesario para que el popup aparezca en la ubicación deseada
});
var customIcon3 = L.icon({
    iconUrl: 'img/deporte.png', // Asegúrate de que esta es la ruta correcta al ícono
    iconSize: [30, 30], // Establece el tamaño original del ícono aquí
    iconAnchor: [10, 10], // Ajusta este valor para que el ícono se ancle correctamente
    popupAnchor: [0, -50] // Ajusta si es necesario para que el popup aparezca en la ubicación deseada
});
var customIcon4 = L.icon({
    iconUrl: 'img/autobus.png', // Asegúrate de que esta es la ruta correcta al ícono
    iconSize: [40, 40], // Establece el tamaño original del ícono aquí
    iconAnchor: [10, 30], // Ajusta este valor para que el ícono se ancle correctamente
    popupAnchor: [0, -50] // Ajusta si es necesario para que el popup aparezca en la ubicación deseada
});
var customIcon5 = L.icon({
    iconUrl: 'img/prision.png', // Asegúrate de que esta es la ruta correcta al ícono
    iconSize: [25, 25], // Establece el tamaño original del ícono aquí
    iconAnchor: [10, 10], // Ajusta este valor para que el ícono se ancle correctamente
    popupAnchor: [0, -50] // Ajusta si es necesario para que el popup aparezca en la ubicación deseada
});
var customIcon6 = L.icon({
    iconUrl: 'img/parque2.png', // Asegúrate de que esta es la ruta correcta al ícono
    iconSize: [30, 30], // Establece el tamaño original del ícono aquí
    iconAnchor: [10, 10], // Ajusta este valor para que el ícono se ancle correctamente
    popupAnchor: [0, -50] // Ajusta si es necesario para que el popup aparezca en la ubicación deseada
});
var customIcon7 = L.icon({
    iconUrl: 'img/rehabilitacion.png', // Asegúrate de que esta es la ruta correcta al ícono
    iconSize: [30, 30], // Establece el tamaño original del ícono aquí
    iconAnchor: [10, 10], // Ajusta este valor para que el ícono se ancle correctamente
    popupAnchor: [0, -50] // Ajusta si es necesario para que el popup aparezca en la ubicación deseada
});


// Función para procesar cada feature de la capa
function onEachFeature(feature, layer) {
    if (feature.geometry.type === 'Point') {
        // Crea un marcador con el ícono personalizado
        var marker = L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {icon: customIcon});

        // Añade un evento click al marcador
        marker.on('click', function() {
            // Filtra las propiedades del feature para excluir las que tienen valor null
            var propertiesToShow = Object.entries(feature.properties).reduce(function(acc, [key, value]) {
                if (value !== null) { // Asegúrate de ajustar esta condición si necesitas excluir valores "falsy" adicionales
                    acc[key] = value;
                }
                return acc;
            }, {});

            // Construye el HTML de la tabla con los datos filtrados y añade estilos para los bordes
            var tableHtml = `<table style="width:100%; border-collapse: collapse;">
            <tr>
                <th style="border: 1px solid black; padding: 5px;">Propiedad</th>
                <th style="border: 1px solid black; padding: 5px;">Valor</th>
            </tr>`;

// Iterar a través de todas las propiedades del feature
for (var key in feature.properties) {
// Solo añadir una fila si el valor de la propiedad no es null
if (feature.properties[key] !== null) {
tableHtml += `<tr>
                <td style="border: 1px solid black; padding: 5px;">${key}</td>
                <td style="border: 1px solid black; padding: 5px;">${feature.properties[key]}</td>
              </tr>`;
}
}

// Cerrar la tabla
tableHtml += `</table>`;

// Mostrar el popup de SweetAlert2 con la tabla
Swal.fire({
title: feature.properties.Name,
html: tableHtml,
width: 'auto', // Ajustar al contenido
padding: '3em',
backdrop: true
});
});
        // Añade el marcador al mapa
        marker.addTo(map);
    }
}
function onEachFeature2(feature, layer) {
    if (feature.geometry.type === 'Point') {
        // Crea un marcador con el ícono personalizado
        var marker = L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {icon: customIcon2});

        // Añade un evento click al marcador
        marker.on('click', function() {
            // Filtra las propiedades del feature para excluir las que tienen valor null
            var propertiesToShow = Object.entries(feature.properties).reduce(function(acc, [key, value]) {
                if (value !== null) { // Asegúrate de ajustar esta condición si necesitas excluir valores "falsy" adicionales
                    acc[key] = value;
                }
                return acc;
            }, {});

            // Construye el HTML de la tabla con los datos filtrados y añade estilos para los bordes
            var tableHtml = '<table style="width:100%; border-collapse: collapse;">' + 
                '<tr><th style="border: 1px solid black; padding: 8px;">Propiedad</th><th style="border: 1px solid black; padding: 8px;">Valor</th></tr>' + 
                Object.entries(propertiesToShow).map(function([key, value]) {
                    return `<tr><td style="border: 1px solid black; padding: 8px;">${key}</td><td style="border: 1px solid black; padding: 8px;">${value}</td></tr>`;
                }).join('') + '</table>';

            // Muestra los campos filtrados en un Swal.fire con el formato de tabla
           // Asumiendo que feature.properties contiene una propiedad llamada 'Name'
            Swal.fire({
                title: feature.properties.Name, // Concatena el valor de la propiedad 'Name'
                html: tableHtml,
                width: 600,
                customClass: {
                    confirmButton: 'swal2-confirm' // Usa el nombre de la clase CSS que definiste
                }
            });

            
        });

        // Añade el marcador al mapa
        marker.addTo(map);
    }
}
function onEachFeature3(feature, layer) {
    if (feature.geometry.type === 'Point') {
        // Crea un marcador con el ícono personalizado
        var marker = L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {icon: customIcon3});

        // Añade un evento click al marcador
        marker.on('click', function() {
            // Filtra las propiedades del feature para excluir las que tienen valor null
            var propertiesToShow = Object.entries(feature.properties).reduce(function(acc, [key, value]) {
                if (value !== null) { // Asegúrate de ajustar esta condición si necesitas excluir valores "falsy" adicionales
                    acc[key] = value;
                }
                return acc;
            }, {});

            // Construye el HTML de la tabla con los datos filtrados y añade estilos para los bordes
            var tableHtml = '<table style="width:100%; border-collapse: collapse;">' + 
                '<tr><th style="border: 1px solid black; padding: 8px;">Propiedad</th><th style="border: 1px solid black; padding: 8px;">Valor</th></tr>' + 
                Object.entries(propertiesToShow).map(function([key, value]) {
                    return `<tr><td style="border: 1px solid black; padding: 8px;">${key}</td><td style="border: 1px solid black; padding: 8px;">${value}</td></tr>`;
                }).join('') + '</table>';

            // Muestra los campos filtrados en un Swal.fire con el formato de tabla
           // Asumiendo que feature.properties contiene una propiedad llamada 'Name'
            Swal.fire({
                title: feature.properties.Name, // Concatena el valor de la propiedad 'Name'
                html: tableHtml,
                width: 600,
                customClass: {
                    confirmButton: 'swal2-confirm' // Usa el nombre de la clase CSS que definiste
                }
            });

            
        });

        // Añade el marcador al mapa
        marker.addTo(map);
    }
}
function onEachFeature4(feature, layer) {
    if (feature.geometry.type === 'Point') {
        // Crea un marcador con el ícono personalizado
        var marker = L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {icon: customIcon3});

        // Añade un evento click al marcador
        marker.on('click', function() {
            // Filtra las propiedades del feature para excluir las que tienen valor null
            var propertiesToShow = Object.entries(feature.properties).reduce(function(acc, [key, value]) {
                if (value !== null) { // Asegúrate de ajustar esta condición si necesitas excluir valores "falsy" adicionales
                    acc[key] = value;
                }
                return acc;
            }, {});

            // Construye el HTML de la tabla con los datos filtrados y añade estilos para los bordes
            var tableHtml = '<table style="width:100%; border-collapse: collapse;">' + 
                '<tr><th style="border: 1px solid black; padding: 8px;">Propiedad</th><th style="border: 1px solid black; padding: 8px;">Valor</th></tr>' + 
                Object.entries(propertiesToShow).map(function([key, value]) {
                    return `<tr><td style="border: 1px solid black; padding: 8px;">${key}</td><td style="border: 1px solid black; padding: 8px;">${value}</td></tr>`;
                }).join('') + '</table>';

            // Muestra los campos filtrados en un Swal.fire con el formato de tabla
           // Asumiendo que feature.properties contiene una propiedad llamada 'Name'
            Swal.fire({
                title: feature.properties.Name, // Concatena el valor de la propiedad 'Name'
                html: tableHtml,
                width: 600,
                customClass: {
                    confirmButton: 'swal2-confirm' // Usa el nombre de la clase CSS que definiste
                }
            });

            
        });

        // Añade el marcador al mapa
        marker.addTo(map);
    }
}

var HuapalcalcoLayer = L.geoJSON(CUL2C2023001, {
    onEachFeature: onEachFeature // Pasar la función aquí para que se aplique a cada feature
});
var TulaLayer = L.geoJSON(CUL2C2023002, {
    onEachFeature: onEachFeature // Pasar la función aquí para que se aplique a cada feature
});
var DistActPachsLayer = L.geoJSON(DSC1B2023001, {
    pointToLayer: function(feature, latlng) {
        // Crea un marcador con el ícono personalizado
        return L.marker(latlng, {icon: customIcon2});
    },
    onEachFeature: onLayerClick
}).addTo(map);
var DistJorobasLayer = L.geoJSON(SIP1B2023005, {
    pointToLayer: function(feature, latlng) {
        // Crea un marcador con el ícono personalizado
        return L.marker(latlng, {icon: customIcon2});
    },
    onEachFeature: onLayerClick
}).addTo(map);

var LibAtitalaquiaLayer = L.geoJSON(SIP1B2023007, {
    style: style2,
    onEachFeature: onLayerClick // Pasar la función aquí para que se aplique a cada feature
}).addTo(map);
var MejorInstDeporLayer = L.geoJSON(IHD2D2023001, {
    style: style2,
}).addTo(map);
var MejorInstDeporPointLayer = L.geoJSON(IHD2D2023001_, {
    pointToLayer: function(feature, latlng) {
        // Crea un marcador con el ícono personalizado
        return L.marker(latlng, {icon: customIcon3});
    },
    onEachFeature: onLayerClick
}).addTo(map);
var PachAifaLayer = L.geoJSON(MOV1B2023003, {
    style: style2,
    onEachFeature: onLayerClick // Pasar la función aquí para que se aplique a cada feature
}).addTo(map);
var CentralAbastoLayer = L.geoJSON(UPL3D2023012, {
    style: style2,
    onEachFeature: onLayerClick
}).addTo(map);
var CentralAbastoPuntoLayer = L.geoJSON(UPL3D2023012Punto, {
    pointToLayer: function(feature, latlng) {
        // Crea un marcador con el ícono personalizado
        return L.marker(latlng, {icon: customIcon4});
    },
    onEachFeature: onLayerClick
}).addTo(map);
var CeresoTasquilloLayer = L.geoJSON(SEG2F2023001, {
    style: style2,
}).addTo(map);
var CeresoTasquilloPuntoLayer = L.geoJSON(SEG2F2023001Punto, {
    pointToLayer: function(feature, latlng) {
        // Crea un marcador con el ícono personalizado
        return L.marker(latlng, {icon: customIcon5});
    },
    onEachFeature: onLayerClick
}).addTo(map);
var presaZacualtipan= L.geoJSON(SIP1A2023012, {
    style: style3,
    onEachFeature: onLayerClick
}).addTo(map);
var AmpliacionMex_Pach= L.geoJSON(SIP1B2023001, {
    style: style2,
    onEachFeature: onLayerClick
}).addTo(map);
var ModernPort_Tasquillo= L.geoJSON(SIP1B2023003, {
    style: style2,
    onEachFeature: onLayerClick
}).addTo(map);
var ModernApan_Calpu= L.geoJSON(SIP1B2023004, {
    style: style2,
    onEachFeature: onLayerClick
}).addTo(map);
var EjeActop_Atoto= L.geoJSON(SIP1B2023006, {
    style: style2,
    onEachFeature: onLayerClick
}).addTo(map);
var LibMix_Progre= L.geoJSON(SIP1B2023009, {
    style: style2,
    onEachFeature: onLayerClick
}).addTo(map);
var TubIntercon= L.geoJSON(UPL1A2023004, {
    style: style3,
    onEachFeature: onLayerClick
}).addTo(map);
var LibIxm_Cardo= L.geoJSON(UPL1B2023003, {
    style: style2,
    onEachFeature: onLayerClick
}).addTo(map);
var Maestranza = L.geoJSON(UPL2C2023007, {
    style: style2,
    onEachFeature: onLayerClick
}).addTo(map);
var Maestranza_Punto = L.geoJSON(UPL2C2023007_Punto, {
    pointToLayer: function(feature, latlng) {
        // Crea un marcador con el ícono personalizado
        return L.marker(latlng, {icon: customIcon6});
    },
    onEachFeature: onLayerClick
}).addTo(map);
var Camino_RealTierraAdentro = L.geoJSON(UPL2G2023002, {
    style: style2,
    onEachFeature: onLayerClick
}).addTo(map);

//POR MUNICIPIOS---------------------------------
var utvmRehabilitacion=L.geoJSON(IXM2A2023014, {
    style: style2,
    onEachFeature: onLayerClick
}).addTo(map);
var Maestranza_Punto = L.geoJSON(IXM2A2023014Punto, {
    pointToLayer: function(feature, latlng) {
        // Crea un marcador con el ícono personalizado
        return L.marker(latlng, {icon: customIcon7});
    },
    onEachFeature: onLayerClick
}).addTo(map);
var andadorIxm_SanNicolas=L.geoJSON(IXM2G2023002, {
    style: style2,
    onEachFeature: onLayerClick
}).addTo(map);


//-------------------------------------------------------
// Control de información
function resetMunicipiosStyle() {
    geojson.eachLayer(function (layer) {
        geojson.resetStyle(layer);
    });
}

function highlightMunicipio(selectedMunicipio) {
    var foundLayer = null;
    geojson.eachLayer(function(layer) {
        if (layer.feature.properties.NOMGEO === selectedMunicipio) {
            foundLayer = layer;
            layer.setStyle({
                color: 'yellow', // Color del contorno amarillo para resaltar
                fillColor: 'yellow', // Relleno amarillo, opcional dependiendo de tu estilo
                fillOpacity: 0.2, // Hacemos el relleno semi-transparente
                weight: 5 // Grosor del borde para hacerlo más visible
            });
            // No usamos bringToFront() para evitar tapar otros elementos
        }
    });

    if (foundLayer) {
        map.fitBounds(foundLayer.getBounds());
    }
}
document.getElementById('selectorMunicipio').addEventListener('change', function() {
    var selectedMunicipio = this.value; // Obtiene el municipio seleccionado del dropdown
    resetMunicipiosStyle(); // Restablece el estilo de todos los municipios
    highlightMunicipio(selectedMunicipio); // Resalta el municipio seleccionado y hace zoom
});
// Selectores para municipios y dependencias
var selectorMunicipio = document.getElementById('selectorMunicipio');
var selectorDependencia = document.getElementById('selectorDependencia');

// Rellenar selector de municipios con opciones
Object.keys(proyectos_filtros).forEach(function(municipio) {
    var option = document.createElement('option');
    option.value = municipio;
    option.textContent = municipio;
    selectorMunicipio.appendChild(option);
});

// Evento al cambiar selección de municipio
selectorMunicipio.addEventListener('change', function() {
    var dependencias = proyectos_filtros[this.value] || {};
    selectorDependencia.innerHTML = '<option value="">-- Selecciona una dependencia --</option>'; // Limpiar y establecer opción por defecto
    Object.keys(dependencias).forEach(function(dependencia) {
        var option = document.createElement('option');
        option.value = dependencia;
        option.textContent = dependencia;
        selectorDependencia.appendChild(option);
    });
    filtrarYMostrarProyectos(); // Actualizar proyectos
});

// Función para filtrar y mostrar proyectos
function filtrarYMostrarProyectos() {
    var municipioSeleccionado = selectorMunicipio.value;
    var dependenciaSeleccionada = selectorDependencia.value;

    // Filtrar proyectos basado en los selectores
    var proyectosFiltrados = proyectos_filtros[municipioSeleccionado] && proyectos_filtros[municipioSeleccionado][dependenciaSeleccionada] 
        ? proyectos_filtros[municipioSeleccionado][dependenciaSeleccionada] 
        : [];

    // Actualizar el contenido del div resultadosProyectos
    var html = proyectosFiltrados.map(function(proyecto) {
        return '<div class="proyecto-container">' +
                    '<div class="proyecto-nombre">' + proyecto['Proyecto'] + '</div>' +
                    '<div class="proyecto-porcentaje">' + Math.round(proyecto['Porcentaje de avance'] * 100) + '%</div>' +
                '</div>';
    }).join('');
    document.getElementById('resultadosProyectos').innerHTML = html;
}

selectorDependencia.addEventListener('change', filtrarYMostrarProyectos);

// Dispara un evento 'change' para cargar las opciones de dependencia al inicio
if (selectorMunicipio.options.length > 0) {
    selectorMunicipio.dispatchEvent(new Event('change'));
}
;

//Boton de abrir y cerrar
document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    var mapElement = document.getElementById('map');
    var toggleButton = document.getElementById('toggleSidebar');
    
    toggleButton.addEventListener('click', function() {
      var isOpen = sidebar.style.left === '0px';
      
      if (isOpen) {
        sidebar.style.left = '-300px'; // Esconde la barra lateral
        mapElement.style.left = '0'; // Extiende el mapa
        toggleButton.textContent = 'Abrir panel de información'; // Cambia el texto del botón
        toggleButton.style.left = '10px'; // Mueve el botón hacia la izquierda
      } else {
        sidebar.style.left = '0px'; // Muestra la barra lateral
        mapElement.style.left = '300px'; // Restablece el mapa
        toggleButton.textContent = 'Cerrar'; // Cambia el texto del botón
        toggleButton.style.left = '310px'; // Mueve el botón junto con la barra lateral
      }
  
      // Ajusta el tamaño del mapa después de la transición
      setTimeout(function() {
        map.invalidateSize();
      }, 300);
    });
  
    // Inicializa el estado del sidebar y botón
    sidebar.style.left = '0px'; // Barra lateral visible
    mapElement.style.left = '300px'; // Espacio para la barra lateral
    toggleButton.style.left = '310px'; // Botón se mueve con la barra lateral
  });
  
  //SELECTOR POR PROYECTO----------
  document.addEventListener('DOMContentLoaded', function() {
    // Asumiendo que 'proyectosInfo' es un objeto que contiene tus proyectos y sus nombres.
    // La clave es el identificador del proyecto (nombre de la variable), y el valor es el nombre a mostrar.
    var proyectosInfo = {
        CAI1A2023001: window.CAI1A2023001.features[0].properties.Name,
        SIP1B2023005: window.SIP1B2023005.features[0].properties.Name,
        CUL2C2023001: window.CUL2C2023001.features[0].properties.Name,
        CUL2C2023002: window.CUL2C2023002.features[0].properties.Name,
        DSC1B2023001: window.DSC1B2023001.features[0].properties.Name,
        SIP1B2023007: window.SIP1B2023007.features[0].properties.Name,

        IHD2D2023001: window.IHD2D2023001.features[0].properties.Name,
        MOV1B2023003: window.MOV1B2023003.features[0].properties.Name,
        UPL3D2023012: window.UPL3D2023012.features[0].properties.Name,
        SEG2F2023001: window.SEG2F2023001.features[0].properties.Name,
        SIP1A2023012: window.SIP1A2023012.features[0].properties.Name,
        SIP1B2023001: window.SIP1B2023001.features[0].properties.Name,

        SIP1B2023003: window.SIP1B2023003.features[0].properties.Name,
        SIP1B2023004: window.SIP1B2023004.features[0].properties.Name,
        SIP1B2023006: window.SIP1B2023006.features[0].properties.Name,
        SIP1B2023009: window.SIP1B2023009.features[0].properties.Name,
        UPL1A2023004: window.UPL1A2023004.features[0].properties.Name,
    };
    

    function llenarSelectorProyectos() {
        var selectorProyecto = document.getElementById('selectorProyecto');

        Object.entries(proyectosInfo).forEach(([clave, nombreProyecto]) => {
            var option = document.createElement('option');
            option.value = clave; // La clave es el identificador único del proyecto.
            option.textContent = nombreProyecto; // 'nombreProyecto' contiene el valor de "Name".
            selectorProyecto.appendChild(option);
        });
    }

    llenarSelectorProyectos();

    document.getElementById('selectorProyecto').addEventListener('change', function() {
        var proyectoSeleccionado = this.value;
        if (proyectoSeleccionado) {
            zoomAProyecto(proyectoSeleccionado);
        }
    });

    function zoomAProyecto(nombreProyecto) {
        var proyecto = window[nombreProyecto]; // Obtener la variable del proyecto
        if (proyecto && proyecto.features.length > 0) {
            var bounds = L.geoJSON(proyecto).getBounds();
            map.fitBounds(bounds); // Asumiendo que tu variable del mapa se llama 'map'
        }
    }
});

var proyectos = [
    { id: "CAI1A2023001", proyecto: window.CAI1A2023001.features[0].properties.Name, dependencia: window.CAI1A2023001.features[0].properties["DEPENDENCIA/ORGANISMO"] },
    { id: "SIP1B2023005", proyecto: window.SIP1B2023005.features[0].properties.Name, dependencia: window.SIP1B2023005.features[0].properties["DEPENDENCIA/ORGANISMO"] },
    { id: "CUL2C2023001", proyecto: window.CUL2C2023001.features[0].properties.Name, dependencia: window.CUL2C2023001.features[0].properties["DEPENDENCIA/ORGANISMO"] },
    { id: "CUL2C2023002", proyecto: window.CUL2C2023002.features[0].properties.Name, dependencia: window.CUL2C2023002.features[0].properties["DEPENDENCIA/ORGANISMO"] },
    { id: "DSC1B2023001", proyecto: window.DSC1B2023001.features[0].properties.Name, dependencia: window.DSC1B2023001.features[0].properties["DEPENDENCIA/ORGANISMO"] },
    { id: "SIP1B2023007", proyecto: window.SIP1B2023007.features[0].properties.Name, dependencia: window.SIP1B2023007.features[0].properties["DEPENDENCIA/ORGANISMO"] },
    // Continúa para el resto de tus proyectos
];
document.addEventListener('DOMContentLoaded', function() {
    var selectorDependenciaOrganismo = document.getElementById('selectorDependenciaOrganismo');
    let dependencias = [...new Set(proyectos.map(proyecto => proyecto.dependencia))];

    dependencias.forEach(dependencia => {
        let option = document.createElement('option');
        option.value = dependencia;
        option.textContent = dependencia;
        selectorDependenciaOrganismo.appendChild(option);
    });
});
selectorDependenciaOrganismo.addEventListener('change', function() {
    const dependenciaSeleccionada = this.value;
    const listaProyectosDependencia = document.getElementById('listaProyectosDependencia');

    // Limpiar lista anterior
    listaProyectosDependencia.innerHTML = '';

    // Filtrar proyectos por la dependencia seleccionada
    let proyectosFiltrados = proyectos.filter(proyecto => proyecto.dependencia === dependenciaSeleccionada);

    // Mostrar nombres de los proyectos filtrados
    proyectosFiltrados.forEach(proyecto => {
        let li = document.createElement('li');
        li.textContent = proyecto.proyecto; // El 'Name' del proyecto
        listaProyectosDependencia.appendChild(li);
    });
});
