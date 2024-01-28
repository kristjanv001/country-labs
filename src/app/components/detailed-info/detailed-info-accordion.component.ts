import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { BrnAccordionContentComponent } from '@spartan-ng/ui-accordion-brain';
import {
  HlmAccordionContentDirective,
  HlmAccordionDirective,
  HlmAccordionIconDirective,
  HlmAccordionItemDirective,
  HlmAccordionTriggerDirective,
} from '@spartan-ng/ui-accordion-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';

import { CountryService } from "../../core/services/country.service";

	@Component({
	selector: 'app-detailed-info-accordion',
	standalone: true,
	imports: [
		BrnAccordionContentComponent,
		HlmAccordionDirective,
		HlmAccordionItemDirective,
		HlmAccordionTriggerDirective,
		HlmAccordionContentDirective,
		HlmAccordionIconDirective,
		HlmIconComponent,
	],
	templateUrl: "./detailed-info-accordion.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush, // 👈
})
export class DetailedInfoAccordionComponent {
  country = inject(CountryService).country;
}
