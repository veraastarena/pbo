 let mahasiswa = new Map();
 mahasiswa.set("22001", { nama: "Andi", jurusan: "Informatika" });
 mahasiswa.set("22002", { nama: "Budi", jurusan: "Sistem Informasi" });
 console.log(mahasiswa.get("22001").nama); // Output: Andi
 console.log(mahasiswa.get("22001").jurusan);

 let tugas = new Set();
 tugas.add("Belajar OOP");
 tugas.add("Mengerjakan Tugas");
 tugas.add("Belajar OOP "); // Tidak akan ditambahkan lagi
 console.log(tugas); // Output: { 'Belajar OOP', 'Mengerjakan Tugas' }
 
 let transaksi = [
   { user: "Andi", jumlah: 50000, kategori: "Makanan" },
   { user: "Budi", jumlah: 75000, kategori: "Transportasi" },
   { user: "Andi", jumlah: 20000, kategori: "Minuman" },
   { user: "Citra", jumlah: 100000, kategori: "Belanja" },
   { user: "Budi", jumlah: 50000, kategori: "Makanan" }
 ];
 console.log([0]).kategori
 
  let totalPerUser = {};
 transaksi.forEach(trx => {
   if (!totalPerUser[trx.user]) {
     totalPerUser[trx.user] = 0;
   }
   totalPerUser[trx.user] += trx.jumlah;
 });
 console.log(totalPerUser);
 // Output: { Andi: 70000, Budi: 125000, Citra: 100000 }
