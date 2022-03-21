import { Component, OnInit } from '@angular/core';
import { Router ,Routes} from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
  
})
export class AdminHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
