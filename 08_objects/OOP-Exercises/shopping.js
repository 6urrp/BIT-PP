"strict mode";


(function shoppingList () {
    
    function Product (name, price, expDate) {
        this.productId = parseInt(((99999 - 10000) * Math.random()) + 10000);
        this.productName = name;
        this.productPrice = price.toFixed(2);
        this.expirationDate = expDate;
        this.getInfo = function () {
            var pName = this.productName;
            var letter = (pName.charAt(0).concat(pName.charAt(pName.length-1))).toUpperCase();
            var letterId = letter + this.productId;
            return letterId + ", " + pName + ", " + this.productPrice;
        }
    }
    

    function ShoppingBag () {
        this.listOfProducts = [];
        this.addProduct = function (product) {
            if (Date.parse(product.expirationDate) > Date.now()) {
                this.listOfProducts.push(product);
                return "Your product has valid expiration date!";
            } else {
                return "Your product has expired!";
            }

        }
        this.averagePrice = function () {
            var average = this.calculateTotalPrice() / this.listOfProducts.length;
            return average.toFixed(3);
        }
        this.getMostExpensive = function () {
            var max = -Infinity;
            var maxProduct;
            this.listOfProducts.forEach (function (el){
                var currentPrice = parseFloat(el.productPrice); //ovde mi cena dodje kao string, zato parsiram. A zasto je string?!?!
                if (currentPrice > max) {
                    max = currentPrice;
                    maxProduct = el.getInfo();
                }
            })
            return maxProduct;
        }
        this.calculateTotalPrice = function () {
            var priceOfAll = 0;
            this.listOfProducts.forEach(function (el){
                var productPrice = parseFloat(el.productPrice);
                priceOfAll += productPrice;
            })
            return priceOfAll;
        }
    }

    
    function PaymentCard (balance, status, validDate) {
        this.accountBalance = balance.toFixed(2);
        this.status = status;
        this.valid = validDate;
    }
    
    function checkoutAndBuy (bag, card) {
        var cardAmount = card.accountBalance;
        var totalPrice = bag.calculateTotalPrice();
        if (cardAmount >= totalPrice) {
            return "Your purchase is successful!"
        } else {
            var missingAmount = totalPrice - cardAmount;
            return "You are missing " + missingAmount.toFixed(2) + " to complete your purchase!"
        }
    }

})();




