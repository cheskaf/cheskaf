import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = '';
  @Input() onClose: () => void = () => {};

  closeModal() {
    this.isOpen = false;
    this.onClose();
  }

  openModal() {
    this.isOpen = true;
  }
}
