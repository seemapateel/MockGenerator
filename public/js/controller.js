var app = angular.module('myApp',[]);
app.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("in ctrl");
  var counter = 0;
  $scope.data = {};
  var quesBank = {};
  
  $http.get("./json/CSS-BS.json").then(function(response){
    //console.log(response.data);
    quesBank = response.data;
    console.log(quesBank[0]);
    $scope.data.question = quesBank[counter].QUES;
  }, function(error){
    console.log("Error ");
  });
  
  $scope.loadAnswer = function() {
    console.log("in loadAnswer func");
    $scope.data.answer = quesBank[counter].ANS;
  };
  
  $scope.backwClick = function(){
    console.log("begin backw[" + counter);
    $scope.data.answer = "";
    if (counter === 0) {
      counter = quesBank.length;
    }

    counter--;
    console.log("backw before loadC[" + counter);
    $scope.data.question = quesBank[counter].QUES;
  };
  
  $scope.forwClick = function(){
    console.log("forw begin[" + counter);
    $scope.data.answer = "";
    counter++;
    counter = counter % quesBank.length;
    console.log("forw before loadC[" + counter);
    $scope.data.question = quesBank[counter].QUES;
  }
}  
]);
  
  
