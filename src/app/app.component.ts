import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navegação', url: 'navegacao', icon: 'paper-plane' },
    { title: 'Botões', url: 'botoes', icon: 'construct' },
    { title: 'Alerta', url: 'alerta', icon: 'alert' },
    { title: 'Action-Sheet', url: 'actions', icon: 'construct' },
    { title: 'Badge', url: 'badge', icon: 'construct' },
    { title: 'Cards', url: 'card', icon: 'construct' },
    { title: 'Checkbox', url: 'checkbox', icon: 'construct' },
    { title: 'Chip', url: 'chip', icon: 'construct' },
    { title: 'Content', url: 'content', icon: 'construct' },
    { title: 'DateTime', url: 'datetime', icon: 'construct' },
    { title: 'FAB', url: 'fab', icon: 'construct' },
    { title: 'Grid', url: 'grid', icon: 'construct' },
    { title: 'Infinite Scroll', url: 'infinitescroll', icon: 'construct' },
    { title: 'Input', url: 'input', icon: 'construct' },
    { title: 'List', url: 'list', icon: 'construct' },
    { title: 'Progress Bar', url: 'progressbar', icon: 'construct' },
    { title: 'Refresher', url: 'refresher', icon: 'construct' },
    { title: 'Reorder', url: 'reorder', icon: 'construct' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }
}
