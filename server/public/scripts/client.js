console.log('js');

const myApp = angular.module( 'myApp', [] );
myApp.controller( 'HoneyController', function($http){
    let vm = this;
    vm.toDoArr = [];
    
    vm.submitNewTask = function () {
        let newTask = {
            task: vm.newTaskInput,
            completed: false
        }
        console.log('this is your new task', newTask);
        $http({
            method:'POST',
            url:'/ToDoList',
            data:newTask
        }).then(function(response){
            console.log('Success!',response.data);
            //GET FUNCTION  GOES HERE
        }).catch(function(error){
            alert('Unable to add task',error);
            console.log(error);  
        });
    }//end vm.submitNewTask











})