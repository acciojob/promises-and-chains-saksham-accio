//your code here
const btn = document.getElementById("btn");
const age = document.getElementById("age");
const name = document.getElementById("name");

btn.addEventListener("click", sol);

function sol() {
  const ageVal = age.value;
  const nameVal = name.value;

  if (!(ageVal && nameVal)) {
    alert("Please enter valid details");
    return;
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageVal > 18) {
        alert(`Welcome, ${nameVal}. You can vote.`);
      } else {
        alert(`Oh sorry ${nameVal}. You aren't old enough.`);
      }
    }, 4000);
  });
}