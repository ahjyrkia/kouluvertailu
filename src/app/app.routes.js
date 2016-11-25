var MyApp = angular.module("MyApp", ["ui.router","pageslide-directive","chart.js"]);

MyApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/koulut");

  $stateProvider
    .state("main", {
      url: "/",
      templateUrl: "templates/main/main.html",
      controller: "MainController",
      controllerAs: "main"
    })
    .state("main.intro", {
      url: "koulut",
      templateUrl: "templates/intro/intro.html",
    })
});
