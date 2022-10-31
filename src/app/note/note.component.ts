import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Output() dismiss = new EventEmitter();

  recognition:any;

  id!: number;

  content!: string;

  constructor(private element: ElementRef) { 
    
  }

  ngOnInit(): void {
  }

  close(event: any){
    this.dismiss.emit(event);
  }

  onFocusOut(event: any) {
  }

  record(event: any) {
  }

}
export interface IWindow extends Window {
  webkitSpeechRecognition: any;
}
export interface Note {
  id: number;
  content: string;
}