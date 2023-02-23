(function($) { // Begin jQuery

  $(function() { // DOM ready

    // If a link has a dropdown, add sub menu toggle.

    $('nav ul li a:not(:only-child)').click(function(e) {

      $(this).siblings('.nav-dropdown').toggle();

      // Close one dropdown when selecting another

      $('.nav-dropdown').not($(this).siblings()).hide();

      e.stopPropagation();

    });

    // Clicking away from dropdown will remove the dropdown class

    $('html').click(function() {

      $('.nav-dropdown').hide();

    });

    // Toggle open and close nav styles on click

    $('#nav-toggle').click(function() {

      $('nav ul').slideToggle();

    });

    // Hamburger to X toggle

    $('#nav-toggle').on('click', function() {

      this.classList.toggle('active');

    });

  }); // end DOM ready

})(jQuery); // end jQuery

const wheel = document.getElementById("wheel");

const spinBtn = document.getElementById("spin-btn");

const finalValue = document.getElementById("final-value");

//Object that stores values of minimum and maximum angle for a value

const rotationValues = [

  { minDegree: 0, maxDegree: 30, value: 2 },

  { minDegree: 31, maxDegree: 90, value: 1 },

  { minDegree: 91, maxDegree: 150, value: 6 },

  { minDegree: 151, maxDegree: 210, value: 5 },

  { minDegree: 211, maxDegree: 270, value: 4 },

  { minDegree: 271, maxDegree: 330, value: 3 },

  { minDegree: 331, maxDegree: 360, value: 2 },

];

//Size of each piece

const data = [16, 16, 16, 16, 16, 16];

//background color for each piece

var pieColors = [

  "#8b35bc",

  "#b163da",

  "#8b35bc",

  "#b163da",

  "#8b35bc",

  "#b163da",

];

//Create chart

let myChart = new Chart(wheel, {

  //Plugin for displaying text on pie chart

  plugins: [ChartDataLabels],

  //Chart Type Pie

  type: "pie",

  data: {

    //Labels(values which are to be displayed on chart)

    labels: ["TD", "GM", "TGK", "GB", "SDK", "PU"],

    //Settings for dataset/pie

    datasets: [

      {

        backgroundColor: pieColors,

        data: data,

      },

    ],

  },

  options: {

    //Responsive chart

    responsive: true,

    animation: { duration: 0 },

    plugins: {

      //hide tooltip and legend

      tooltip: false,

      legend: {

        display: false,

      },

      //display labels inside pie chart

      datalabels: {

        color: "#ffffff",

        formatter: (_, context) => context.chart.data.labels[context.dataIndex],

        font: { size: 18 },

      },

    },

  },

});

const pengetahuanUmum = [

  {

    question: "siapakah penemu gaya gravitasi?",

    optionA: "Albert Einstein",

    optionB: "Nikola Tesla",

    optionC: "Isaac Newton",

    optionD: "Ur Mom",

    correctOption: "optionC",

  },

  {

    soal: "Besarnya ketidakpastian mikro meter sekrup adalah?",

    optionA: "0,01 mm",

    optionB: "0,1 mm",

    optionC: "0,5 mm",

    optionD: "0,05 mm",

    correctOption : "optionA",

  },

  {

    question: "Pasangan berikut yang tidak tepat antara besaran dan satuannya adalah?",

    optionA: "Tekanan - N/m²",

    optionB: "Daya - kg.m/s³",

    optionC: "Energi - kg.m²/s²",

    optionD: "Percepatan - m/s²",

    correctOption: "optionB",

  }]

  

const Termodinamika = [

  {

    question: "0,5 liter gas dipanaskan pada tekanan tetap 1,5 atm sehingga volumenya mengembang menjadi 0,9 liter. Tentukan besar usaha yang dilakukan gas!",

    optionA: "60,2 Joule",

    optionB: "60,4 Joule",

    optionC: "60,6 Noule",

    optionD: "60,8 Joule",

    correctOption: "optionC"

  },

    {

    question: "Suatu gas dimampatkan sehingga volumenya berkurang dari 5,0 L menjadi 3,5 L pada tekanan konstan 1,0 × 10⁵ Pa. hitunglah usaha yang dilakukan pada gas tersebut!",

    optionA: "-150 Joule",

    optionB: "-300 Joule",

    optionC: "150 Joule",

    optionD: "300 Joule",

    correctOption: "optionA"

  },

    {

    question: "Suatu gas dalam ruang tertutup menerima kalor sebanyak 5.000 kalori dan menghasilkan usaha sebesar 7.000 J. Perubahan energi dalam gas sebesar ...Kj.(1 kalori = 42 Joule)",

    optionA: "2,0",

    optionB: "2,4",

    optionC: "12",

    optionD: "14",

    correctOption: "optionD"

  }]

  

const gelombangMekanik = [

  {

    question: "Sebuah gelombang datang dengan sudut 30° pada bidang batas antara dua medium. Bila indeks bias medium 2 relatif terhadap medium 1 adalah ½ √2, berapakah sudut bias gelombang tersebut?",

    optionA: "30°",

    optionB: "45°",

    optionC: "60°",

    optionD: "90°",

    correctOption: "optionB"

  },

    {

    question: "Intensitas gelombang yang dihasilkan gempa Bumi pada jarak 100km dari hiposentrum adalah 1 × 10⁶ W/m². Berapakah intensitas gelombang tersebut pada jarak 400 km dari hiposentrum ?",

    optionA: "6,25 × 10⁴ W/m²",

    optionB: "6,75 × 10⁴ W/m²",

    optionC: "6,25 × 10⁵ W/m²",

    optionD: "6,75 × 10⁵ W/m²",

    correctOption: "optionA"

  },

    {

    question: "Intensitas gelombang gempa di Yogyakarta yang berada 106 km dari sumber gempa adalah 8 × 10⁶ W/m². Hitung intensitas gelombang tersebut di Cilacap yang berada 212 km dari sumber gempa !",

    optionA: "2 × 10⁶ W/m²",

    optionB: "2 × 10⁵ W/m²",

    optionC: "4 × 10⁶ W/m²",

    optionD: "4 × 10⁵ W/m²",

    correctOption: "optionA"

  }]

  

const teoriKinetikGas = [

  {

    question: "Suatu gas dengan volume 2 m3 terdapat dalam sebuah bejana tertutup (tidak bocor) dengan suhu yang dijaga tetap, pada tekanan mula-mula gas tersebut yakni 2 Pa. Apabila tekanan gas dinaikkan menjadi 4 Pa, maka tentukanlah besar volume?",

    optionA: "1m³",

    optionB: "2m³",

    optionC: "3m³",

    optionD: "4m³",

    correctOption: "optionA"

  },

    {

    question: "Tekanan suatu gas yang volumenya 3 m3 yang berada dalam sebuah bejana tertutup (tidak bocor) dijaga tetap. Suhu mutlak awalnya yakni 100 K, namun apabila volumenya dirubah menjadi 6 m3, maka hitunglah besar suhu mutlaknya!",

    optionA: "100K",

    optionB: "150K",

    optionC: "200K",

    optionD: "250K",

    correctOption: "optionC"

  },

    {

    question: "Di dalam sebuah tabung yang tertutup, volume gas dapat berubah-ubah dengan tutup yang mampu bergerak, awalnya memiliki volume 1,2 lt. Pada saat itu tekanan telah diukur 1 atm dengan suhu 27°. Apabila tutup tabung ditekan sehingga tekanan gas yang dihasilkan menjadi 1,2 atm serta volume gas menjadi 1,1 lt. Berapakah suhu gas ini?",

    optionA: "51°C",

    optionB: "53°C",

    optionC: "55°C",

    optionD: "57°C",

    correctOption: "optionD"

  }]

  

const suhuDanKalor = [

  {

    question: "Jika dalam skala kelvin menunjukan 293 K, angka ini akan sesuai dengan skala Fahreinheit sebesar?",

    optionA: "32°F",

    optionB: "36°F",

    optionC: "54°F",

    optionD: "68°F",

    correctOption: "optionD"

  },

    {

    question: "Sebuah benda suhunya 50 ºC. Jika alat ukur temperatur diganti dengan skala Fahreinheit, nilai temperatur menjadi?",

    optionA: "122°F",

    optionB: "90°F",

    optionC: "72°F",

    optionD: "60°F",

    correctOption: "optionA"

  },

    {

    question: "Logam yang massanya 200 g memiliki kalor jenis 500 J/kgºC dan suhunya berubah dari 20 ºC menjadi 100 ºC. jumlah kalor yang diterima logam adalah?",

    optionA: "6000 J",

    optionB: "7000 J",

    optionC: "8000 J",

    optionD: "9000 J",

    correctOption: "optionC"

  }]  

  

const gelombangBunyi = [

  {

    question: "Intensitas bunyi pada jarak 5 m dari sumber adalah 10 watt.m-². Intensitas bunyi pada jarak 10 meter adalah … watt.m-².",

    optionA: "0,25 × 10-⁴",

    optionB: "0,50 x 10-⁴",

    optionC: "1,00 x 10-⁴",

    optionD: "2 x 10-⁴",

    correctOption: "optionA"

  },

    {

    question: "Taraf intensitas bunyi suatu ledakan pada jarak 2 m dari sumbernya adalah 90 dB. Pada jarak 20 m dari sumber ledakan, taraf intensitasnya adalah ?",

    optionA: "0,9 dB",

    optionB: "9 dB",

    optionC: "70 dB",

    optionD: "100 dB",

    correctOption: "optionC"

  },

    {

    question: "Taraf intensitas bunyi sebuah mesin rata-rata 50 dB. Apabila 100 mesin dihidupkan bersamaan, maka taraf intensitasnya adalah ?",

    optionA: "20 dB",

    optionB: "50 dB",

    optionC: "70 dB",

    optionD: "75 dB",

    correctOption: "optionC"

  }]

  

let playerScore = 0

  

const kirimBab = document.getElementById('bab');

const kirimsoal = document.getElementById('soal');

const pilihanA = document.getElementById('option-one-label');

const pilihanB = document.getElementById('option-two-label');

const pilihanC = document.getElementById('option-three-label');

const pilihanD = document.getElementById('option-four-label');

const options = document.getElementsByName('option')

const scoreContainer = document.getElementById('value-score');

scoreContainer.innerText = playerScore

let jawabanAkhir;

function updateSoal() {

  if (finalValue.textContent == "Hasil: 1") {

    console.log("Termodinamika")

    const TD = Termodinamika[Math.floor(Math.random()*Termodinamika.length)]

    let kirimTD = Object.values(TD)

    soal.innerText = kirimTD[0]

    pilihanA.innerText = kirimTD[1]

    pilihanB.innerText = kirimTD[2]

    pilihanC.innerText = kirimTD[3]

    pilihanD.innerText = kirimTD[4]

    jawabanAkhir = kirimTD[5] 

    kirimBab.innerText = 'Termodinamika'

  } else if (finalValue.textContent == "Hasil: 2") {

    console.log("Gelombang Mekanik")

    const GM = gelombangMekanik[Math.floor(Math.random()*gelombangMekanik.length)]

    let kirimGM = Object.values(GM)

    soal.innerText = kirimGM[0]

    pilihanA.innerText = kirimGM[1]

    pilihanB.innerText = kirimGM[2]

    pilihanC.innerText = kirimGM[3]

    pilihanD.innerText = kirimGM[4]

    jawabanAkhir = kirimGM[5]

    kirimBab.innerText = 'Gelombang Mekanik'

  } else if (finalValue.textContent == "Hasil: 3") {

    console.log("Teori Kinetik Gas")

    const TKG = teoriKinetikGas[Math.floor(Math.random()*teoriKinetikGas.length)]

    let kirimTKG = Object.values(TKG)

    soal.innerText = kirimTKG[0]

    pilihanA.innerText = kirimTKG[1]

    pilihanB.innerText = kirimTKG[2]

    pilihanC.innerText = kirimTKG[3]

    pilihanD.innerText = kirimTKG[4]

    jawabanAkhir = kirimTKG[5]

    kirimBab.innerText = 'Teori Kinetik Gas'

  } else if (finalValue.textContent == "Hasil: 4") {

    console.log("Gelombang Bunyi")

    const GB = gelombangBunyi[Math.floor(Math.random()*gelombangBunyi.length)]

    let kirimGB = Object.values(GB)

    soal.innerText = kirimGB[0]

    pilihanA.innerText = kirimGB[1]

    pilihanB.innerText = kirimGB[2]

    pilihanC.innerText = kirimGB[3]

    pilihanD.innerText = kirimGB[4]

    jawabanAkhir = kirimGB[5]

    kirimBab.innerText = 'Gelombang Bunyi'

  } else if (finalValue.textContent == "Hasil: 5") {

    console.log("Suhu dan Kalor")

    const TKG = suhuDanKalor[Math.floor(Math.random()*suhuDanKalor.length)]

    let kirimSDK = Object.values(TKG)

    soal.innerText = kirimSDK[0]

    pilihanA.innerText = kirimSDK[1]

    pilihanB.innerText = kirimSDK[2]

    pilihanC.innerText = kirimSDK[3]

    pilihanD.innerText = kirimSDK[4]

    jawabanAkhir = kirimSDK[5]

    kirimBab.innerText = 'Suhu dan Kalor'

  } else {

    console.log("Pengetahuan Umum")

    const PU = pengetahuanUmum[Math.floor(Math.random()*pengetahuanUmum.length)]

    let kirimPU = Object.values(PU)

    soal.innerText = kirimPU[0]

    pilihanA.innerText = kirimPU[1]

    pilihanB.innerText = kirimPU[2]

    pilihanC.innerText = kirimPU[3]

    pilihanD.innerText = kirimPU[4]

    jawabanAkhir = kirimGM[5]

    kirimBab.innerText = 'Pengetahuan Umum'

  }

}

function cekJawaban(){

  let correctOption = null

if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked === false) {

        document.getElementById('option-modal').style.display = "block";

        document.getElementById('overlay').style.display = "block";

    }

    

    if (option.checked === true && option.value === jawabanAkhir) { playerScore += 5}

}

function tutupModal(){

  document.getElementById('option-modal').style.display = "none";

  document.getElementById('overlay').style.display = "none";

}

const radioA = document.getElementById('option-one')

const radioB = document.getElementById('option-two')

const radioC = document.getElementById('option-three')

const radioD = document.getElementById('option-four')

function aktifA(){

  radioA.checked = true;

}

function aktifB(){

  radioB.checked = true;

}

function aktifC(){

  radioC.checked = true;

}

function aktifD(){

  radioD.checked = true;

}

//display value based on the randomAngle

const valueGenerator = (angleValue) => {

  for (let i of rotationValues) {

    //if the angleValue is between min and max then display it

    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {

      finalValue.innerHTML = `<p>Hasil: ${i.value}</p>`;

      spinBtn.disabled = false;

      updateSoal()

      break;

    }

  }

};

//Spinner count

let count = 0;

//100 rotations for animation and last rotation for result

let resultValue = 101;

//Start spinning

spinBtn.addEventListener("click", () => {

  spinBtn.disabled = true;

  //Empty final value

  finalValue.innerHTML = `<p>Semoga Beruntung!</p>`;

  //Generate random degrees to stop at

  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);

  //Interval for rotation animation

  let rotationInterval = window.setInterval(() => {

    //Set rotation for piechart

    /*

    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.

    */

    myChart.options.rotation = myChart.options.rotation + resultValue;

    //Update chart with new value;

    myChart.update();

    //If rotation>360 reset it back to 0

    if (myChart.options.rotation >= 360) {

      count += 1;

      resultValue -= 5;

      myChart.options.rotation = 0;

    } else if (count > 15 && myChart.options.rotation == randomDegree) {

      valueGenerator(randomDegree);

      clearInterval(rotationInterval);

      count = 0;

      resultValue = 101;

    }

  }, 10);

});








