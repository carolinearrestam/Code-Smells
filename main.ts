/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

function sumJumpLengths(jumpings: number[]): number {
  return jumpings.reduce((total, currentJump) => total + currentJump, 0);
}

  
  /*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */
  
class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean
  ) {}

  get passed(): boolean {
    return this.name === "Sebastian" && this.handedInOnTime;
  }
}

function getStudentStatus(student: Student): string {
  return student.passed ? "VG" : "IG";
}

  
  /*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */
  
  class Temp {
    constructor(public q: string, public where: Date, public v: number) {}
  }
  
  function averageWeeklyTemperature(heights: Temp[]) {
    let r = 0;
  
    for (let who = 0; who < heights.length; who++) {
      if (heights[who].q === "Stockholm") {
        if (heights[who].where.getTime() > Date.now() - 604800000) {
          r += heights[who].v;
        }
      }
    }
  
    return r / 7;
  }
  
  /*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */
  
  function showProduct(
    name: string,
    price: number,
    amount: number,
    description: string,
    image: string,
    parent: HTMLElement
  ) {
    let container = document.createElement("div");
    let title = document.createElement("h4");
    let pris = document.createElement("strong");
    let imageTag = document.createElement("img");
  
    title.innerHTML = name;
    pris.innerHTML = price.toString();
    imageTag.src = image;
  
    container.appendChild(title);
    container.appendChild(imageTag);
    container.appendChild(pris);
    parent.appendChild(container);
  }
  
  /*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */
  function presentStudents(students: Student[]) {
    for (const student of students) {
      if (student.handedInOnTime) {
        let container = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = true;
  
        container.appendChild(checkbox);
        let listOfStudents = document.querySelector("ul#passedstudents");
        listOfStudents?.appendChild(container);
      } else {
        let container = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = false;
  
        container.appendChild(checkbox);
        let listOfStudents = document.querySelector("ul#failedstudents");
        listOfStudents?.appendChild(container);
      }
    }
  }
  
  /*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */
  function concatenateStrings() {
    let result = "";
    result += "Lorem";
    result += "ipsum";
    result += "dolor";
    result += "sit";
    result += "amet";
  
    return result;
  }
  
  /* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */
  function createUser(
    name: string,
    birthday: Date,
    email: string,
    password: string
  ) {
    // Validation
  
    let ageDiff = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDiff);
    let userAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  
    console.log(userAge);
  
    if (!(userAge < 20)) {
      // Logik för att skapa en användare
    } else {
      return "Du är under 20 år";
    }
  }
  