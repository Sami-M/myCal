angular.module('myCalApp').factory('User', function($resource) {
  var apiHomeUrl = 'http://localhost:2403/users';
  return $resource("", {},
    {
      'getMe': { method: "GET", params: {
        format : "json",
        ndbno : "foodSearchQuery",
        sort : "n",
        max : 25,
        offset : 0,
      }, url: apiHomeUrl},

      'signUp': { method: "POST", params: {
        userName: "userName",
        password: "password"
      }, url: apiHomeUrl}

    });

});
