import { Component, Input } from '@angular/core';
import { DropDownMenuComponent } from './dropdown-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DropDownMenuComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() title = "";
}
