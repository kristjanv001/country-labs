import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { DecimalPipe } from '@angular/common';
import {
  HlmCaptionComponent,
  HlmTableComponent,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent,
} from "@spartan-ng/ui-table-helm";

import { CardComponent } from "../../ui/card.component";
import { CountryService } from "../../core/services/country.service";

@Component({
  selector: "app-detailed-info",
  standalone: true,
  imports: [
    HlmTableComponent,
    HlmTrowComponent,
    HlmThComponent,
    HlmTdComponent,
    HlmCaptionComponent,
    CardComponent,
    DecimalPipe
  ],
  host: { class: "w-full overflow-x-auto" },
  templateUrl: "./detailed-info.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush, // 👈
})
export class DetailedInfoComponent {
  country = inject(CountryService).country;
}
