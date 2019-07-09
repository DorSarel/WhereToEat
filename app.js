var UIController = (function() {
    var DOMstrings = {
        eventBtn: '.btn',
        resultDiv: '.result',
        resultTxt: 'result-text'
    };



    return {
        getDOMStrings: function() {
            return DOMstrings;
        },

        displayRest: function(rest) {
            document.getElementById(DOMstrings.resultTxt).textContent = rest;
        }
    };
})();


var controller = (function(UICtrl) {

    var DOM = UICtrl.getDOMStrings();
    var restaurents = ['king meat', 'tzipora', 'bon bon', 'jems', 'oshi', '20 flavours'];
    
    function setupEventListener() {
        document.querySelector(DOM.eventBtn).addEventListener('click', generateRndRest);
    }

    function generateRndRest(event) {
        event.preventDefault();
        
        // 1. Generate Random number
        var rndNumber = Math.floor(Math.random() * restaurents.length);

        // 2. Select restaurent using number
        var selectedRest = restaurents[rndNumber];

        // 3. Update UI
        UICtrl.displayRest(selectedRest);
    }

    return {
        init: function() {
            document.getElementById(DOM.resultTxt).textContent = "";
            setupEventListener();
        }
    }

})(UIController);

controller.init();