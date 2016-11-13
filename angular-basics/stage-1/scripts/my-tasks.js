angular
.module("myTasks")
.directive("tkTitle", function() {
          return {     
		  template: "Hello, this is my tasks app"
	         }
       })
.controller("taskService", function($scope){
	$scope.createTask = function(){
		alert("New task added: " + $scope.description)
	}
       })
