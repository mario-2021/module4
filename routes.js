;(function () {
  'use strict'

  angular.module('MenuApp').config(RoutesConfig)

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
  function RoutesConfig ($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/')

    // *** Set up UI states ***
    $stateProvider

    // Home View
    .state('home', {
      url: '/',
      templateUrl: 'menuApp/templates/home.template.html'
    })

    // Categories View
    .state('categories', {
      url: '/categories',
      templateUrl: 'menuApp/templates/allCategories.template.html',
      controller: 'MenuDataController as categories',
      resolve: {
        list: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories()
        }]
      }
    })

    // Category Items View
    .state('categories.items', {
      url: '/items/category-{categoryShortName}',
      templateUrl: 'menuApp/templates/allItems.template.html',
      controller: 'ItemsController as categoryItems',
      resolve: {
        items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
        }]
      }
    })
  }
})()
