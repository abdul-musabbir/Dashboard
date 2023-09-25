var pages = {
    dashboard: `
        <div class="header">
            <p style="font-size:1.5rem;font-weight: bold;">Dashboard</p>
            <div style="position: relative;display:flex;align-items: center;"><i style="position: absolute;z-index: 50;left:1rem;font-weight: bold;top:0.8rem;color:#fff" class="fi fi-br-search"></i><input class="search" type="text" placeholder="Search" style="width:1000px;padding:0.8rem 2.5rem;border-radius: 15px;font-size: 16px;font-weight: 600;border:none;box-shadow: 10px 5px 32px rgba(26, 26, 26, 0.5);background: linear-gradient(360deg, #21212b, #3b3d4c); color:#fff"></div>
            <div style="display:flex;align-items: center;justify-content: center;gap:20px">
            <a href="#" ><i class="fi fi-br-bell" style="font-size:2rem;color:#fff"></i></a>
              <a href="#" id="logoBtn"><img id="toggleBtn" src="./logosa.svg" alt="logo" /></a>
              <div class="dropDown hidden"></div>
            </div>

        </div>
        <div class="wrapper">
            <div class="wrapper-box">
                <div class="total-box-container">
                    <div class="total-box">
                      <p>Total Sales</p>
                      <p>Collected in <span>September</span></p>
                      <p style="display:flex;justify-content: space-between;"><span>$51,255.20</span> <span>+12,5%</span></p>
                      <p>Updated today</p>
                    </div>
                    <div class="total-box">
                    <p>Total Expenses</p>
                    <p>Collected in <span>September</span></p>
                    <p style="display:flex;justify-content: space-between;"><span>$10,152.00</span> <span style="color: #8254ef;">-5,2%</span></p>
                    <p>Updated today</p>
                    </div>
                    <div class="total-box">
                    <p>Total visitors</p>
                    <p>Collected in <span>September</span></p>
                    <p style="display:flex;justify-content: space-between;"><span>$18,119.00</span> <span>+3,8%</span></p>
                    <p>Updated today</p>
                    </div>
                </div>
                <div class="container">
                <div>
                <p>10</p>
                <p>10</p>
                <p>10</p>
                <p>10</p>
                <p>10</p>
                <p>10</p>
                <p>10</p>
                </div>
                  <img src="./trend.svg" />
                </div>
                <div class="container"></div>
            </div>
            <div class="right-container">
                <div class="right-box"></div>
                <div class="right-box"></div>
            </div>
        </div>
    `,
    trend: `Our About Us page`,
    power: `Our Services page`,
    chat: `Chat Bot`,
    profile: `<p>Profile</p>`,
  };

  function getPageContent(page) {
    var contentToReturn;
    switch (page) {
      case "dashboard":
        contentToReturn = pages.dashboard;
        break;
      case "trend":
        contentToReturn = pages.trend;
        break;
      case "power":
        contentToReturn = pages.power;
        break;
      case "chat":
        contentToReturn = pages.chat;
        break;
      case "profile":
        contentToReturn = pages.profile;
        break;
    }
    document.getElementById("content").innerHTML = contentToReturn;
  }

  // toggle btn

  // Get references to the elements
const toggleBtn = document.getElementById("toggleBtn");
const dropDown = document.querySelector(".dropDown");

// Add a click event listener to the toggle button
toggleBtn.addEventListener("click", () => {
    // Toggle the "hidden" class on the dropDown element
    dropDown.classList.toggle("hidden");
});
