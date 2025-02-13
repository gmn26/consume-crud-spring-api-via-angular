import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from "../../../components/dashboard/data-table/data-table.component";
import { BarangResponse } from '../../../types/barang-interface';
import { FormBarangComponent } from "../../../components/dashboard/form-barang/form-barang.component";

@Component({
  selector: 'app-dashboard-home',
  imports: [CommonModule, DataTableComponent, FormBarangComponent],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {
  barangLists: BarangResponse[] = [];
  active: String = "List";

  constructor() { }

  changeContent(name: String) {
    this.active = name;
  }
}
