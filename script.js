const peopleInSpace = document.querySelector("[data-js='people-in-space']");

const peopleContainer = document.querySelector("[data-js='people-container']");

const issButton = document.querySelector("[data-js='iss-button']");

const tiangongButton = document.querySelector("[data-js='tiangong-button']");

const allButton = document.querySelector("[data-js='all-button']");

let peopleInSpaceArray = [];

console.log("issButton", issButton);

function updatePeopleList(peopleArray) {
  peopleArray.forEach((person) => {
    const li = document.createElement("li");
    li.textContent = person.name;
    peopleContainer.append(li);
  });
}

async function getPeopleInSpace() {
  const response = await fetch("http://api.open-notify.org/astros.json");

  const data = await response.json();
  peopleInSpaceArray = data.people;

  console.log("data: ", data);
  peopleInSpace.textContent = data.number;
  updatePeopleList(peopleInSpaceArray);
  //   peopleInSpaceArray.forEach((person) => {
  //     const li = document.createElement("li");
  //     li.textContent = person.name;
  //     peopleContainer.append(li);
  //   });
}
getPeopleInSpace();

issButton.addEventListener("click", () => {
  // filter the array with all people in space
  // to only include people on the ISS
  const issPeople = peopleInSpaceArray.filter(
    (person) => person.craft === "ISS"
  );
  console.log("issPeople", issPeople);
  // empty the ul first
  peopleContainer.innerHTML = "";

  // loop over ISS array and create 7 new lis
  //   issPeople.forEach((person) => {
  //     const li = document.createElement("li");
  //     li.textContent = person.name;
  //     peopleContainer.append(li);
  //   });
  updatePeopleList(issPeople);
});

tiangongButton.addEventListener("click", () => {
  // filter the array with all people in space
  // to only include people on the tiangong
  const tiangongPeople = peopleInSpaceArray.filter(
    (person) => person.craft === "Tiangong"
  );
  // empty the ul first
  peopleContainer.innerHTML = "";

  // loop over ISS array and create 7 new lis
  //   tiangongPeople.forEach((person) => {
  //     const li = document.createElement("li");
  //     li.textContent = person.name;
  //     peopleContainer.append(li);
  //   });
  updatePeopleList(tiangongPeople);
});

allButton.addEventListener("click", () => {
  // empty the ul first
  peopleContainer.innerHTML = "";

  // loop over people in space array and create 7 new lis
  //   peopleInSpaceArray.forEach((person) => {
  //     const li = document.createElement("li");
  //     li.textContent = person.name;
  //     peopleContainer.append(li);
  //   });
  updatePeopleList(peopleInSpaceArray);
});
