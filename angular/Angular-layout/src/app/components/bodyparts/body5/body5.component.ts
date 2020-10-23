import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-body5',
  templateUrl: './body5.component.html',
  styleUrls: ['./body5.component.scss']
})
export class Body5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
    $(document).ready(function(){
      $(".slider").bxSlider({
        slideWidth: 10000,
        mode: 'fade',
        captions: true,
      });
  });
  }

}
