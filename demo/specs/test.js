describe('Unit: weatherController', function() {

  beforeEach(module('app'));

  var controllerService, scope, httpBackend;
  beforeEach(inject(function($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    controllerService = $controller;
  }));

  describe('getting the weather', function() {

    var dummyResponse = [];

    beforeEach(function() {
      httpBackend.expectJSONP(/.*openweathermap.*/).respond(dummyResponse);
      // httpBackend.when("JSONP", /.*openweathermap.*/).respond(dummyResponse);
      controllerService('weatherController', {$scope: scope});
      scope.getFeed()
      // scope.getFeed();
      httpBackend.flush();
    });

    it('should have weather', function() {
      expect(scope.weather).toEqual(dummyResponse);
    });
  });

});
