function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

document.getElementById("btnCalc").addEventListener("click", function () {
    const val = Number(document.getElementById("numar").value);
    if (!Number.isFinite(val) || val % 1 !== 0) {
        document.getElementById("rezultat").innerText = "Introdu un număr întreg valid.";
        return;
    }
    if (val < 0) {
        document.getElementById("rezultat").innerText = "Nu există factorial pentru numere negative.";
        return;
    }
    // Atenție la numere prea mari: poate depăși limita JS
    if (val > 20) {
        document.getElementById("rezultat").innerText = "Număr prea mare (poate depăși limita).";
        return;
    }
    const rez = factorial(val);
    document.getElementById("rezultat").innerText = "Rezultat: " + rez;
});
