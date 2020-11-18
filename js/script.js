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
 },
 methods:
 {
  addToDo(todo)
  {
  todo = this.input;
  this.toDoList.push({name:todo});
  this.input = '';
  console.log(this.toDoList);
  },
  removeToDo(item)
  {
    let index = this.toDoList.indexOf(item);
    this.toDoList.splice(index,1);
    console.log(this.toDoList);
  }
}

}
);
