'use strict';

angular.module('emailClientApp')
  .controller('ContentCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    $scope.reply = {};
    $scope.showingReply = false;

    $scope.toggleReplyForm = function(){
      $scope.showingReply = !$scope.showingReply;
      $scope.reply = {};
      $scope.reply.to = $scope.selectedEmail.from.join(', ');
      $scope.reply.body = $scope.selectedEmail.body.join('\n');

    };
    $scope.sendReply = function(){

    };
  });
