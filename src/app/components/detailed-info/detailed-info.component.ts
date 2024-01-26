import { Component } from '@angular/core';
import {
  HlmCaptionComponent,
  HlmTableComponent,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent,
} from '@spartan-ng/ui-table-helm';

import { CardComponent } from '../../ui/card.component';

@Component({
  selector: 'app-detailed-info',
  standalone: true,
  imports: [
    HlmTableComponent,
    HlmTrowComponent,
    HlmThComponent,
    HlmTdComponent,
    HlmCaptionComponent,
    CardComponent,
  ],
  host: {
    class: 'w-full overflow-x-auto',
  },
  template: `
    <div class="px-6 flex justify-center">
      <div class=" mt-6 md:mt-8 z-10 w-full md:max-w-[900px] md:absolute top-4 md:px-6">
        <spartan-card>
          <p>hello</p>
        </spartan-card>
      </div>
    </div>
  `,
})
export class DetailedInfoComponent {
  protected _invoices = [
    {
      invoice: 'INV001',
      paymentStatus: 'Oslo',
      paymentMethod: 'scheduled',
    },
    {
      invoice: 'INV002',
      paymentStatus: 'Helsinki',
      paymentMethod: 'sceduled',
    },
    {
      invoice: 'INV003',
      paymentStatus: 'Tallinn',
      paymentMethod: 'delayed',
    },
  ];



}
