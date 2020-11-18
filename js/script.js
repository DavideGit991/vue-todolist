



var app =new Vue(
{
 el:"#app",
 data:
 {
  input:'',
  toDoList:[]
 },
 methods:
 {
  addToDo(todo)
  {
  todo = this.input;
  this.toDoList.push({name:todo});
  this.input = '';
  console.log(this.toDoList);
  }
}






}
);
