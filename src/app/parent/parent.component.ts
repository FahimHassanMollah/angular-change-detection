import { ChangeDetectionStrategy, Component,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
  constructor(private cf: ChangeDetectorRef) { }

  arr : number[]  = [];
  parent() : void{
    console.log("I am parent component");
  }
  ngOnInit(): void {
    setInterval(() => {
      this.arr = [Math.random()];
      // this.arr.push(Math.random());
      this.cf.detectChanges();


    }, 3000);


  }
}
