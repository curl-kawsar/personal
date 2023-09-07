// Countown Timer by : https://codepen.io/AllThingsSmitty/pen/JJavZN

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // GANTI TANGGAL DISINI
  let birthday = "May 1, 2021 00:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      let now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("hari").innerText = Math.floor(distance / (day)),
        document.getElementById("jam").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("menit").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("detik").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

        headline.innerText = "Acara Sedang Berlangsung";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }
      //seconds
    }, 0)
}());