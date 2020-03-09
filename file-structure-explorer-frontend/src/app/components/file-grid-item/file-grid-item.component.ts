import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-file-grid-item',
  templateUrl: './file-grid-item.component.html',
  styleUrls: ['./file-grid-item.component.scss']
})
export class FileGridItemComponent implements OnInit {
  @Input() imagePath: string;
  @Input() fileName: string;

  constructor() { }

  ngOnInit() {
  }
}
