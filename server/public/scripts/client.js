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
            url:'/toDoList',
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

//Delete tasks
vm.deleteTask = function (taskId) {
    $http({
        method: 'DELETE',
        url:'/toDoList/'+taskId
    }).then(function (response){
        console.log('Task gone');
        getLists();
    }).catch(function(error){
        console.log('Task not deleted', error);
        alert('Unable to Delete Task', error);        
    });
}

//Auto Populate DOM 
getLists()

//completed tasks
vm.taskFinished = function (taskId){
    $http({
        method:'PUT',
        url:'/toDoList/'+taskId
    }).then(function(response){
        getLists();
    }).catch(function(response){
        console.log('unable to change entry');
        alert('unable to change entry');    
    })
}





})//end controller