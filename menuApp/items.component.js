;(function () {
  'use strict'

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'menuApp/templates/items.template.html',
    bindings: {
      items: '<'
    }
  })
})()
