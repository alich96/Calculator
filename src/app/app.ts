import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {}
