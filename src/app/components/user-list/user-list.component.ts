import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AfterViewInit, Component, EventEmitter, Injectable, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'; import { User } from '../../services/user.service';
import { Subject } from 'rxjs';
import { RouterLink } from '@angular/router';
;

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatFormFieldModule , RouterLink],
  providers: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements AfterViewInit, OnInit, OnChanges {
  @Input() data: any;
  @Output() paginatorEvent = new EventEmitter<PageEvent>();

  displayedColumns: string[] = ['id', 'name', 'email', 'avatar'];
  users!: User[];
  dataSource!: MatTableDataSource<User>;




  constructor(private _liveAnnouncer: LiveAnnouncer) { }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.users = [...this.data.data];
      this.dataSource = new MatTableDataSource(this.users);
    }
  }



  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.paginator.length = this.data.total;
    this.dataSource.sort = this.sort;
  }

  filterChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  handlePage(event: PageEvent): void {
    this.paginatorEvent.emit(event);
  }

}
