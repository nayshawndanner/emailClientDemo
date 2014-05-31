'use strict';

angular.module('emailClientApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.success = false;
    $scope.emails = [];
    $scope.selectedEmail = false;
    $http.get('/api/email').success(function(emails) {
        $scope.success = true;
        $scope.emails = emails;

      }).error(function(){
            $scope.succes = false;
            $scope.emails = 'none';
          });

    $scope.setSelectedMail = function(email){
        $scope.selectedEmail = email;
        //$scope.selectedEmail.body = $scope.selectedEmail.body.join('/n');
      };
    $scope.isSelected = function(email){
        if($scope.selectedEmail){
          return email === $scope.selectedEmail;
        }
      };
  });
