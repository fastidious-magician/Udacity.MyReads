// RFC on the best way to detect a click outside of an element
let outsideClickListener;
let removeClickListener;

const outsideClickDetection = (element, on_click_outside) => {
    outsideClickListener = event => {
        if (!element.contains(event.target)) { // or use: event.target.closest(selector) === null
            console.log("A click has been detected outside!!!");
            removeClickListener();
            on_click_outside();
        }
    };

    removeClickListener = () => {
        document.removeEventListener('click', outsideClickListener)
    };

    document.addEventListener('click', outsideClickListener)
};

module.exports = {
    "outsideClickDetection": outsideClickDetection
};

