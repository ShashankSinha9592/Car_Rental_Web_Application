let faqs = [
  {
    quest:
      "What are my liabilities in case of damage/ accident of the Hyundai car?",
    ans: "Your Hyundai car will be covered by comprehensive insurance, to take care of damage cases. In case of damage, your liability would be limited to the difference between the costs incurred to repair the damage and the proceeds from insurance claim with maximum liability limited to INR 10,000. In situations of irresponsible or unsafe or negligent usage, there could be discretionary exceptions to this policy, whereby you could be liable for all damages irrespective of whether we are able to claim insurance in such cases.",
    img: "https://www.revv.co.in/grapheneImages/summary-page/plus-icon.png",
  },

  {
    quest:
      "Can I end my Hyundai car subscription early, or choose to keep the car longer?",
    ans: "Yes, you can extend the car subscription anytime at normal prices. If you wish to return the car; you can do so anytime by just paying the fee difference.",
    img: "https://www.revv.co.in/grapheneImages/summary-page/plus-icon.png",
  },
  {
    quest: "Are there any restrictions on what can I use the Hyundai car for?",
    ans: "You can use the Hyundai car you have subscribed to for pretty much all the normal requirements. Abnormal usage (e.g., speed racing, towing/pushing/propelling, transportation of goods or people on commercial basis, transportation of large/heavy/hazardous items) is not allowed.",
    img: "https://www.revv.co.in/grapheneImages/summary-page/plus-icon.png",
  },

  {
    quest: "What are the benefits of Hyundai Subscriptions?",
    ans: "No upfront payments such as down payment or road tax, flexibility of subscribing for min. 1 month and extending or returning anytime, insurance and maintenance included in monthly fees, 24X7 roadside assistance and hassle-free service & maintenance are just a few benefits of Revv Hyundai Subscriptions.",
    img: "https://www.revv.co.in/grapheneImages/summary-page/plus-icon.png",
  },
  {
    quest:
      "What will be the car registration type and whose name will it be registered in?",
    ans: "The car will be registered as a premium commercial vehicle (black plate) with an All India permit and can be driven anywhere within India without any concerns. It will be registered in the name of Revv (PrimeMover Mobility Technologies Pvt. Ltd.) or its supply partners.",
    img: "https://www.revv.co.in/grapheneImages/summary-page/plus-icon.png",
  },
];

let imageData = [
  { img: "https://www.revv.co.in/imgs/company_logo/the-hindu-newpaper.webp" },
  { img: "https://www.revv.co.in/imgs/company_logo/The-Economic-Times.webp" },
  { img: "https://www.revv.co.in/imgs/company_logo/Indian_express.webp" },
  { img: "https://www.revv.co.in/imgs/company_logo/BW-logo.png" },
  { img: "https://www.revv.co.in/imgs/company_logo/YourStory.png" },
  { img: "https://www.revv.co.in/imgs/company_logo/businessinsider.png" },
];

let imageData_2 = [
  {
    img: "https://www.revv.co.in/grapheneImages/newopen/ic-happy-cus.svg",
    quest: "2500+",
    ans: "Happy Subscribers",
  },
  {
    img: "https://www.revv.co.in/grapheneImages/newopen/ic-across-india.svg",
    quest: "22+ Cities",
    ans: "Across India",
  },
  {
    img: "https://www.revv.co.in/grapheneImages/newopen/ic-subscription.svg",
    quest: "50 Mn+",
    ans: "Kms Travelled",
  },
  {
    img: "https://www.revv.co.in/grapheneImages/newopen/ic-customer-rating.svg",
    quest: "4.8 / 5",
    ans: "20k+ Reviews",
  },
];

let section_4 = [
  {
    img: "https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/hyundai.webp",
    para: "Hyundai Motor Company",
  },
  {
    img: "https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/edelweissFinancialServices.webp",
    para: "Edelweiss Financial Services",
  },
  {
    img: "https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/dreamIncubator.webp",
    para: "Dream Incubator",
  },
  {
    img: "https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/beenext.webp",
    para: "Beenext",
  },
];
let userName = localStorage.getItem("userName");

let mycars = [
  "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg",
  "https://images.pexels.com/photos/730134/pexels-photo-730134.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg",
  "https://images.pexels.com/photos/94272/sports-car-pkw-auto-vehicle-94272.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg",
];

let image = document.querySelector("#main-img");

setInterval(() => {
  let randomImg = Math.floor(Math.random() * 7);

  image.setAttribute("src", mycars[randomImg]);
}, 2000);

console.dir(document.body);
if (userName) {
  let tag = document.querySelector("#tag");
  tag.innerText = "LogOut";
  tag.setAttribute("href", "./index.html");
  document.querySelector("#user").innerText = userName;
} else {
  document.querySelector("#tag").innerText = "Login/Signup";
}

document.querySelector("#tag").addEventListener("click", (e) => {
  if (e.target.innerText == "LogOut") {
    localStorage.removeItem("userName");
    window.location.href = "../index.html";
  }
});

function addData(data, element) {
  data.forEach((el) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", el.img);

    let head = document.createElement("h4");
    head.innerText = el.quest;

    let para = document.createElement("p");
    para.innerText = el.ans;
    para.setAttribute("class", "para");

    head.addEventListener("click", (e) => {
      if (e.target.nextElementSibling.style.display == "block") {
        image.setAttribute("src", el.img);
        e.target.nextElementSibling.style.display = "none";
      } else {
        e.target.nextElementSibling.style.display = "block";
        e.target.nextElementSibling.style.margin = "10px 0";
        image.setAttribute(
          "src",
          "https://www.revv.co.in/grapheneImages/summary-page/minus-icon.png"
        );
      }
    });

    div.append(image, head, para);

    element.append(div);
  });
}

let section2 = document.querySelector("#section-2>div");

addData(faqs, section2);

function showPics(data, element) {
  data.forEach((el, i) => {
    let image = document.createElement("img");
    image.setAttribute("src", el.img);

    element.append(image);
  });
}

let div1 = document.querySelector("#section-3>div");

showPics(imageData, div1);

let div2 = document.querySelector("#section-3>div:nth-child(3)");

function myFunc(data, element) {
  data.forEach((el) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", el.img);

    let head = document.createElement("h3");
    head.innerText = el.quest;

    let para = document.createElement("p");
    para.innerText = el.ans;

    div.append(image, head, para);

    element.append(div);
  });
}

myFunc(imageData_2, div2);

function lastsection(data, element) {
  data.forEach((el) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", el.img);

    let para = document.createElement("p");
    para.innerText = el.para;

    div.append(image, para);

    element.append(div);
  });
}

let lastSection = document.querySelector("#section-4>div");

lastsection(section_4, lastSection);
