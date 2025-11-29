function documentLoder() {
  async function fetchUserData() {
    try {
      const apiUrl = await fetch("https://jsonplaceholder.typicode.com/users");
      const dataContainer = document.getElementById("api-data");

      const users = await apiUrl.json();
      dataContainer.innerText = "";
      const userList = document.createElement("ul");

      users.forEach((element) => {
        let list = document.createElement("li");
        list.innerText = element.name;
        //   console.log(element.name);
        userList.append(list);
      });

      // console.log("hi");
      dataContainer.append(userList);
    } catch {
      const dataContainer = document.getElementById("api-data");
      dataContainer.innerText = "";
      dataContainer.innerText = "Failed to load user data.";
      // console.log(err);
    }
  }
  fetchUserData();
}
document.addEventListener("DOMContentLoaded", documentLoder);
