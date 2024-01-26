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
      <div class=" mt-6 z-10 w-full md:max-w-[900px] md:absolute top-4 md:px-6">
        <spartan-card>
          <hlm-table class="w-full text-xs">
            <hlm-trow class="">
              <hlm-th class="text-left w-24 font-bold">Time</hlm-th>
              <hlm-th class="flex-1 text-left font-bold">Destination</hlm-th>
              <hlm-th class="text-right font-bold">Status</hlm-th>
            </hlm-trow>
            @for (invoice of _invoices; track invoice.invoice) {
            <hlm-trow class="">
              <hlm-td class="text-left w-24">{{ invoice.invoice }}</hlm-td>
              <hlm-td class="flex-1 text-left">{{
                invoice.paymentStatus
              }}</hlm-td>
              <hlm-td class="text-right">{{ invoice.paymentMethod }}</hlm-td>
            </hlm-trow>
            }
          </hlm-table>
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
