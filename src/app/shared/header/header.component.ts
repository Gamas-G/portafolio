import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.css',
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    standalone:true
})

export class HeaderComponent implements OnInit {
    
  constructor() { }

  ngOnInit() { }
}