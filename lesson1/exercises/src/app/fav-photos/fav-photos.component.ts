import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo Favorites';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://images.pexels.com/photos/3626111/pexels-photo-3626111.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';
  image3 = 'https://images.pexels.com/photos/668867/pexels-photo-668867.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

  constructor() { }

  ngOnInit() {
  }

}