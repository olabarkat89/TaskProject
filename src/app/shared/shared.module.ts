import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule} from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import { NgbDatepickerModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageComponent } from './message/message.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StarRatingComponent } from './star-rating/star-rating.component';


export const MatrialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatRadioModule,
 MatPaginatorModule,
  MatFormFieldModule,
  MatTableModule,
  MatInputModule,
   MatTabsModule,
 
]

export const SharedComponents = [
 
]


@NgModule({
  declarations: [
    SharedComponents,
    MessageComponent,
    StarRatingComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
      RouterModule,
    MatrialComponents,
    NgbDatepickerModule,
    NgbTooltipModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    RouterModule,
    MatrialComponents,
    NgbDatepickerModule,
    NgbTooltipModule,
    MessageComponent,
    StarRatingComponent,
    
  ]
})
export class SharedModule { }
