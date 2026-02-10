import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const signUpButton = document.getElementById('signUp') as HTMLButtonElement;
    const signInButton = document.getElementById('signIn') as HTMLButtonElement;
    const container = document.getElementById('container') as HTMLDivElement;

    // Evento para abrir form de registro
    signUpButton.addEventListener('click', () =>
      container.classList.add('right-panel-active')
    );

    // Evento para regresar al form de iniciar sesión
    signInButton.addEventListener('click', () =>
      container.classList.remove('right-panel-active')
    );
    }
  }