import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  email=localStorage.getItem('email'); 
  constructor( public router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    
    localStorage.clear();
    this.router.navigate(['/login']);

  }
}
