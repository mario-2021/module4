;(function () {
  'use strict'

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController)

  ItemsController.$inject = ['$stateParams', 'list', 'items']
  function ItemsController ($stateParams, list, items) {
    var categoryItems = this
    categoryItems.items = items.menu_items
    var category = list.filter((item) => { return item.short_name === $stateParams.categoryShortName })
    categoryItems.name = category[0].name
  }
})()
