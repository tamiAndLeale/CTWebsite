import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-document',
  templateUrl: './new-document.component.html',
  styleUrls: ['./new-document.component.css']
})
export class NewDocumentComponent implements OnInit {
  now:Date=new Date();
  newDocumentForm!:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  
 
  }
  


