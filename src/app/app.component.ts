import { Component } from '@angular/core';
import { Note, NoteComponent } from './note/note.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
saveAll($event: MouseEvent) {
throw new Error('Method not implemented.');
}

  id: number = 1;

  title = 'notes';
  note : Note = {id: 1, content: "test"};
  notes: Note[] = [this.note];


  addNote() {
    this.notes.push({id: this.id+1, content: ''})
    this.id+=1;
  }

  deleteNote(event: any) {
    const id = event.srcElement.parentElement.parentElement.parentElement.getAttribute('id');
    this.notes.forEach((note, index)=>{
     if(note.id== id) {
       this.notes.splice(index,1);
       localStorage.setItem('notes', JSON.stringify(this.notes));
       console.log("********* deleting note *********")
       return;
     }
   });
  }

  saveNote(event: any) {}
}