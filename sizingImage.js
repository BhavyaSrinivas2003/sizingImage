function sizeImgFun() {
    let imageElement = document.getElementById("image");

    let originalImageWidth = "200px";

    imageElement.style.width = originalImageWidth;
    document.getElementById("imageWidth").textContent = imageElement.style.width;

    function incrementButtonFun() {
        if (imageElement.style.width === "300px") {
            document.getElementById("warningMessage").textContent = "Too big. Decrease the Size of the Image";
        } else {
            document.getElementById("warningMessage").textContent = ""
            imageElement.style.width = parseInt(imageElement.style.width) + parseInt("5") + ("px");
            document.getElementById("imageWidth").textContent = imageElement.style.width;

        }
    }

    function decrementButtonFun() {
        if (imageElement.style.width === "100px") {
            document.getElementById("warningMessage").textContent = "Can't Visible. Increase the size of the Image";
        } else {
            document.getElementById("warningMessage").textContent = ""
            imageElement.style.width = parseInt(imageElement.style.width) - parseInt("5") + ("px");
            document.getElementById("imageWidth").textContent = imageElement.style.width

        }
    }
    let increaseBtnEl = document.getElementById("incrementButton");
    increaseBtnEl.onclick = function() {
        incrementButtonFun();
    };
    let decreaseBtnEl = document.getElementById("decrementButton");
    decreaseBtnEl.onclick = function() {
        decrementButtonFun();
    };

}