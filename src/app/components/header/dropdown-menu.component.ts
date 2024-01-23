
import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { radixHamburgerMenu } from '@ng-icons/radix-icons';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import {
  HlmMenuComponent,
  HlmMenuGroupComponent,
  HlmMenuItemDirective,
  HlmMenuItemIconDirective,
  HlmMenuItemSubIndicatorComponent,
  HlmMenuLabelComponent,
  HlmMenuSeparatorComponent,
  HlmMenuShortcutComponent,
  HlmSubMenuComponent,
} from '@spartan-ng/ui-menu-helm';

@Component({
  selector: 'dropdown-menu',
  standalone: true,
  imports: [
    BrnMenuTriggerDirective,
    HlmMenuComponent,
    HlmSubMenuComponent,
    HlmMenuItemDirective,
    HlmMenuItemSubIndicatorComponent,
    HlmMenuLabelComponent,
    HlmMenuShortcutComponent,
    HlmMenuSeparatorComponent,
    HlmMenuItemIconDirective,
    HlmMenuGroupComponent,
    HlmButtonDirective,
    HlmIconComponent,
  ],
  providers: [ provideIcons({ radixHamburgerMenu})],
  template: `
    <div class="flex w-full items-center justify-center text-white">
      <button hlmBtn variant="ghost" align="end" [brnMenuTriggerFor]="menu" size="icon">
        <hlm-icon size='sm' name="radixHamburgerMenu" />
      </button>
    </div>
    <ng-template #menu>
      <hlm-menu class="min-w-40 bg-white mr-2">
        <hlm-menu-label>Navigation Menu</hlm-menu-label>
        <hlm-menu-separator />
        <hlm-menu-group>
          <button hlmMenuItem>
            <span>Profile</span>
          </button>

          <button hlmMenuItem>
            <span>Billing</span>
          </button>

          <button hlmMenuItem>
            <span>Settings</span>
          </button>
        </hlm-menu-group>

      </hlm-menu>
    </ng-template>

    <ng-template #invite>
      <hlm-sub-menu>
        <button hlmMenuItem>
          <hlm-icon name="radixEnvelopeClosed" hlmMenuIcon />
          Email
        </button>

        <button hlmMenuItem>
          <hlm-icon name="radixChatBubble" hlmMenuIcon />
          Message
        </button>
        <hlm-menu-separator />
        <button hlmMenuItem>
          <hlm-icon name="radixPlusCircled" hlmMenuIcon />
          <span>More</span>
        </button>
      </hlm-sub-menu>
    </ng-template>
  `,
})
export class DropDownMenuComponent {}
