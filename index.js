class Mahasiswa {
    constructor(nim, nama) {
        this.nim = nim;
        this.nama = nama;
        this.hadir = false;
    }

    absenHadir() {
        this.hadir = true;
    }
}

class ManajemenAbsensi {
    constructor() {
        this.daftarMahasiswa = [];
    }

    tambahMahasiswa(mahasiswa) {
        this.daftarMahasiswa.push(mahasiswa);
    }

    renderTabel() {
        const tbody = document.getElementById("tabel-mahasiswa");
        tbody.innerHTML = "";

        this.daftarMahasiswa.forEach((mhs, index) => {
            const statusText = mhs.hadir ? "Hadir" : "Belum Hadir";
            const statusClass = mhs.hadir ? "status-hadir" : "status-belum";
            const tombolDisabled = mhs.hadir ? "disabled" : "";

            const row = `
                <tr>
                    <td>${mhs.nim}</td>
                    <td>${mhs.nama}</td>
                    <td class="${statusClass}">${statusText}</td>
                    <td>
                        <button ${tombolDisabled} onclick="absenMahasiswa(${index})">
                            ${mhs.hadir ? "Selesai" : "Absen Hadir"}
                        </button>
                    </td>
                </tr>
            `;

            tbody.innerHTML += row;
        });
    }

    prosesAbsen(index) {
        this.daftarMahasiswa[index].absenHadir();
        this.renderTabel();
    }
}

const appAbsensi = new ManajemenAbsensi();

appAbsensi.tambahMahasiswa(new Mahasiswa("230001", "Andi"));
appAbsensi.tambahMahasiswa(new Mahasiswa("230002", "Budi"));
appAbsensi.tambahMahasiswa(new Mahasiswa("230003", "Citra"));

function absenMahasiswa(index) {
    appAbsensi.prosesAbsen(index);
}

appAbsensi.renderTabel();
