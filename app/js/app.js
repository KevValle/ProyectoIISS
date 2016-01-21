
// Creación del módulo
var magoapp = angular.module('magoapp', ['ngRoute', 'ngResource']); // ngResource para galeriaController

    // Configuración de las rutas
	magoapp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/inicio.html',
            controller: 'mainController'
        })
        .when('/biografia', {
            templateUrl: 'views/biografia.html',
        })
        .when('/contacto', {
            templateUrl: 'views/contacto.html',
        })
        .when('/espectaculos', {
            templateUrl: 'views/espectaculos.html',
        })
        .when('/galeria', {
            templateUrl: 'views/galeria.html',
            controller: 'galeriaController'
        })
        .otherwise({
            redirectTo: '/'
        });
    });
