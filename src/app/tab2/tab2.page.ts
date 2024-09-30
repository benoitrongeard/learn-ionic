import { Component, inject, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { camera } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonImg,
    IonCol,
    IonRow,
    IonGrid,
    IonIcon,
    IonFabButton,
    IonFab,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
  ],
})
export class Tab2Page implements OnInit {
  cameraService = inject(CameraService);

  constructor() {
    addIcons({ camera });
  }

  async ngOnInit() {
    await this.cameraService.loadSaved();
  }

  addPhotoToGallery() {
    this.cameraService.addNewToGallery();
  }
}
