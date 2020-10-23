import { Component, OnInit} from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-body6',
  templateUrl: './body6.component.html',
  styleUrls: ['./body6.component.scss']
})
export class Body6Component implements OnInit {
  constructor() { }

  ngOnInit(): void {
    $(".slider").bxSlider({
      slideWidth: 10000,
      mode: 'fade',
      captions: true,
    });
    $('.bx-wrapper .bx-controls-direction a').hide();
}
}
