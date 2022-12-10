;(function () {
  'use strict'

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'menuApp/templates/categories.template.html',
    bindings: {
      list: '<'
    }
  })
})()
