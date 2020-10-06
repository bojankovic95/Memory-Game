let input = document.getElementById("ImePrezime");
input.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    event.preventDefault();
    let inputValue = input.value;
    if (inputValue == "" || inputValue == null) {
      document.getElementById("warning").innerHTML = "Please type your name!";
      document.getElementById("warning").style.webkitTextFillColor = "red";
    } else {
      localStorage.setItem("username", JSON.stringify(inputValue));
      let radios = document.getElementsByName("level");
      radios.forEach((btn) => {
        btns.style.display = "inline";
      });

      document.getElementById("warning").innerHTML =
        "Choose level to start a game!";
      document.getElementById("warning").style.webkitTextFillColor =
        "rgb(255, 217, 0)";

      for (let i = 0; i < radios.length; i++) {
        radios[i].onclick = function () {
          if (this.value == 50) {
            let seconds = document.getElementById("timer").textContent;
            let counter = setInterval(function () {
              seconds++;
              document.getElementById("timer").textContent = seconds;
              if (seconds <= 9)
                document.getElementById("timer").textContent = "0" + seconds;
            }, 1000);

            let cardArray = [
              {
                name: "1",
                img: "images/1.png",
              },
              {
                name: "2",
                img: "images/2.png",
              },
              {
                name: "3",
                img: "images/3.png",
              },
              {
                name: "4",
                img: "images/4.png",
              },
              {
                name: "5",
                img: "images/5.png",
              },
              {
                name: "6",
                img: "images/6.png",
              },
              {
                name: "7",
                img: "images/7.png",
              },
              {
                name: "8",
                img: "images/8.png",
              },
              {
                name: "9",
                img: "images/9.png",
              },
              {
                name: "10",
                img: "images/10.png",
              },
              {
                name: "11",
                img: "images/11.png",
              },
              {
                name: "12",
                img: "images/12.png",
              },
              {
                name: "13",
                img: "images/13.png",
              },
              {
                name: "14",
                img: "images/14.png",
              },
              {
                name: "15",
                img: "images/15.png",
              },
              {
                name: "16",
                img: "images/16.png",
              },
              {
                name: "17",
                img: "images/17.png",
              },
              {
                name: "18",
                img: "images/18.png",
              },
              {
                name: "19",
                img: "images/19.png",
              },
              {
                name: "20",
                img: "images/20.png",
              },
              {
                name: "21",
                img: "images/21.png",
              },
              {
                name: "22",
                img: "images/22.png",
              },
              {
                name: "23",
                img: "images/23.png",
              },
              {
                name: "24",
                img: "images/24.png",
              },
              {
                name: "25",
                img: "images/25.png",
              },
              {
                name: "26",
                img: "images/26.png",
              },
              {
                name: "27",
                img: "images/27.png",
              },
              {
                name: "28",
                img: "images/28.png",
              },
              {
                name: "29",
                img: "images/29.png",
              },
              {
                name: "30",
                img: "images/30.png",
              },
              {
                name: "31",
                img: "images/31.png",
              },
              {
                name: "32",
                img: "images/32.png",
              },
              {
                name: "33",
                img: "images/33.png",
              },
              {
                name: "34",
                img: "images/34.png",
              },
              {
                name: "35",
                img: "images/35.png",
              },
              {
                name: "36",
                img: "images/36.png",
              },
              {
                name: "37",
                img: "images/37.png",
              },
              {
                name: "38",
                img: "images/38.png",
              },
              {
                name: "39",
                img: "images/39.png",
              },
              {
                name: "40",
                img: "images/40.png",
              },
              {
                name: "41",
                img: "images/41.png",
              },
              {
                name: "42",
                img: "images/42.png",
              },
              {
                name: "43",
                img: "images/43.png",
              },
              {
                name: "44",
                img: "images/44.png",
              },
              {
                name: "45",
                img: "images/45.png",
              },
              {
                name: "46",
                img: "images/46.png",
              },
              {
                name: "47",
                img: "images/47.png",
              },
              {
                name: "48",
                img: "images/48.png",
              },
              {
                name: "49",
                img: "images/49.png",
              },
              {
                name: "50",
                img: "images/50.png",
              },
              {
                name: "1",
                img: "images/1.png",
              },
              {
                name: "2",
                img: "images/2.png",
              },
              {
                name: "3",
                img: "images/3.png",
              },
              {
                name: "4",
                img: "images/4.png",
              },
              {
                name: "5",
                img: "images/5.png",
              },
              {
                name: "6",
                img: "images/6.png",
              },
              {
                name: "7",
                img: "images/7.png",
              },
              {
                name: "8",
                img: "images/8.png",
              },
              {
                name: "9",
                img: "images/9.png",
              },
              {
                name: "10",
                img: "images/10.png",
              },
              {
                name: "11",
                img: "images/11.png",
              },
              {
                name: "12",
                img: "images/12.png",
              },
              {
                name: "13",
                img: "images/13.png",
              },
              {
                name: "14",
                img: "images/14.png",
              },
              {
                name: "15",
                img: "images/15.png",
              },
              {
                name: "16",
                img: "images/16.png",
              },
              {
                name: "17",
                img: "images/17.png",
              },
              {
                name: "18",
                img: "images/18.png",
              },
              {
                name: "19",
                img: "images/19.png",
              },
              {
                name: "20",
                img: "images/20.png",
              },
              {
                name: "21",
                img: "images/21.png",
              },
              {
                name: "22",
                img: "images/22.png",
              },
              {
                name: "23",
                img: "images/23.png",
              },
              {
                name: "24",
                img: "images/24.png",
              },
              {
                name: "25",
                img: "images/25.png",
              },
              {
                name: "26",
                img: "images/26.png",
              },
              {
                name: "27",
                img: "images/27.png",
              },
              {
                name: "28",
                img: "images/28.png",
              },
              {
                name: "29",
                img: "images/29.png",
              },
              {
                name: "30",
                img: "images/30.png",
              },
              {
                name: "31",
                img: "images/31.png",
              },
              {
                name: "32",
                img: "images/32.png",
              },
              {
                name: "33",
                img: "images/33.png",
              },
              {
                name: "34",
                img: "images/34.png",
              },
              {
                name: "35",
                img: "images/35.png",
              },
              {
                name: "36",
                img: "images/36.png",
              },
              {
                name: "37",
                img: "images/37.png",
              },
              {
                name: "38",
                img: "images/38.png",
              },
              {
                name: "39",
                img: "images/39.png",
              },
              {
                name: "40",
                img: "images/40.png",
              },
              {
                name: "41",
                img: "images/41.png",
              },
              {
                name: "42",
                img: "images/42.png",
              },
              {
                name: "43",
                img: "images/43.png",
              },
              {
                name: "44",
                img: "images/44.png",
              },
              {
                name: "45",
                img: "images/45.png",
              },
              {
                name: "46",
                img: "images/46.png",
              },
              {
                name: "47",
                img: "images/47.png",
              },
              {
                name: "48",
                img: "images/48.png",
              },
              {
                name: "49",
                img: "images/49.png",
              },
              {
                name: "50",
                img: "images/50.png",
              },
            ];

            let radios = document.getElementsByName("level");
            radios.forEach((btn) => {
              btns.style.display = "none";
            });
            let tab = document.getElementById("tabela");
            tab.style.display = "none";
            document.getElementById("warning").innerHTML = " ";

            cardArray.sort(() => 0.5 - Math.random());

            let grid = document.querySelector(".grid");
            grid.setAttribute("id", "ekspert");
            let cardsChosen = [];
            let cardsChosenId = [];
            let cardsWon = [];

            //clear board
            let oldChildren = [];

            while (grid.hasChildNodes()) {
              oldChildren.push(grid.removeChild(grid.firstChild));
            }

            //create your board
            function createBoard() {
              for (let i = 0; i < cardArray.length; i++) {
                let card = document.createElement("img");
                card.setAttribute("src", "images/black.png");
                card.setAttribute("data-id", i);
                card.addEventListener("click", flipCard);
                grid.appendChild(card);
              }
            }

            //check for match
            function checkForMatch() {
              let cards = document.querySelectorAll("img");
              let optionOneId = cardsChosenId[0];
              let optionTwoId = cardsChosenId[1];

              if (optionOneId == optionTwoId) {
                cards[optionOneId].setAttribute("src", "images/black.png");
                cards[optionTwoId].setAttribute("src", "images/black.png");
              } else if (cardsChosen[0] === cardsChosen[1]) {
                cards[optionOneId].setAttribute("src", "images/white.png");
                cards[optionTwoId].setAttribute("src", "images/white.png");
                cards[optionOneId].removeEventListener("click", flipCard);
                cards[optionTwoId].removeEventListener("click", flipCard);
                cardsWon.push(cardsChosen);
              } else {
                cards[optionOneId].setAttribute("src", "images/black.png");
                cards[optionTwoId].setAttribute("src", "images/black.png");
              }
              cardsChosen = [];
              cardsChosenId = [];
              if (cardsWon.length === cardArray.length / 2) {
                localStorage.setItem("vremeEkspert", seconds);
                console.log(seconds);
                clearInterval(counter);

                let currentUser = localStorage.getItem("username");
                let currentTime = localStorage.getItem("vremeEkspert");

                if (localStorage.getItem("Etime1") == null) {
                  localStorage.setItem("Etime1", currentTime);
                  localStorage.setItem("Euser1", currentUser);
                } else if (localStorage.getItem("Etime1") != null) {
                  if (currentTime < localStorage.getItem("Etime1")) {
                    localStorage.setItem(
                      "Etime5",
                      localStorage.getItem("Etime4")
                    );
                    localStorage.setItem(
                      "Euser5",
                      localStorage.getItem("Euser4")
                    );
                    localStorage.setItem(
                      "Etime4",
                      localStorage.getItem("Etime3")
                    );
                    localStorage.setItem(
                      "Euser4",
                      localStorage.getItem("Euser3")
                    );
                    localStorage.setItem(
                      "Etime3",
                      localStorage.getItem("Etime2")
                    );
                    localStorage.setItem(
                      "Euser3",
                      localStorage.getItem("Euser2")
                    );
                    localStorage.setItem(
                      "Etime2",
                      localStorage.getItem("Etime1")
                    );
                    localStorage.setItem(
                      "Euser2",
                      localStorage.getItem("Euser1")
                    );
                    localStorage.setItem("Etime1", currentTime);
                    localStorage.setItem("Euser1", currentUser);
                  } else if (
                    currentTime < localStorage.getItem("Etime2") ||
                    localStorage.getItem("Etime2") == null
                  ) {
                    localStorage.setItem(
                      "Etime5",
                      localStorage.getItem("Etime4")
                    );
                    localStorage.setItem(
                      "Euser5",
                      localStorage.getItem("Euser4")
                    );
                    localStorage.setItem(
                      "Etime4",
                      localStorage.getItem("Etime3")
                    );
                    localStorage.setItem(
                      "Euser4",
                      localStorage.getItem("Euser3")
                    );
                    localStorage.setItem(
                      "Etime3",
                      localStorage.getItem("Etime2")
                    );
                    localStorage.setItem(
                      "Euser3",
                      localStorage.getItem("Euser2")
                    );
                    localStorage.setItem("Etime2", currentTime);
                    localStorage.setItem("Euser2", currentUser);
                  } else if (
                    currentTime < localStorage.getItem("Etime3") ||
                    localStorage.getItem("Etime3") == null
                  ) {
                    localStorage.setItem(
                      "Etime5",
                      localStorage.getItem("Etime4")
                    );
                    localStorage.setItem(
                      "Euser5",
                      localStorage.getItem("Euser4")
                    );
                    localStorage.setItem(
                      "Etime4",
                      localStorage.getItem("Etime3")
                    );
                    localStorage.setItem(
                      "Euser4",
                      localStorage.getItem("Euser3")
                    );
                    localStorage.setItem("Etime3", currentTime);
                    localStorage.setItem("Euser3", currentUser);
                  } else if (
                    currentTime < localStorage.getItem("Etime4") ||
                    localStorage.getItem("Etime4") == null
                  ) {
                    localStorage.setItem(
                      "Etime5",
                      localStorage.getItem("Etime4")
                    );
                    localStorage.setItem(
                      "Euser5",
                      localStorage.getItem("Euser4")
                    );
                    localStorage.setItem("Etime4", currentTime);
                    localStorage.setItem("Euser4", currentUser);
                  } else if (
                    currentTime < localStorage.getItem("Etime5") ||
                    localStorage.getItem("Etime5") == null
                  ) {
                    localStorage.setItem("Etime5", currentTime);
                    localStorage.setItem("Euser5", currentUser);
                  }
                }

                let username = document.getElementById("ImePrezime");
                let userName = username.value;
                let a = confirm(
                  `${userName}, da li zelite da zapocnete novu igru?`
                );
                if (a == true) {
                  //clear board
                  let oldChildren = [];

                  while (grid.hasChildNodes()) {
                    oldChildren.push(grid.removeChild(grid.firstChild));
                  }
                  cardsWon = [];
                  createBoard();
                  let seconds = (document.getElementById("timer").textContent =
                    "0");
                  let counter = setInterval(function () {
                    seconds++;
                    document.getElementById("timer").textContent = seconds;
                    if (seconds <= 9)
                      document.getElementById("timer").textContent =
                        "0" + seconds;
                  }, 1000);
                } else {
                  console.log("zavrsi");
                  clearInterval(counter);
                }
              }
            }

            //flip your card
            function flipCard() {
              let cardId = this.getAttribute("data-id");
              cardsChosen.push(cardArray[cardId].name); //push name
              cardsChosenId.push(cardId);
              this.setAttribute("src", cardArray[cardId].img); //dodajem sliku na osnovu id-ja
              if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
              }
            }

            createBoard();
          } else if (this.value == 8) {
            let seconds = document.getElementById("timer").textContent;
            let counter = setInterval(function () {
              seconds++;
              document.getElementById("timer").textContent = seconds;
              if (seconds <= 9)
                document.getElementById("timer").textContent = "0" + seconds;
            }, 1000);
            const cardArray = [
              {
                name: "10",
                img: "images/10.png",
              },
              {
                name: "20",
                img: "images/20.png",
              },
              {
                name: "30",
                img: "images/30.png",
              },
              {
                name: "40",
                img: "images/40.png",
              },
              {
                name: "50",
                img: "images/50.png",
              },
              {
                name: "15",
                img: "images/15.png",
              },
              {
                name: "25",
                img: "images/25.png",
              },
              {
                name: "35",
                img: "images/35.png",
              },
              {
                name: "10",
                img: "images/10.png",
              },
              {
                name: "20",
                img: "images/20.png",
              },
              {
                name: "30",
                img: "images/30.png",
              },
              {
                name: "40",
                img: "images/40.png",
              },
              {
                name: "50",
                img: "images/50.png",
              },
              {
                name: "15",
                img: "images/15.png",
              },
              {
                name: "25",
                img: "images/25.png",
              },
              {
                name: "35",
                img: "images/35.png",
              },
            ];
            let radios = document.getElementsByName("level");
            radios.forEach((btn) => {
              btns.style.display = "none";
            });
            let tab = document.getElementById("tabela");
            tab.style.display = "none";
            document.getElementById("warning").innerHTML = " ";

            cardArray.sort(() => 0.5 - Math.random());

            let grid = document.querySelector(".grid");
            grid.setAttribute("id", "lako");
            let cardsChosen = [];
            let cardsChosenId = [];
            let cardsWon = [];

            //clear board
            let oldChildren = [];

            while (grid.hasChildNodes()) {
              oldChildren.push(grid.removeChild(grid.firstChild));
            }

            //create your board
            function createBoard() {
              for (let i = 0; i < cardArray.length; i++) {
                let card = document.createElement("img");
                card.setAttribute("src", "images/black.png");
                card.setAttribute("data-id", i);
                card.addEventListener("click", flipCard);
                grid.appendChild(card);
              }
            }

            //check for matches
            function checkForMatch() {
              let cards = document.querySelectorAll("img");
              let optionOneId = cardsChosenId[0];
              let optionTwoId = cardsChosenId[1];

              if (optionOneId == optionTwoId) {
                cards[optionOneId].setAttribute("src", "images/black.png");
                cards[optionTwoId].setAttribute("src", "images/black.png");
              } else if (cardsChosen[0] === cardsChosen[1]) {
                cards[optionOneId].setAttribute("src", "images/white.png");
                cards[optionTwoId].setAttribute("src", "images/white.png");
                cards[optionOneId].removeEventListener("click", flipCard);
                cards[optionTwoId].removeEventListener("click", flipCard);
                cardsWon.push(cardsChosen);
              } else {
                cards[optionOneId].setAttribute("src", "images/black.png");
                cards[optionTwoId].setAttribute("src", "images/black.png");
              }
              cardsChosen = [];
              cardsChosenId = [];
              if (cardsWon.length === cardArray.length / 2) {
                localStorage.setItem("vremeLako", seconds);
                console.log(seconds);
                clearInterval(counter);
                let username = document.getElementById("ImePrezime");
                let userName = username.value;
                let a = confirm(
                  `${userName}, da li zelite da zapocnete novu igru?`
                );

                let currentUser = localStorage.getItem("username");
                let currentTime = localStorage.getItem("vremeLako");

                if (localStorage.getItem("time1") == null) {
                  localStorage.setItem("time1", currentTime);
                  localStorage.setItem("user1", currentUser);
                } else if (localStorage.getItem("time1") != null) {
                  if (currentTime < localStorage.getItem("time1")) {
                    localStorage.setItem(
                      "time5",
                      localStorage.getItem("time4")
                    );
                    localStorage.setItem(
                      "user5",
                      localStorage.getItem("user4")
                    );
                    localStorage.setItem(
                      "time4",
                      localStorage.getItem("time3")
                    );
                    localStorage.setItem(
                      "user4",
                      localStorage.getItem("user3")
                    );
                    localStorage.setItem(
                      "time3",
                      localStorage.getItem("time2")
                    );
                    localStorage.setItem(
                      "user3",
                      localStorage.getItem("user2")
                    );
                    localStorage.setItem(
                      "time2",
                      localStorage.getItem("time1")
                    );
                    localStorage.setItem(
                      "user2",
                      localStorage.getItem("user1")
                    );
                    localStorage.setItem("time1", currentTime);
                    localStorage.setItem("user1", currentUser);
                  } else if (
                    currentTime < localStorage.getItem("time2") ||
                    localStorage.getItem("time2") == null
                  ) {
                    localStorage.setItem(
                      "time5",
                      localStorage.getItem("time4")
                    );
                    localStorage.setItem(
                      "user5",
                      localStorage.getItem("user4")
                    );
                    localStorage.setItem(
                      "time4",
                      localStorage.getItem("time3")
                    );
                    localStorage.setItem(
                      "user4",
                      localStorage.getItem("user3")
                    );
                    localStorage.setItem(
                      "time3",
                      localStorage.getItem("time2")
                    );
                    localStorage.setItem(
                      "user3",
                      localStorage.getItem("user2")
                    );
                    localStorage.setItem("time2", currentTime);
                    localStorage.setItem("user2", currentUser);
                  } else if (
                    currentTime < localStorage.getItem("time3") ||
                    localStorage.getItem("time3") == null
                  ) {
                    localStorage.setItem(
                      "time5",
                      localStorage.getItem("time4")
                    );
                    localStorage.setItem(
                      "user5",
                      localStorage.getItem("user4")
                    );
                    localStorage.setItem(
                      "time4",
                      localStorage.getItem("time3")
                    );
                    localStorage.setItem(
                      "user4",
                      localStorage.getItem("user3")
                    );
                    localStorage.setItem("time3", currentTime);
                    localStorage.setItem("user3", currentUser);
                  } else if (
                    currentTime < localStorage.getItem("time4") ||
                    localStorage.getItem("time4") == null
                  ) {
                    localStorage.setItem(
                      "time5",
                      localStorage.getItem("time4")
                    );
                    localStorage.setItem(
                      "user5",
                      localStorage.getItem("user4")
                    );
                    localStorage.setItem("time4", currentTime);
                    localStorage.setItem("user4", currentUser);
                  } else if (
                    currentTime < localStorage.getItem("time5") ||
                    localStorage.getItem("time5") == null
                  ) {
                    localStorage.setItem("time5", currentTime);
                    localStorage.setItem("user5", currentUser);
                  }
                }

                if (a == true) {
                  //clear board
                  let oldChildren = [];

                  while (grid.hasChildNodes()) {
                    oldChildren.push(grid.removeChild(grid.firstChild));
                  }
                  cardsWon = [];
                  createBoard();
                  let seconds = (document.getElementById("timer").textContent =
                    "0");
                  let counter = setInterval(function () {
                    seconds++;
                    document.getElementById("timer").textContent = seconds;
                    if (seconds <= 9)
                      document.getElementById("timer").textContent =
                        "0" + seconds;
                  }, 1000);
                } else {
                  clearInterval(counter);
                  console.log(cardsWon);
                }
              }
            }

            //flip your card
            function flipCard() {
              let cardId = this.getAttribute("data-id");
              cardsChosen.push(cardArray[cardId].name);
              cardsChosenId.push(cardId);
              this.setAttribute("src", cardArray[cardId].img);
              if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
              }
            }

            createBoard();
          } else if (this.value == 18) {
            let seconds = document.getElementById("timer").textContent;
            let counter = setInterval(function () {
              seconds++;
              document.getElementById("timer").textContent = seconds;
              if (seconds <= 9)
                document.getElementById("timer").textContent = "0" + seconds;
            }, 1000);
            let cardArray = [
              {
                name: "1",
                img: "images/1.png",
              },
              {
                name: "2",
                img: "images/2.png",
              },
              {
                name: "3",
                img: "images/3.png",
              },
              {
                name: "4",
                img: "images/4.png",
              },
              {
                name: "5",
                img: "images/5.png",
              },
              {
                name: "6",
                img: "images/6.png",
              },
              {
                name: "7",
                img: "images/7.png",
              },
              {
                name: "8",
                img: "images/8.png",
              },
              {
                name: "9",
                img: "images/9.png",
              },
              {
                name: "10",
                img: "images/10.png",
              },
              {
                name: "11",
                img: "images/11.png",
              },
              {
                name: "12",
                img: "images/12.png",
              },
              {
                name: "13",
                img: "images/13.png",
              },
              {
                name: "14",
                img: "images/14.png",
              },
              {
                name: "15",
                img: "images/15.png",
              },
              {
                name: "16",
                img: "images/16.png",
              },
              {
                name: "17",
                img: "images/17.png",
              },
              {
                name: "18",
                img: "images/18.png",
              },
              {
                name: "1",
                img: "images/1.png",
              },
              {
                name: "2",
                img: "images/2.png",
              },
              {
                name: "3",
                img: "images/3.png",
              },
              {
                name: "4",
                img: "images/4.png",
              },
              {
                name: "5",
                img: "images/5.png",
              },
              {
                name: "6",
                img: "images/6.png",
              },
              {
                name: "7",
                img: "images/7.png",
              },
              {
                name: "8",
                img: "images/8.png",
              },
              {
                name: "9",
                img: "images/9.png",
              },
              {
                name: "10",
                img: "images/10.png",
              },
              {
                name: "11",
                img: "images/11.png",
              },
              {
                name: "12",
                img: "images/12.png",
              },
              {
                name: "13",
                img: "images/13.png",
              },
              {
                name: "14",
                img: "images/14.png",
              },
              {
                name: "15",
                img: "images/15.png",
              },
              {
                name: "16",
                img: "images/16.png",
              },
              {
                name: "17",
                img: "images/17.png",
              },
              {
                name: "18",
                img: "images/18.png",
              },
            ];

            let radios = document.getElementsByName("level");
            radios.forEach((btn) => {
              btns.style.display = "none";
            });
            let tab = document.getElementById("tabela");
            tab.style.display = "none";
            document.getElementById("warning").innerHTML = " ";

            cardArray.sort(() => 0.5 - Math.random());

            let grid = document.querySelector(".grid");
            grid.setAttribute("id", "srednje");
            let cardsChosen = [];
            let cardsChosenId = [];
            let cardsWon = [];

            //clear board
            let oldChildren = [];

            while (grid.hasChildNodes()) {
              oldChildren.push(grid.removeChild(grid.firstChild));
            }

            //create your board
            function createBoard() {
              for (let i = 0; i < cardArray.length; i++) {
                let card = document.createElement("img");
                card.setAttribute("src", "images/black.png");
                card.setAttribute("data-id", i);
                card.addEventListener("click", flipCard);
                grid.appendChild(card);
              }
            }

            //check for matches
            function checkForMatch() {
              let cards = document.querySelectorAll("img");
              let optionOneId = cardsChosenId[0];
              let optionTwoId = cardsChosenId[1];

              if (optionOneId == optionTwoId) {
                cards[optionOneId].setAttribute("src", "images/black.png");
                cards[optionTwoId].setAttribute("src", "images/black.png");
              } else if (cardsChosen[0] === cardsChosen[1]) {
                cards[optionOneId].setAttribute("src", "images/white.png");
                cards[optionTwoId].setAttribute("src", "images/white.png");
                cards[optionOneId].removeEventListener("click", flipCard);
                cards[optionTwoId].removeEventListener("click", flipCard);
                cardsWon.push(cardsChosen);
              } else {
                cards[optionOneId].setAttribute("src", "images/black.png");
                cards[optionTwoId].setAttribute("src", "images/black.png");
              }
              cardsChosen = [];
              cardsChosenId = [];
              if (cardsWon.length === cardArray.length / 2) {
                localStorage.setItem("vremeSrednje", seconds);
                console.log(seconds);
                clearInterval(counter);

                let currentUser = localStorage.getItem("username");
                let currentTime = localStorage.getItem("vremeSrednje");

                if (localStorage.getItem("Stime1") == null) {
                  localStorage.setItem("Stime1", currentTime);
                  localStorage.setItem("Suser1", currentUser);
                } else if (localStorage.getItem("Stime1") != null) {
                  if (currentTime < localStorage.getItem("Stime1")) {
                    localStorage.setItem(
                      "Stime5",
                      localStorage.getItem("Stime4")
                    );
                    localStorage.setItem(
                      "Suser5",
                      localStorage.getItem("Suser4")
                    );
                    localStorage.setItem(
                      "Stime4",
                      localStorage.getItem("Stime3")
                    );
                    localStorage.setItem(
                      "Suser4",
                      localStorage.getItem("Suser3")
                    );
                    localStorage.setItem(
                      "Stime3",
                      localStorage.getItem("Stime2")
                    );
                    localStorage.setItem(
                      "Suser3",
                      localStorage.getItem("Suser2")
                    );
                    localStorage.setItem(
                      "Stime2",
                      localStorage.getItem("Stime1")
                    );
                    localStorage.setItem(
                      "Suser2",
                      localStorage.getItem("Suser1")
                    );
                    localStorage.setItem("Stime1", currentTime);
                    localStorage.setItem("Suser1", currentUser);
                  } else if (
                    currentTime < localStorage.getItem("Stime2") ||
                    localStorage.getItem("Stime2") == null
                  ) {
                    localStorage.setItem(
                      "Stime5",
                      localStorage.getItem("Stime4")
                    );
                    localStorage.setItem(
                      "Suser5",
                      localStorage.getItem("Suser4")
                    );
                    localStorage.setItem(
                      "Stime4",
                      localStorage.getItem("Stime3")
                    );
                    localStorage.setItem(
                      "Suser4",
                      localStorage.getItem("Suser3")
                    );
                    localStorage.setItem(
                      "Stime3",
                      localStorage.getItem("Stime2")
                    );
                    localStorage.setItem(
                      "Suser3",
                      localStorage.getItem("Suser2")
                    );
                    localStorage.setItem("Stime2", currentTime);
                    localStorage.setItem("Suser2", currentUser);
                  } else if (
                    currentTime < localStorage.getItem("Stime3") ||
                    localStorage.getItem("Stime3") == null
                  ) {
                    localStorage.setItem(
                      "Stime5",
                      localStorage.getItem("Stime4")
                    );
                    localStorage.setItem(
                      "Suser5",
                      localStorage.getItem("Suser4")
                    );
                    localStorage.setItem(
                      "Stime4",
                      localStorage.getItem("Stime3")
                    );
                    localStorage.setItem(
                      "Suser4",
                      localStorage.getItem("Suser3")
                    );
                    localStorage.setItem("Stime3", currentTime);
                    localStorage.setItem("Suser3", currentUser);
                  } else if (
                    currentTime < localStorage.getItem("Stime4") ||
                    localStorage.getItem("Stime4") == null
                  ) {
                    localStorage.setItem(
                      "Stime5",
                      localStorage.getItem("Stime4")
                    );
                    localStorage.setItem(
                      "Suser5",
                      localStorage.getItem("Suser4")
                    );
                    localStorage.setItem("Stime4", currentTime);
                    localStorage.setItem("Suser4", currentUser);
                  } else if (
                    currentTime < localStorage.getItem("Stime5") ||
                    localStorage.getItem("Stime5") == null
                  ) {
                    localStorage.setItem("Stime5", currentTime);
                    localStorage.setItem("Suser5", currentUser);
                  }
                }

                let username = document.getElementById("ImePrezime");
                let userName = username.value;
                let a = confirm(
                  `${userName}, da li zelite da zapocnete novu igru?`
                );
                if (a == true) {
                  //clear board
                  let oldChildren = [];

                  while (grid.hasChildNodes()) {
                    oldChildren.push(grid.removeChild(grid.firstChild));
                  }
                  cardsWon = [];
                  createBoard();
                  console.log("Nova igra");
                  let seconds = (document.getElementById("timer").textContent =
                    "0");
                  let counter = setInterval(function () {
                    seconds++;
                    document.getElementById("timer").textContent = seconds;
                    if (seconds <= 9)
                      document.getElementById("timer").textContent =
                        "0" + seconds;
                  }, 1000);
                } else {
                  clearInterval(counter);
                  console.log("zavrsi");
                }
              }
            }

            //flip your card
            function flipCard() {
              let cardId = this.getAttribute("data-id");
              cardsChosen.push(cardArray[cardId].name);
              cardsChosenId.push(cardId);
              this.setAttribute("src", cardArray[cardId].img);
              if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
              }
            }

            createBoard();
          } else if (this.value == 32) {
            let seconds = document.getElementById("timer").textContent;
            let counter = setInterval(function () {
              seconds++;
              document.getElementById("timer").textContent = seconds;
              if (seconds <= 9)
                document.getElementById("timer").textContent = "0" + seconds;
            }, 1000);
            let cardArray = [
              {
                name: "1",
                img: "images/1.png",
              },
              {
                name: "2",
                img: "images/2.png",
              },
              {
                name: "3",
                img: "images/3.png",
              },
              {
                name: "4",
                img: "images/4.png",
              },
              {
                name: "5",
                img: "images/5.png",
              },
              {
                name: "6",
                img: "images/6.png",
              },
              {
                name: "7",
                img: "images/7.png",
              },
              {
                name: "8",
                img: "images/8.png",
              },
              {
                name: "9",
                img: "images/9.png",
              },
              {
                name: "10",
                img: "images/10.png",
              },
              {
                name: "11",
                img: "images/11.png",
              },
              {
                name: "12",
                img: "images/12.png",
              },
              {
                name: "13",
                img: "images/13.png",
              },
              {
                name: "14",
                img: "images/14.png",
              },
              {
                name: "15",
                img: "images/15.png",
              },
              {
                name: "16",
                img: "images/16.png",
              },
              {
                name: "17",
                img: "images/17.png",
              },
              {
                name: "18",
                img: "images/18.png",
              },
              {
                name: "19",
                img: "images/19.png",
              },
              {
                name: "20",
                img: "images/20.png",
              },
              {
                name: "21",
                img: "images/21.png",
              },
              {
                name: "22",
                img: "images/22.png",
              },
              {
                name: "23",
                img: "images/23.png",
              },
              {
                name: "24",
                img: "images/24.png",
              },
              {
                name: "25",
                img: "images/25.png",
              },
              {
                name: "26",
                img: "images/26.png",
              },
              {
                name: "27",
                img: "images/27.png",
              },
              {
                name: "28",
                img: "images/28.png",
              },
              {
                name: "29",
                img: "images/29.png",
              },
              {
                name: "30",
                img: "images/30.png",
              },
              {
                name: "31",
                img: "images/31.png",
              },
              {
                name: "32",
                img: "images/32.png",
              },
              {
                name: "1",
                img: "images/1.png",
              },
              {
                name: "2",
                img: "images/2.png",
              },
              {
                name: "3",
                img: "images/3.png",
              },
              {
                name: "4",
                img: "images/4.png",
              },
              {
                name: "5",
                img: "images/5.png",
              },
              {
                name: "6",
                img: "images/6.png",
              },
              {
                name: "7",
                img: "images/7.png",
              },
              {
                name: "8",
                img: "images/8.png",
              },
              {
                name: "9",
                img: "images/9.png",
              },
              {
                name: "10",
                img: "images/10.png",
              },
              {
                name: "11",
                img: "images/11.png",
              },
              {
                name: "12",
                img: "images/12.png",
              },
              {
                name: "13",
                img: "images/13.png",
              },
              {
                name: "14",
                img: "images/14.png",
              },
              {
                name: "15",
                img: "images/15.png",
              },
              {
                name: "16",
                img: "images/16.png",
              },
              {
                name: "17",
                img: "images/17.png",
              },
              {
                name: "18",
                img: "images/18.png",
              },
              {
                name: "19",
                img: "images/19.png",
              },
              {
                name: "20",
                img: "images/20.png",
              },
              {
                name: "21",
                img: "images/21.png",
              },
              {
                name: "22",
                img: "images/22.png",
              },
              {
                name: "23",
                img: "images/23.png",
              },
              {
                name: "24",
                img: "images/24.png",
              },
              {
                name: "25",
                img: "images/25.png",
              },
              {
                name: "26",
                img: "images/26.png",
              },
              {
                name: "27",
                img: "images/27.png",
              },
              {
                name: "28",
                img: "images/28.png",
              },
              {
                name: "29",
                img: "images/29.png",
              },
              {
                name: "30",
                img: "images/30.png",
              },
              {
                name: "31",
                img: "images/31.png",
              },
              {
                name: "32",
                img: "images/32.png",
              },
            ];

            let radios = document.getElementsByName("level");
            radios.forEach((btn) => {
              btns.style.display = "none";
            });
            let tab = document.getElementById("tabela");
            tab.style.display = "none";
            document.getElementById("warning").innerHTML = " ";

            cardArray.sort(() => 0.5 - Math.random());

            let grid = document.querySelector(".grid");
            grid.setAttribute("id", "tesko");
            let cardsChosen = [];
            let cardsChosenId = [];
            let cardsWon = [];

            //clear board
            let oldChildren = [];

            while (grid.hasChildNodes()) {
              oldChildren.push(grid.removeChild(grid.firstChild));
            }

            //create your board
            function createBoard() {
              for (let i = 0; i < cardArray.length; i++) {
                let card = document.createElement("img");
                card.setAttribute("src", "images/black.png");
                card.setAttribute("data-id", i);
                card.addEventListener("click", flipCard);
                grid.appendChild(card);
              }
            }

            //check for matches
            function checkForMatch() {
              let cards = document.querySelectorAll("img");
              let optionOneId = cardsChosenId[0];
              let optionTwoId = cardsChosenId[1];

              if (optionOneId == optionTwoId) {
                cards[optionOneId].setAttribute("src", "images/black.png");
                cards[optionTwoId].setAttribute("src", "images/black.png");
              } else if (cardsChosen[0] === cardsChosen[1]) {
                cards[optionOneId].setAttribute("src", "images/white.png");
                cards[optionTwoId].setAttribute("src", "images/white.png");
                cards[optionOneId].removeEventListener("click", flipCard);
                cards[optionTwoId].removeEventListener("click", flipCard);
                cardsWon.push(cardsChosen);
              } else {
                cards[optionOneId].setAttribute("src", "images/black.png");
                cards[optionTwoId].setAttribute("src", "images/black.png");
              }
              cardsChosen = [];
              cardsChosenId = [];
              if (cardsWon.length === cardArray.length / 2) {
                localStorage.setItem("vremeTesko", seconds);
                console.log(seconds);
                clearInterval(counter);

                let currentUser = localStorage.getItem("username");
                let currentTime = localStorage.getItem("vremeTesko");

                if (localStorage.getItem("Ttime1") == null) {
                  localStorage.setItem("Ttime1", currentTime);
                  localStorage.setItem("Tuser1", currentUser);
                } else if (localStorage.getItem("Ttime1") != null) {
                  if (currentTime < localStorage.getItem("Ttime1")) {
                    localStorage.setItem(
                      "Ttime5",
                      localStorage.getItem("Ttime4")
                    );
                    localStorage.setItem(
                      "Tuser5",
                      localStorage.getItem("Tuser4")
                    );
                    localStorage.setItem(
                      "Ttime4",
                      localStorage.getItem("Ttime3")
                    );
                    localStorage.setItem(
                      "Tuser4",
                      localStorage.getItem("Tuser3")
                    );
                    localStorage.setItem(
                      "Ttime3",
                      localStorage.getItem("Ttime2")
                    );
                    localStorage.setItem(
                      "Tuser3",
                      localStorage.getItem("Tuser2")
                    );
                    localStorage.setItem(
                      "Ttime2",
                      localStorage.getItem("Ttime1")
                    );
                    localStorage.setItem(
                      "Tuser2",
                      localStorage.getItem("Tuser1")
                    );
                    localStorage.setItem("Ttime1", currentTime);
                    localStorage.setItem("Tuser1", currentUser);
                  } else if (
                    currentTime < localStorage.getItem("Ttime2") ||
                    localStorage.getItem("Ttime2") == null
                  ) {
                    localStorage.setItem(
                      "Ttime5",
                      localStorage.getItem("Ttime4")
                    );
                    localStorage.setItem(
                      "Tuser5",
                      localStorage.getItem("Tuser4")
                    );
                    localStorage.setItem(
                      "Ttime4",
                      localStorage.getItem("Ttime3")
                    );
                    localStorage.setItem(
                      "Tuser4",
                      localStorage.getItem("Tuser3")
                    );
                    localStorage.setItem(
                      "Ttime3",
                      localStorage.getItem("Ttime2")
                    );
                    localStorage.setItem(
                      "Tuser3",
                      localStorage.getItem("Tuser2")
                    );
                    localStorage.setItem("Ttime2", currentTime);
                    localStorage.setItem("Tuser2", currentUser);
                  } else if (
                    currentTime < localStorage.getItem("Ttime3") ||
                    localStorage.getItem("Ttime3") == null
                  ) {
                    localStorage.setItem(
                      "Ttime5",
                      localStorage.getItem("Ttime4")
                    );
                    localStorage.setItem(
                      "Tuser5",
                      localStorage.getItem("Tuser4")
                    );
                    localStorage.setItem(
                      "Ttime4",
                      localStorage.getItem("Ttime3")
                    );
                    localStorage.setItem(
                      "Tuser4",
                      localStorage.getItem("Tuser3")
                    );
                    localStorage.setItem("Ttime3", currentTime);
                    localStorage.setItem("Tuser3", currentUser);
                  } else if (
                    currentTime < localStorage.getItem("Ttime4") ||
                    localStorage.getItem("Ttime4") == null
                  ) {
                    localStorage.setItem(
                      "Ttime5",
                      localStorage.getItem("Ttime4")
                    );
                    localStorage.setItem(
                      "Tuser5",
                      localStorage.getItem("Tuser4")
                    );
                    localStorage.setItem("Ttime4", currentTime);
                    localStorage.setItem("Tuser4", currentUser);
                  } else if (
                    currentTime < localStorage.getItem("Ttime5") ||
                    localStorage.getItem("Ttime5") == null
                  ) {
                    localStorage.setItem("Ttime5", currentTime);
                    localStorage.setItem("Tuser5", currentUser);
                  }
                }

                let username = document.getElementById("ImePrezime");
                let userName = username.value;
                let a = confirm(
                  `${userName}, da li zelite da zapocnete novu igru?`
                );
                if (a == true) {
                  //clear board
                  let oldChildren = [];

                  while (grid.hasChildNodes()) {
                    oldChildren.push(grid.removeChild(grid.firstChild));
                  }
                  cardsWon = [];
                  createBoard();
                  console.log("Nova igra");
                  let seconds = (document.getElementById("timer").textContent =
                    "0");
                  let counter = setInterval(function () {
                    seconds++;
                    document.getElementById("timer").textContent = seconds;
                    if (seconds <= 9)
                      document.getElementById("timer").textContent =
                        "0" + seconds;
                  }, 1000);
                } else {
                  clearInterval(counter);
                  console.log("zavrsi");
                }
              }
            }

            //flip your card
            function flipCard() {
              let cardId = this.getAttribute("data-id");
              cardsChosen.push(cardArray[cardId].name);
              cardsChosenId.push(cardId);
              this.setAttribute("src", cardArray[cardId].img);
              if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
              }
            }

            createBoard();
          }
        };
      }
    }
  }
});
//}

let tabela = document.getElementById("tabela");

let printTableEasy = document.getElementById("easy");
printTableEasy.addEventListener("click", () => {
  tabela.innerHTML = " ";
  for (let i = 1; i <= 5; i++) {
    tabela.innerHTML += `<tr><td>${i}</td><td>${localStorage.getItem(
      `user${i}`
    )}</td><td>${localStorage.getItem(`time${i}`)}</td></td>`;
  }
});

let printTableMedium = document.getElementById("medium");
printTableMedium.addEventListener("click", () => {
  tabela.innerHTML = " ";
  for (let i = 1; i <= 5; i++) {
    tabela.innerHTML += `<tr><td>${i}</td><td>${localStorage.getItem(
      `Suser${i}`
    )}</td><td>${localStorage.getItem(`Stime${i}`)}</td></td>`;
  }
});

let printTableHard = document.getElementById("hard");
printTableHard.addEventListener("click", () => {
  tabela.innerHTML = " ";
  for (let i = 1; i <= 5; i++) {
    tabela.innerHTML += `<tr><td>${i}</td><td>${localStorage.getItem(
      `Tuser${i}`
    )}</td><td>${localStorage.getItem(`Ttime${i}`)}</td></td>`;
  }
});

let printTableExpert = document.getElementById("expert");
printTableExpert.addEventListener("click", () => {
  tabela.innerHTML = " ";
  for (let i = 1; i <= 5; i++) {
    tabela.innerHTML += `<tr><td>${i}</td><td>${localStorage.getItem(
      `Euser${i}`
    )}</td><td>${localStorage.getItem(`Etime${i}`)}</td></td>`;
  }
});
