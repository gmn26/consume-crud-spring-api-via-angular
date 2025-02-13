import { Component, OnInit } from '@angular/core';
import { BarangService } from '../../../services/barang/barang.service';
import { CommonModule } from '@angular/common';
import { BarangResponse } from '../../../types/barang-interface';

@Component({
  selector: 'app-data-table',
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit {
  barangLists: BarangResponse[] = [];

  constructor(private barangService: BarangService) { }

  ngOnInit() {
    this.barangService.fetchBarang()
      .subscribe({
        next: (response) => {
          console.log("Fetch Barang : ", response);
          this.barangLists = response?.data;
        },
        error: (error) => {
          console.error("Ketika error : ", error);
        }
      })
  }

  deleteBarangAction(id: Number) {
    this.barangService.deleteBarang(id).subscribe({
      next: (response) => {
        console.log("Response : ", response);
        alert("Berhasil menghapus barang");
        this.barangService.fetchBarang()
          .subscribe({
            next: (response) => {
              console.log("Fetch Barang : ", response);
              this.barangLists = response?.data;
            },
            error: (error) => {
              console.error("Ketika error : ", error);
            }
          })
      },
      error: (err) => {
        console.error("Error : ", err);
        alert("Gagal menghapus barang");
      }
    })
  }
}
