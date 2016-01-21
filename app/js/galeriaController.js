// Insertamos las factorías de datos para poder devolver las urls
magoapp.controller("galeriaController", function (fuenteDatos, fuenteVideos) {
        this.datos = fuenteDatos.get();
        this.videos = fuenteVideos.get();
    });

    // Encapsulando la fuente de datos de imágenes
    magoapp.factory("fuenteDatos", function ($resource) {
        return $resource("data/links-imagenes-galeria.json", {}, {
            get: {
                method: "GET",
                isArray: true
            },
            post: {
                method: "POST",
                isArray: true
            }
        })
    });
    
    // Actualmente no se usa, pero puede servir para facilitar la ampliación
    magoapp.factory("fuenteVideos", function ($resource) {
        return $resource("data/links-videos-galeria.json", {}, {
            get: {
                method: "GET",
                isArray: true
            },
            post: {
                method: "POST",
                isArray: true
            }
        })
    });