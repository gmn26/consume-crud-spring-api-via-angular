export interface BarangResponse {
  id: String;
  kodeBarang: String;
  namaBarang: String;
  jumlahStok: Number;
  hargaSatuan: Number;
  tanggalMasuk: Date;
  idUser: String;
}
export interface CreateBarangDto {
  kodeBarang: String,
  namaBarang: String,
  jumlahStok: Number,
  hargaSatuan: Number
}
