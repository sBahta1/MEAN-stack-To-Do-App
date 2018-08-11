console.log('js');

const myApp = angular.module( 'myApp', [] );
myApp.controller( 'HoneyController', function($http){
    let vm = this;
    vm.toDoArr = [];
    
    
//POST FUNCTION
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
           getLists()
        }).catch(function(error){
            alert('Unable to add task',error);
            console.log(error);  
        });
    }//end vm.submitNewTask

//GET FUNCTION
function getLists() {
    $http({
        method: 'GET',
        url:'/ToDoList'
    }).then(function( response ){
        console.log( 'Back from server with:', response.data );
        vm.toDoArr = response.data
    }).catch(function(error){
        alert('Unable to get Lists', error);
    });
}

//Populate DOM 
getLists()







})