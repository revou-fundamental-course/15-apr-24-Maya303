document.addEventListener("DOMContentLoaded", function () {
  const inputNilaiSuhu = document.getElementById("input-nilai-suhu");
  const hasilOperasi = document.getElementById("hasil-operasi");
  const opt1 = document.getElementById("opt-1");
  const opt2 = document.getElementById("opt-2");
  const reverseButton = document.getElementById("reverseButton");
  const konversiButton = document.querySelector(".konversi-button");
  const explainTextArea = document.getElementById("explain");

  // Menghitung konversi suhu
  function hitungKonversi() {
    const nilaiAwal = parseFloat(inputNilaiSuhu.value);
    const satuanAwal = opt1.value;
    const satuanTujuan = opt2.value;

    let hasil;
    let rumus;

    if (isNaN(nilaiAwal)) {
      // Jika input kosong, hasil dan rumus jadi kosong
      hasil = "";
      rumus = "";
    } else {
        // OPERASI MENGHITUING SUHU DAN MENAMPILKAN RUMUS ATAU PENJELASAN DARI HASIL OPERASI HITUNG
      if (satuanAwal === satuanTujuan) {
        rumus = none;
        alert("Satuan suhu tidak boleh sama!");
        return;
      } else if (satuanAwal === "celcius" && satuanTujuan === "fahrenheit") {
        hasil = (nilaiAwal * 9 / 5) + 32;
        rumus = `(${nilaiAwal}°C * 9/5) + 32 = ${hasil.toFixed(2)}°F`;

      } else if (satuanAwal === "celcius" && satuanTujuan === "kelvin") {
        hasil = nilaiAwal + 273.15;
        rumus = `${nilaiAwal}°C + 273.15 = ${hasil.toFixed(2)}K`;

      } else if (satuanAwal === "celcius" && satuanTujuan === "reamur") {
        hasil = nilaiAwal * 4 / 5;
        rumus = `${nilaiAwal}°C * 4/5 = ${hasil.toFixed(2)}°R`;

      } else if (satuanAwal === "celcius" && satuanTujuan === "rankine") {
        hasil = ((nilaiAwal + 273.15) * 9) / 5;
        rumus = `(${nilaiAwal}°C + 273.15) * 9/5 = ${hasil.toFixed(2)}°Ra`;

      } else if (satuanAwal === "fahrenheit" && satuanTujuan === "celcius") {
        hasil = ((nilaiAwal - 32) * 5) / 9;
        rumus = `(${nilaiAwal}°F - 32) * 5/9 = ${hasil.toFixed(2)}°C`;

      } else if (satuanAwal === "fahrenheit" && satuanTujuan === "kelvin") {
        hasil = ((nilaiAwal + 459.67) * 5) / 9;
        rumus = `(${nilaiAwal}°F + 459.67) * 5/9 = ${hasil.toFixed(2)}K`;

      } else if (satuanAwal === "fahrenheit" && satuanTujuan === "reamur") {
        hasil = ((nilaiAwal - 32) * 4) / 9;
        rumus = `(${nilaiAwal}°F - 32) * 4/9 = ${hasil.toFixed(2)}°R`;

      } else if (satuanAwal === "fahrenheit" && satuanTujuan === "rankine") {
        hasil = nilaiAwal + 459.67;
        rumus = `${nilaiAwal}°F + 459.67 = ${hasil.toFixed(2)}°Ra`;

      } else if (satuanAwal === "kelvin" && satuanTujuan === "celcius") {
        hasil = nilaiAwal - 273.15;
        rumus = `${nilaiAwal}K - 273.15 = ${hasil.toFixed(2)}°C`;

      } else if (satuanAwal === "kelvin" && satuanTujuan === "fahrenheit") {
        hasil = (nilaiAwal * 9) / 5 - 459.67;
        rumus = `(${nilaiAwal}K * 9/5) - 459.67 = ${hasil.toFixed(2)}°F`;

      } else if (satuanAwal === "kelvin" && satuanTujuan === "reamur") {
        hasil = ((nilaiAwal - 273.15) * 4) / 5;
        rumus = `(${nilaiAwal}K - 273.15) * 4/5 = ${hasil.toFixed(2)}°R`;

      } else if (satuanAwal === "kelvin" && satuanTujuan === "rankine") {
        hasil = (nilaiAwal * 9) / 5;
        rumus = `${nilaiAwal}K * 9/5 = ${hasil.toFixed(2)}°Ra`;

      } else if (satuanAwal === "reamur" && satuanTujuan === "celcius") {
        hasil = (nilaiAwal * 5) / 4;
        rumus = `${nilaiAwal}°R * 5/4 = ${hasil.toFixed(2)}°C`;

      } else if (satuanAwal === "reamur" && satuanTujuan === "fahrenheit") {
        hasil = (nilaiAwal * 9) / 4 + 32;
        rumus = `(${nilaiAwal}°R * 9/4) + 32 = ${hasil.toFixed(2)}°F`;

      } else if (satuanAwal === "reamur" && satuanTujuan === "kelvin") {
        hasil = (nilaiAwal * 5) / 4 + 273.15;
        rumus = `(${nilaiAwal}°R * 5/4) + 273.15 = ${hasil.toFixed(2)}K`;

      } else if (satuanAwal === "reamur" && satuanTujuan === "rankine") {
        hasil = (nilaiAwal * 9) / 4 + 491.67;
        rumus = `(${nilaiAwal}°R * 9/4) + 491.67 = ${hasil.toFixed(2)}°Ra`;

      } else if (satuanAwal === "rankine" && satuanTujuan === "celcius") {
        hasil = ((nilaiAwal - 491.67) * 5) / 9;
        rumus = `(${nilaiAwal}°Ra - 491.67) * 5/9 = ${hasil.toFixed(2)}°C`;

      } else if (satuanAwal === "rankine" && satuanTujuan === "fahrenheit") {
        hasil = nilaiAwal - 459.67;
        rumus = `${nilaiAwal}°Ra - 459.67 = ${hasil.toFixed(2)}°F`;

      } else if (satuanAwal === "rankine" && satuanTujuan === "kelvin") {
        hasil = (nilaiAwal * 5) / 9;
        rumus = `${nilaiAwal}°Ra * 5/9 = ${hasil.toFixed(2)}K`;

      } else if (satuanAwal === "rankine" && satuanTujuan === "reamur") {
        hasil = ((nilaiAwal - 491.67) * 4) / 9;
        rumus = `(${nilaiAwal}°Ra - 491.67) * 4/9 = ${hasil.toFixed(2)}°R`;
      }
    }

    hasilOperasi.value = hasil === "" ? "" : hasil.toFixed(2);
    explainTextArea.value = rumus;
  }

  // menukar unit suhu dan nilai input dan hasil
  function tukarSatuan() {
    const temp = opt1.value;
    opt1.value = opt2.value;
    opt2.value = temp;

    // Menukar nilai input dan hasil
    const tempNilai = inputNilaiSuhu.value;
    inputNilaiSuhu.value = hasilOperasi.value;
    hasilOperasi.value = tempNilai;
  }

  // convert button
  konversiButton.addEventListener("click", function () {
    hitungKonversi();
  });

  // Event listener untuk tombol tukar satuan
  reverseButton.addEventListener("click", function () {
    tukarSatuan();
    hitungKonversi();
  });

  // Event listener untuk mereset nilai
  document
    .querySelector(".reset-button")
    .addEventListener("click", function () {
      inputNilaiSuhu.value = "";
      hasilOperasi.value = "";
      explainTextArea.value = "";
    });

  // Set nilai default untuk memastikan opsi yang berbeda pada kedua select
  opt1.value = "celcius";
  opt2.value = "fahrenheit";
  explainTextArea = none;

  hitungKonversi();
});
