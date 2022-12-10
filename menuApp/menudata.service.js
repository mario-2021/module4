;(function () {
  'use strict'

  angular.module('Data')
  .constant('ClientAPI', 'https://davids-restaurant.herokuapp.com/')
  .service('MenuDataService', MenuDataService)

  MenuDataService.$inject = ['$http', 'ClientAPI']
  function MenuDataService ($http, ClientAPI) {
    var service = this
    service.list = []
    service.items = []

    service.getAllCategories = function () {
      var list = $http({
        method: 'GET',
        url: (ClientAPI + 'categories.json'),
        cache: true
      }).then(
        function (response) {
          service.list = response.data
          return service.list
        })

      return list /* this a promise */
    }

    service.getItemsForCategory = function (categoryShortName) {
      var items = $http({
        method: 'GET',
        url: (ClientAPI + 'menu_items.json?category=' + categoryShortName),
        cache: true
      }).then(
        function (response) {
          service.items = response.data
          return service.items
        })

      return items /* this a promise */
    }
  }
})()
