angular.module("myApp", ['ui.date'])
		.controller("myController", function($scope){
			  $scope.dateOptions = {
			    changeYear: true,
			    changeMonth: true,
			    yearRange: '1900:-0',    
			  };
		});