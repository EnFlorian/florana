import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  window = window;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  navbarScroll = () => {
    const navbar = document.querySelector('.navbar');

    if (document.documentElement.scrollTop > 20) {
      navbar?.classList.add('navbar--scrolling');
    } else {
      navbar?.classList.remove('navbar--scrolling');
    }
  };
}
