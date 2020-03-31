import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-static',
  templateUrl: './modal-static.component.html',
  styleUrls: ['./modal-static.component.scss']
})
export class ModalStaticComponent implements OnInit {
  @Input('titleForModal') title;
  @Output('closeModal') onClose = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
