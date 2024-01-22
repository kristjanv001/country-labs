import { Component, Input } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { radixBell, radixCheck } from '@ng-icons/radix-icons';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'spartan-card',
  standalone: true,
  imports: [
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmIconComponent,
  ],
  providers: [provideIcons({ radixCheck, radixBell })],
  template: `
    <section hlmCard class="bg-white h-72">
      @if (title) {
        <div hlmCardHeader>
          <h3 hlmCardTitle>{{title}}</h3>
          <p hlmCardDescription>{{subTitle}}</p>
        </div>
      }
      <div hlmCardContent class="grid gap-4">
        <ng-content />
      </div>
      <div hlmCardFooter class="justify-between"></div>
    </section>
  `,
})
export class CardComponent {
  @Input() title?: string;
  @Input() subTitle?: string;
}
