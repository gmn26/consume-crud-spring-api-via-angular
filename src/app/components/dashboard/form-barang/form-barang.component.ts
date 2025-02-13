import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BarangService } from '../../../services/barang/barang.service';
import { CreateBarangDto } from '../../../types/barang-interface';

@Component({
  selector: 'app-form-barang',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-barang.component.html',
  styleUrl: './form-barang.component.css'
})
export class FormBarangComponent {
  barangService = inject(BarangService);

  barangForm = new FormGroup({
    kodeBarang: new FormControl(''),
    namaBarang: new FormControl(''),
    jumlahStok: new FormControl(''),
    hargaSatuan: new FormControl('')
  })

  addBarangAction() {
    const createBarangDto: CreateBarangDto = {
      kodeBarang: this.barangForm.value.kodeBarang ?? '',
      namaBarang: this.barangForm.value.namaBarang ?? '',
      jumlahStok: parseInt(this.barangForm.value.jumlahStok ?? '') || 0,
      hargaSatuan: parseInt(this.barangForm.value.hargaSatuan ?? '') || 0,
    };

    this.barangService.addBarang(createBarangDto).subscribe({
      next: (response) => {
        console.log("Response : ", response);
        this.barangForm.reset();
        alert("Berhasil menambahkan barang");
      },
      error: (err) => {
        console.error("Error : ", err);
        alert("Gagal menambahkan barang");
      }
    });
  }
}
