import {AfterViewChecked, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';
import {File} from '../../models/file';

@Component({
  selector: 'app-file-grid-item',
  templateUrl: './file-grid-item.component.html',
  styleUrls: ['./file-grid-item.component.scss']
})
export class FileGridItemComponent implements AfterViewChecked {
  @Input() file: File;
  @Input() isRenameMode = false;

  @Output() renameRequired = new EventEmitter<string>();
  @Output() renameCompleted = new EventEmitter<File>();
  @Output() renameCancelled = new EventEmitter();

  @ViewChild('renameInput', {static: false}) renameInput: ElementRef;

  updatedName: string;

  constructor(private el: ElementRef) {

  }

  @HostListener('keydown.enter') completeRename() {
    // todo check for some invalid inputs
    if (this.isRenameMode) {
      this.file.name = this.updatedName;
      this.renameCompleted.emit(this.file);
    }
  }

  @HostListener('document:click', ['$event']) documentClicked(event: Event) {
    const isInternalClick = !!event.composedPath().find((path: EventTarget) => path === this.el.nativeElement);
    if (!isInternalClick) {
      this.cancelRename();
    }
  }

  @HostListener('keydown.escape') cancelRename() {
    if (this.isRenameMode) {
      this.renameCancelled.emit();
    }
  }

  ngAfterViewChecked(): void {
    if (this.isRenameMode) {
      this.renameInput.nativeElement.focus();
    }
  }

  rename(): void {
    this.updatedName = this.file.name;
    this.renameRequired.emit(this.file.id);
  }
}
