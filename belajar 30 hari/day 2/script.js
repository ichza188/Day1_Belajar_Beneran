// Mengambil elemen dari HTML berdasarkan ID
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function tambahTugas() {
    // 1. Cek apakah kolom input kosong?
    if (inputBox.value === '') {
        alert("Kamu harus menulis sesuatu!");
    } 
    else {
        // 2. Jika ada isinya, buat elemen <li> baru (list item)
        let li = document.createElement("li");
        
        // Isi teks <li> dengan apa yang diketik user
        li.innerHTML = inputBox.value;
        
        // Masukkan <li> baru ini ke dalam <ul> (listContainer)
        listContainer.appendChild(li);

        // 3. Tambahkan tombol silang (x) di samping tugas
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Kode unik untuk simbol silang (×)
        li.appendChild(span);
        
        simpanData();
    }
    
    // 4. Kosongkan kembali kolom input setelah tombol ditekan
    inputBox.value = "";
}

// Menambahkan "Telinga" (Event Listener) ke seluruh area List
listContainer.addEventListener("click", function(e) {
    
    // Jika yang diklik adalah tulisan tugas (LI)
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Tambah/Hapus class 'checked'
        simpanData();
    }
    // Jika yang diklik adalah tombol silang (SPAN)
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Hapus bapaknya elemen ini (si LI tadi)
        simpanData();
    }

}, false);

inputBox.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        tambahTugas();
    }

});

function simpanData() {
    localStorage.setItem("data-tugas", listContainer.innerHTML);
}

function tampilkanData() {
    listContainer.innerHTML = localStorage.getItem("data-tugas");
}

tampilkanData();
