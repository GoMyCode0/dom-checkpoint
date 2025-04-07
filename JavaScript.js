document.addEventListener("DOMContentLoaded", () => {
    const plusBtns = document.querySelectorAll(".plus");
    const minusBtns = document.querySelectorAll(".minus");
    const hearts = document.querySelectorAll(".heart");
  
    const totalDisplay = document.getElementById("total-amount");
  
    //*this for calculating
    function calculateTotal() {
      const productCards = document.querySelectorAll(".product-card");
      let total = 0;
  
      productCards.forEach(card => {
        const price = parseFloat(card.querySelector(".product-price").textContent.replace("$", ""));
        const quantity = parseInt(card.querySelector(".qty").textContent);
        total += price * quantity;
      });
  
      totalDisplay.textContent = `$${total.toFixed(2)}`;
    }

       //*this for adding
  
    plusBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const qtyEl = btn.parentElement.querySelector(".qty");
        qtyEl.textContent = parseInt(qtyEl.textContent) + 1;
        calculateTotal();
      });
    });
  
       //*this is for heart emoji
    minusBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const qtyEl = btn.parentElement.querySelector(".qty");
        const current = parseInt(qtyEl.textContent);
        if (current > 0) {
          qtyEl.textContent = current - 1;
          calculateTotal();
        }
      });
    });
  
    hearts.forEach(btn => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("liked");
        btn.textContent = btn.classList.contains("liked") ? "❤️" : "🤍";
      });
    });
  });
  