import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showpara',
  templateUrl: './showpara.component.html',
  styleUrls: ['./showpara.component.scss']
})
export class ShowparaComponent implements OnInit {

  isShow= true ;

  constructor() { }

  ngOnInit(): void {
  }

  showHide(){
    this.isShow = ! this.isShow
  }

}
