"use strict";


(function shoppingList () {
    
    function Product (name, price, expDate) {
        if (!name || !price || !expDate) {
            throw new Error ("All fields are required!")
        }
        this.productId = parseInt(((99999 - 10000) * Math.random()) + 10000);
        this.productName = name;
        this.productPrice = price.toFixed(2);
        this.expirationDate = new Date(expDate);
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
            if (product.expirationDate.getTime() > Date.now()) {
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
        if (!balance || !status || !validDate) {
            throw new Error ("All fields are required!")
        }
        this.accountBalance = balance.toFixed(2);
        this.status = status;
        this.valid = new Date (validDate);
    }
    
    function checkoutAndBuy (bag, card) {
        if (!(bag instanceof ShoppingBag) || !(card instanceof PaymentCard)) {
            throw new Error ("Invalid input!")
        }
        var cardAmount = card.accountBalance;
        var totalPrice = bag.calculateTotalPrice();
        if (card.valid.getTime() > Date.now()) {
            if (cardAmount >= totalPrice) {
                return "Your purchase is successful!"
            } else {
                var missingAmount = totalPrice - cardAmount;
                return "You are missing " + missingAmount.toFixed(2) + " to complete your purchase!"
            }
        } else {
            throw new Error ("Your card has expired!");
        }
        
        
    }

    try {
        var product = new Product ("sir", 250, "Oct 26 2021");
        var product2 = new Product ("origano", 95, "Dec 22 2023")
        var card = new PaymentCard(300, true, "Feb 03 2022");

        var bag = new ShoppingBag();
        bag.addProduct(product);
        bag.addProduct(product2)
        var output = checkoutAndBuy(bag, card);
        console.log(output);
    } catch (err) {
        console.log(err.message);
    }

})();




