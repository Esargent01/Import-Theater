'use strict';

var app = angular.module('TheaterApp', []);

app.controller('ModelCtrl', function($scope){
  $scope.models = [{
    src:'img/models/ashley_vee.jpg',
    title:'Ashely Vee'
  },{
    src:'img/models/cheetah_gurl.jpg',
    title:'Ana Cheri'
  },{
    src:'img/models/donnah_pham.jpg',
    title:'Donnah Pham'
  },{
    src:'img/models/holly_lee.jpg',
    title:'Holly Lee'
  },{
    src:'img/models/janis_true.jpg',
    title:'Janis True'
  },{
    src:'img/models/jaro_sisters.png',
    title:'Jaro Sisters'
  },{
    src:'img/models/lexi_vixi.jpg',
    title:'Lexi Vixi'
  },{
    src:'img/models/michelle_sanchez.jpg',
    title:'Michelle Sanchez'
  },{
    src:'img/models/noemi_j.jpg',
    title:'Noemi J'
  },{
    src:'img/models/the_affair.jpg',
    title:'The Affair'
  },{
    src:'img/models/vicki_li.jpg',
    title:'Vicki Li'
  }];
});

app.controller('MeetCtrl', function($scope, $http){
  $http.get('js/meets.json').success(function(data){
    $scope.meets = data;
  });
});