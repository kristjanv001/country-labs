
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { provideIcons } from '@ng-icons/core';
import { radixChevronRight } from '@ng-icons/radix-icons';
import { radixHamburgerMenu } from '@ng-icons/radix-icons';

@Component({
  selector: 'menu-btn',
  standalone: true,
  imports: [HlmButtonDirective, HlmIconComponent],
  providers: [provideIcons({ radixHamburgerMenu })],
  template: ` <button hlmBtn  size="icon"><hlm-icon size='sm' name="radixHamburgerMenu" /></button> `,
})
export class MenuButtonComponent {}
