import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MyApiServiceService } from '../service/my-api-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { product } from '../interface/products';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'price', 'category', 'rate'];
  dataSource!: MatTableDataSource<product>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  subscription:Subscription = new Subscription()
  sort!: MatSort;
  constructor(private myApi: MyApiServiceService) { }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.myApi.GetAllProducts().subscribe((v: product[]) => {
      if (v) {
        this.dataSource = new MatTableDataSource(v);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
   
      }
    })
  }

}
