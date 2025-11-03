import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  // Modal visibility

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  closeIfOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.id === 'contactModal') {
      this.closeModal();
    }
  }
}
