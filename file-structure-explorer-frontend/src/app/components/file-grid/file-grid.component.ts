import { Component } from '@angular/core';
import {File} from '../../models/file';

@Component({
  selector: 'app-file-grid',
  templateUrl: './file-grid.component.html',
  styleUrls: ['./file-grid.component.scss']
})
export class FileGridComponent {

  files: File[];
  renamedFileId: string;

  constructor() {
    this.files = new Array(20);
    for (let i = 0; i < this.files.length; i++) {
      this.files[i] = {
        icoPath: 'assets\\ico\\folder.png',
        id: i.toString(),
        isFolder: true,
        name: 'Folder'
      };
    }
  }

  onFileRenameRequired(fileId: string) {
    this.renamedFileId = fileId;
  }

  onFileRenameCompleted(file: File) {
    this.renamedFileId = null;
  }

  onFileCopied(file: File) {
    console.log('copied', file);
  }

  onFileDeleted(file: File) {
    console.log('deleted', file);
  }

  onFileCut(file: File) {
    console.log('cut', file);
  }
}
