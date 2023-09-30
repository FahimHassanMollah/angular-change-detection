import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ChildComponent {
  @Input() arr: any;
  constructor(private cf: ChangeDetectorRef) { }
  number = 0;
  child() : void{
    console.log("I am child component");
  }
  ngOnInit(): void {
    setInterval(() => {
      this.number = Math.random();
      // this.cf.markForCheck();
    }, 3000);
  }
}
