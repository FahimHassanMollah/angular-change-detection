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
  title = "";
  parent() : void{
    console.log("I am parent component");
  }
  changeTitle() : void{
    this.cf.markForCheck();
    // this.title = "Changed Title";
  }
  ngOnInit(): void {
    setInterval(() => {
      this.title = Math.random().toString();
    }, 2000);
    // setInterval(() => {
    //   let random = Math.random();
    //   console.log(random);
    //   this.arr = [random];
      
    //   // this.arr = [Math.random()];
    //   // this.arr.push(Math.random());
    //   this.cf.markForCheck();


    // }, 3000);


  }
}
