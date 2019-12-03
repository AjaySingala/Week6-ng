import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos;
  albumId;

  constructor(private photosService: PhotosService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.albumId = this.route.snapshot.params.albumId;
    console.log(this.albumId);
    this.photos = this.photosService.getPhotos(this.albumId);
    
    // this.photosService.getPhotos(this.albumId).subscribe(pics =>
    //   {
    //     this.photos = pics;
    //     console.log('pics', pics);
    //   });
    console.log('photos', this.photos);
  }

}
