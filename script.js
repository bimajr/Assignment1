// Mendapatkan elemen input display
var display = document.getElementById("display");

// Fungsi untuk menambahkan teks ke display
function appendToDisplay(value) {
  display.value += value;
}

// Fungsi untuk membersihkan display
function clearDisplay() {
  display.value = "";
}

// Fungsi untuk menghitung hasil ekspresi matematika
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
