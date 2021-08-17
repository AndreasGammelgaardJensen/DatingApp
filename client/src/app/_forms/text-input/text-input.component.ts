import { Component, OnInit, Input, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() lable : string;
  @Input() type = 'text';

  constructor(@Self() public ngControle : NgControl) { 
    this.ngControle.valueAccessor = this;
  } // Using self tag to make the component selfcontained
  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }
  

  

}
