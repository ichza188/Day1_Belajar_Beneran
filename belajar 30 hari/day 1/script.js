const tombol = document.getElementById("tombol-ganti");
const halaman = document.body;

// Cek apakah tombol benar-benar ditemukan (untuk debugging)
if (tombol) {
    console.log("Tombol ditemukan! Siap beraksi.");
} else {
    console.log("Error: Tombol tidak ditemukan. Cek ID di HTML.");
}

tombol.addEventListener("click", function() {
    // Tampilkan pesan di Console browser setiap diklik
    console.log("Tombol diklik!"); 
    
    // Toggle: Kalau class 'mode-gelap' belum ada, tambahkan.
    // Kalau sudah ada, hapus.
    halaman.classList.toggle("mode-gelap");
});