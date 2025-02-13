import { Component, OnInit } from '@angular/core';
import { BarangService } from '../../../services/barang/barang.service';
import { CommonModule } from '@angular/common';
import { BarangResponse, CreateBarangDto } from '../../../types/barang-interface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-table',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit {
  barangLists: BarangResponse[] = [];
  editMode: Boolean = false;
  editedId: Number | null = null;

  constructor(private barangService: BarangService) { }

  barangForm = new FormGroup({
    kodeBarang: new FormControl(''),
    namaBarang: new FormControl(''),
    jumlahStok: new FormControl(''),
    hargaSatuan: new FormControl('')
  })

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

  editModeAction(val: Boolean, id: Number | null, barangList: BarangResponse | null) {
    this.editMode = val;
    this.editedId = id;

    if (barangList != null) {
      this.barangForm.patchValue({
        kodeBarang: barangList.kodeBarang,
        namaBarang: barangList.namaBarang,
        jumlahStok: barangList.jumlahStok.toString(),
        hargaSatuan: barangList.hargaSatuan.toString(),
      })
    }
  }

  editBarangAction(id: Number) {
    const createBarangDto: CreateBarangDto = {
      kodeBarang: this.barangForm.value.kodeBarang ?? '',
      namaBarang: this.barangForm.value.namaBarang ?? '',
      jumlahStok: parseInt(this.barangForm.value.jumlahStok ?? '') || 0,
      hargaSatuan: parseInt(this.barangForm.value.hargaSatuan ?? '') || 0,
    };

    this.barangService.editBarang(id, createBarangDto).subscribe({
      next: (response) => {
        console.log("Response : ", response);
        alert("Berhasil edit barang");
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
        this.editMode = false;
        this.editedId = null;
      },
      error: (err) => {
        console.error("Error : ", err);
        alert("Gagal edit barang");
        this.editMode = false;
        this.editedId = null;
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
