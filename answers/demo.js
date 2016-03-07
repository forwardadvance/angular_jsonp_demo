(function() {

  angular.module('app', ['weatherConstants'])
    .controller('weatherController', controller);

  function makeUrl(base, key, loc) {
    return [
      base,
      'weather?q=',
      loc,
      '&APPID=',
      key,
      '&callback=JSON_CALLBACK'
    ].join('')
  }

  function controller($scope, $http, weatherApiBase, weatherApiId) {
    $scope.loc = "london";
    $scope.getFeed = function() {
      $scope.spinner = true;
      $http.jsonp(makeUrl(weatherApiBase, weatherApiId, $scope.loc)).then(function(data) {
        $scope.weather = data.data;
        $scope.spinner = false;
      });
    }
    $scope.getFeed();
  };

})();

(function() {
  var base = 'http://api.openweathermap.org/data/2.5/';
  var key = '57d36da6b8187a992393dc6a0f4c96c3';

  angular.module('weatherConstants', [])
    .constant('weatherApiBase', base)
    .constant('weatherApiId', key)
})();
