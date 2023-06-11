const app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/posts", {
      template: `<table border="1">
              <tr>
                <th>Id</th>  
                <th>Title</th>  
                <th>Body</th>  
              </tr>
              <tr ng-repeat="post in posts">
                 <td>{{ post.id }}</td>
                 <td>{{ post.title }}</td>
                 <td>
                   <textarea cols="60" rows="5" ng-model="post.body"></textarea> 
                   <div class="btn">
                     <input type='button' value="Edit" ng-click="editpost($index)">
                     <input type='button' value="Delete" ng-click="deletepost($index)">
                   </div>
                 </td>
              </tr>
        </table>`,
       controller: "PostsController"
    })
    .when("/comments", {
      template: `<table border="1">
              <tr>
                <th>Id</th>  
                <th>Name</th>  
                <th>Body</th>  
              </tr>
              <tr ng-repeat="comment in comments">
                 <td>{{ comment.id }}</td>
                 <td>{{ comment.name }}</td>
                 <td>
                   <textarea cols="60" rows="5" ng-model = "comment.body"></textarea> 
                   <div class="btn">
                     <input type='button' value="Edit" ng-click="editcomment($index)">
                     <input type='button' value="Delete" ng-click="deletecomment($index)">
                   </div>
                 </td>
               </tr>
        </table>`,
      controller: "CommentsController"
    })
    .when("/users", {
      template: `<table border="1">
              <tr>
                <th>Id</th>  
                <th>Name</th>  
                <th>Company Name</th>
                <th>City</th>  
                <th>Website</th>
              </tr>
              <tr ng-repeat="user in users">
                 <td>{{ user.id }}</td>
                 <td>{{ user.name }}</td>
                 <td>
                   {{ user.company.name }}
                 </td>
                 <td>
                   {{ user.address.city }}
                 </td>
                 <td>
                   <textarea cols="60" rows="5" ng-model="user.website"></textarea> 
                   <div class="btn">
                     <input type='button' value="Edit" ng-click="edituser($index)">
                     <input type='button' value="Delete" ng-click="deleteuser($index)">
                   </div>
                 </td>
               </tr>
        </table>`,
       controller: "UsersController"
    });
});

app.controller("PostsController", function ($scope, $http) {   
$http.get("https://jsonplaceholder.typicode.com/posts")
 .then(function (response) {
   $scope.posts = response.data;
 });

 $scope.editpost = function(index){ //index
   console.log($scope.posts[index]);  // this is full object
   console.log($scope.posts[index].body); // if you want body use this
 }

 $scope.deletepost = function(index){
     if($scope.posts.length){
     $scope.posts[index].body='';
 }
  }
});

app.controller("CommentsController", function ($scope, $http) {
$http.get("https://jsonplaceholder.typicode.com/comments")
 .then(function (response) {
   $scope.comments = response.data;
 });

  $scope.editcomment = function(index){ 
   console.log($scope.comments[index]);  
   console.log($scope.comments[index].body); 
 }

 $scope.deletecomment = function(index){
     if($scope.comments.length){
     $scope.comments[index].body='';
 }
  }
});
 
app.controller("UsersController", function ($scope, $http) {
$http.get("https://jsonplaceholder.typicode.com/users")
 .then(function (response) {
   $scope.users = response.data;
 });

 $scope.edituser = function(index){ 
   console.log($scope.users[index]);  
   console.log($scope.users[index].website); 
 }

 $scope.deleteuser = function(index){
     if($scope.users.length){
     $scope.users[index].website='';
 }
  }
});
