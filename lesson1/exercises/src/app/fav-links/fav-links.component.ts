import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.aquatic-gardeners.org/', 'https://www.kew.org']
  constructor() { }

  ngOnInit() {
  }

}
