import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  host: { class: 'cg-2-10-0' },
})
export class AccordionComponent {
  constructor(private changeDetector: ChangeDetectorRef) {}
}
