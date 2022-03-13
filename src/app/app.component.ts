import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tallerPWAOpenWebinars';

  constructor(private swUpdate: SwUpdate) {
      if (this.swUpdate.isEnabled) {
          this.swUpdate.available.subscribe((event) => {
              if (
                  confirm(
                      'Existe una nueva actualización, ¿desea instalar dicha versión?'
                  )
              ) {
                  window.location.reload();
              }
          });
      }
  }
}
