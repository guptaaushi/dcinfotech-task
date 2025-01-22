const cardContainer = document.querySelector(".card_container"); // Select the container for cards
const seeMoreBtn = document.createElement("button"); // Create "See More" button
seeMoreBtn.id = "see-more-btn"; // Add ID to the button
seeMoreBtn.textContent = "See More";
document.querySelector("#product").appendChild(seeMoreBtn); // Append button to the section

// Additional Products Data
const additionalProducts = [
  {
    name: "Elegant Pot",
    price: "$12.99",
    oldPrice: "$18.99",
    imgSrc: "pot43.jpg",
    discount: "-15%",  
  },
  {
    name: "Modern Vase",
    price: "$19.99",
    oldPrice: "$25.99",
    imgSrc: "pot46.webp",
    discount: "-20%",
  },
  {
    name: "Classic Pot",
    price: "$10.99",
    oldPrice: "$14.99",
    imgSrc: "pot45.jpg",
    discount: "-10%",
  },
];

let productsAdded = false;

seeMoreBtn.addEventListener("click", () => {
  if (!productsAdded) {
    // Add new products
    additionalProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "card";

      // Discount
      const discountSpan = document.createElement("span");
      discountSpan.className = "discount";
      discountSpan.textContent = product.discount;

      // Card image container
      const cardImg = document.createElement("div");
      cardImg.className = "card_img";

      const img = document.createElement("img");
      img.src = product.imgSrc;
      img.alt = product.name;

      // Icons
      const iconsDiv = document.createElement("div");
      iconsDiv.className = "icons";

      const shareLink = document.createElement("a");
      shareLink.href = "#";
      shareLink.innerHTML = `<i class='bx bx-share'></i>`;

      const cartBtn = document.createElement("a");
      cartBtn.href = "#";
      cartBtn.className = "cart-btn";
      cartBtn.textContent = "Add to cart";

      const heartLink = document.createElement("a");
      heartLink.href = "#";
      heartLink.innerHTML = `<i class='bx bx-heart'></i>`;

      iconsDiv.appendChild(shareLink);
      iconsDiv.appendChild(cartBtn);
      iconsDiv.appendChild(heartLink);

      cardImg.appendChild(img);
      cardImg.appendChild(iconsDiv);

      // Content
      const contentDiv = document.createElement("div");
      contentDiv.className = "content";

      const productName = document.createElement("h3");
      productName.textContent = product.name;

      const priceDiv = document.createElement("div");
      priceDiv.className = "price";
      priceDiv.innerHTML = `${product.price}<span>${product.oldPrice}</span>`;

      contentDiv.appendChild(productName);
      contentDiv.appendChild(priceDiv);

      // Append all to card
      card.appendChild(discountSpan);
      card.appendChild(cardImg);
      card.appendChild(contentDiv);

      // Add card to container
      cardContainer.appendChild(card);
    });

    productsAdded = true;
    seeMoreBtn.textContent = "Show Less";
  } else {
    // Remove added products
    const allCards = document.querySelectorAll(".card");
    const initialCardsCount = 6; // Initial number of static cards
    allCards.forEach((card, index) => {
      if (index >= initialCardsCount) {
        cardContainer.removeChild(card);
      }
    });

    productsAdded = false;
    seeMoreBtn.textContent = "See More";
  }
});




// form
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting
  
    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Custom validation checks
    if (name === "") {
      alert("Please enter your name.");
      return;
    }
  
    if (email === "" || !validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (number === "" || isNaN(number) || number.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }
  
    if (message === "") {
      alert("Please enter your message.");
      return;
    }
  
    // If all validations pass, submit the form or send the data via AJAX
    alert("Form submitted successfully!");
  
    // Example of sending form data to a server (using Fetch API)
    const formData = {
      name,
      email,
      number,
      message
    };
  
    fetch("https://example.com/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submitted", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
  
  // Email validation function
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }

  
  // Get the modal and button
const modal = document.getElementById('modal');
const btn = document.getElementById('learnMoreBtn');
const closeBtn = document.querySelector('.close');

// Open the modal when the button is clicked
btn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close the modal when the "x" is clicked
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// review

document.getElementById('seeMore').addEventListener('click', function() {
    const moreReviews = document.querySelector('.more-reviews');
    
    // Toggle display of additional reviews
    if (moreReviews.style.display === 'none' || moreReviews.style.display === '') {
      moreReviews.style.display = 'block';
      this.classList.add('rotated'); // Rotate the arrow when reviews are shown
      this.querySelector('.see-more-text').innerText = 'See Less'; // Change text to "See Less"
    } else {
      moreReviews.style.display = 'none';
      this.classList.remove('rotated'); // Reset arrow rotation
      this.querySelector('.see-more-text').innerText = 'See More'; // Change text back to "See More"
    }
  });
  
  
  