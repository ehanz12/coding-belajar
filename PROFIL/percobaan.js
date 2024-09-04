let nilaia;
let nilaib;
let volnilaia;
let volnilaib;
let volnilaiab;
function hitungVolnilaiab() {
	nilaia = parseFloat(document.getElementById("nilaia").value);
	nilaib = parseFloat(document.getElementById("nilaib").value);
	volnilaia = nilaia*nilaia*nilaia;
	volnilaib = nilaib*nilaib*nilaib;
    volnilaiab = volnilaia + volnilaib;
	document.getElementById('Volnilaia').value = volnilaia;
	document.getElementById('Volnilaib').value = volnilaib;
    document.getElementById('Volnilaiab').value = volnilaiab;
}