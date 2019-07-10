var restController = (function() {

    var restaurants = [];

    return {
        addNewRest: function(restaurant) {
            var lCRestaurant = restaurant.toLowerCase();
            if (restaurants.indexOf(lCRestaurant) === -1) {
                restaurants.push(lCRestaurant);
            }
        },

        getRndRest: function() {
            var selectedRest;
            if (restaurants.length > 0) {
                var rndNumber = Math.floor(Math.random() * restaurants.length);
                selectedRest = restaurants[rndNumber];
            } else {
                selectedRest = 'N \\ A';
            }
            return selectedRest;
        }
    };
    
})();


var UIController = (function() {
    var DOMstrings = {
        eventBtn: '.btn',
        resultDiv: '.result',
        resultTxt: 'result-text',
        inputAdd: '.add-rest'
    };

    function clearField() {
        document.querySelector(DOMstrings.inputAdd).value = '';
    }

    return {
        getDOMStrings: function() {
            return DOMstrings;
        },

        getInputValue: function() {
            var restaurant = document.querySelector(DOMstrings.inputAdd).value;
            clearField();

            if (restaurant) {
                return restaurant;
            } else {
                return -1;
            }

        },

        displayRest: function(rest) {
            document.getElementById(DOMstrings.resultTxt).textContent = rest;
        }
    };
})();


var controller = (function(UICtrl, restCtrl) {

    var DOM = UICtrl.getDOMStrings();
    //var restaurents = ['king meat', 'tzipora', 'bon bon', 'jems', 'oshi', '20 flavours'];
    
    function setupEventListener() {
        document.querySelector(DOM.eventBtn).addEventListener('click', generateRndRest);
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                var restaurant;

                restaurant = UICtrl.getInputValue();
                if (restaurant !== -1) {
                    restCtrl.addNewRest(restaurant);
                }
            }
        })
    }

    function generateRndRest(event) {
        var selectedRest;
        event.preventDefault();
        
        selectedRest = restCtrl.getRndRest();
        UICtrl.displayRest(selectedRest);
    }

    return {
        init: function() {
            document.getElementById(DOM.resultTxt).textContent = "";
            setupEventListener();
        }
    }

})(UIController, restController);

controller.init();