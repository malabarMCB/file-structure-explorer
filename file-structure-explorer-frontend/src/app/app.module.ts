import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatTreeModule} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { FileTreeComponent } from './components/file-tree/file-tree.component';
import { ScrollableContainerComponent } from './components/scrollable-container/scrollable-container.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { FileGridComponent } from './components/file-grid/file-grid.component';
import { FileGridItemComponent } from './components/file-grid-item/file-grid-item.component';
import { ResizerComponent } from './components/resizer/resizer.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FileTreeComponent,
    ScrollableContainerComponent,
    ControlPanelComponent,
    FileGridComponent,
    FileGridItemComponent,
    ResizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
