angular.module('aplikasiMynotes', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
            .when('/', {
                'templateUrl' : 'views/home.html',
                'controller' : 'mynotesController'
            })
})
