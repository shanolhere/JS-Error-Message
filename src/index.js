const callBtn = document.querySelector(".call");

const result = document.querySelector(".result");

var URL = "https://jsonplaceholder.typicode.com/dummyUsers";

callBtn.addEventListener("click", () => {
  fetch(URL).then((error) => {
    if (error.status === 401) {
      result.innerHTML = `${error.status} Error. User not Logged in.`;
    } else if (error.status === 404) {
      result.innerHTML = `${error.status} Error. Page Not found.`;
    }
  });
});
//https://pwuwpc.csb.app/
