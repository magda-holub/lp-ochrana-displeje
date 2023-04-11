function dropDown() {
    let boxes = document.querySelectorAll(".lpFaq__box");

    let openbox = (box) => {
        let content = box.querySelector(".lpFaq__box__content");
        box.classList.add("lpFaq__box--active");
        content.style.maxHeight = content.scrollHeight + 10 + "px";
    };

    let closebox = (box) => {
        let content = box.querySelector(".lpFaq__box__content");
        box.classList.remove("lpFaq__box--active");
        content.style.maxHeight = null;
    };

    boxes.forEach((box) => {
        let handle = box.querySelector(".lpFaq__box__handle");
        let content = box.querySelector(".lpFaq__box__content");

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