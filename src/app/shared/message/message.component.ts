import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();

  
  constructor() { }

  ngOnInit(): void {
  }
  closeModal() {
    this.closeModalEvent.emit();
  }

}
