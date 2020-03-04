import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-resizer',
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.scss']
})
export class ResizerComponent {
  @Input() resizableElement: HTMLElement;

  onMouseDown(e: MouseEvent) {
    const elem = this.resizableElement;

    function onMouseMove(event: MouseEvent) {
      if (event.clientX > 0) {
        elem.setAttribute('style', `width: ${event.clientX}px`);
      }
    }

    function onMouseUp(event) {
      document.documentElement.removeEventListener('mousemove', onMouseMove, false);
      document.documentElement.removeEventListener('mouseup', onMouseUp, false);
    }

    document.documentElement.addEventListener('mousemove', onMouseMove, false);
    document.documentElement.addEventListener('mouseup', onMouseUp, false);
  }

}
