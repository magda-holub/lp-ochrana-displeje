function dropDown() {
    let boxes = document.querySelectorAll(".lpFaq--box");

    let openbox = (box) => {
        let content = box.querySelector(".lpFaq--box--content");
        box.classList.add("lpFaq--box__active");
        content.style.maxHeight = content.scrollHeight + 10 + "px";
    };

    let closebox = (box) => {
        let content = box.querySelector(".lpFaq--box--content");
        box.classList.remove("lpFaq--box__active");
        content.style.maxHeight = null;
    };

    boxes.forEach((box) => {
        let handle = box.querySelector(".lpFaq--box--handle");
        let content = box.querySelector(".lpFaq--box--content");

        handle.onclick = () => {
            if (content.style.maxHeight) {
                closebox(box);
            } else {
                boxes.forEach((box) => closebox(box));
                openbox(box);
            }
        };
    });

}; dropDown()