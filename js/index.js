var NewApp = angular.module('NewApp', []);

NewApp.controller('NewCtrl', function($scope, $http){
  $scope.getNews = function(){
    $http.get('http://www.freecodecamp.com/stories/hotStories').then(function(res){    
      $scope.stories = res.data;      
    });
  }
});

NewApp.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {

      scope.$watch(function() {
          return attrs['ngSrc'];
        }, function (value) {
          if (!value) {
            element.attr('src', attrs.errSrc);  
          }
      });

      element.bind('error', function() {
        element.attr('src', attrs.errSrc);
      });
    }
  }
});