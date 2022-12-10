;(function () {
  'use strict'

  angular.module('Data')
  .controller('MenuDataController', MenuDataController)

  MenuDataController.$inject = ['list']
  function MenuDataController (list) {
    var categories = this
    categories.list = list
  }
})()
