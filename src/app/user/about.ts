import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos'; // import AOS
import 'aos/dist/aos.css';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class AboutComponent implements OnInit {  // implement OnInit
  ngOnInit(): void {
    AOS.init({  // initialize AOS
      duration: 1000, // animation duration in ms
      easing: 'ease-in-out', // easing style
      once: true, // animation occurs only once
    });
  }
}
