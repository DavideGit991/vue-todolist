// Features principali:
// un input permette all’utente di scrivere una “cosa da fare”;
// un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.
// BONUS possibili: (come sempre se avete finito, ottimizzato e capito tutto il resto, e in caso metterete in sottocartella nel repo):
// dò la possibilità anche di inserire la nuova “cosa da fare”, scritta nell’input anche con la pressione del tasto ‘enter’ da tastiera;
// l’utente non può inserire più volte la stessa “cosa da fare”;
// etc. etc… quello che vi intriga di più da provare.

var app =new Vue(
{
 el:"#app",
 data:
 {
  input:'',
  toDoList:[],
  toDoListComplete:[]
 },
 methods:
 {
  addToDo()
  {
  todo = this.input;
  this.toDoList.push({name:todo, complete:false});
  this.input = '';
  // console.log(this.toDoList);
  },
  removeToDo(item,i)
  {
    let index = this.toDoListComplete.indexOf(item.name);
    this.toDoList.splice(i,1);
    this.toDoListComplete.splice(index,1);
    console.log("lista completati: ", this.toDoListComplete);
  },
  toggle(item,i)
  {
     let index = this.toDoListComplete.indexOf(item.name);
     item.complete = !item.complete;
     (item.complete===true)? this.toDoListComplete.push(item) : this.toDoListComplete.splice(index);

     console.log("lista completati: ",this.toDoListComplete);
  },
  removeComplete()
  {

  }
 }
}
);
