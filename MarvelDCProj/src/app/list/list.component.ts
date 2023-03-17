import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() characters;

  constructor() { }

  customeTB(index, char) {
    console.log(char.name)
    return char.name;
  }

  ngOnInit(): void {
  }

}
