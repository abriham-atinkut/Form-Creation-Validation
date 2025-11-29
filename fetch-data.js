function documentLoder() {
  async function fetchUserData() {
    try {
      const apiUrl = await fetch("https://jsonplaceholder.typicode.com/users");
      const dataContainer = document.getElementById("api-data");
     const response = apiUrl;
      const users = await response.json();
      dataContainer.innerHTML = "";
      const userList = document.createElement("ul");

      users.forEach((element) => {
        let list = document.createElement("li");
        list.innerHTML = element.name;
        //   console.log(element.name);
        userList.append(list);
      });

      // console.log("hi");
      dataContainer.append(userList);
    } catch {
      const dataContainer = document.getElementById("api-data");
      dataContainer.innerHTML = "";
      dataContainer.innerHTML = "Failed to load user data.";
      // console.log(err);
    }
  }
  fetchUserData();
}
document.addEventListener("DOMContentLoaded", documentLoder);
