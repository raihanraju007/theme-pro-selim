let caseStudy = document.getElementById("case_study");
let length = caseStudy.children.length;
for (let i = 0; i < length; i++) {
    caseStudy.children[i].addEventListener("click", function () {
        this.classList.add("case-study-menu");

        for (let j = 0; j < length; j++) {
            if (Number.parseInt(caseStudy.children[j].id) === i) {
                select = j;
                continue;
            }
            else caseStudy.children[j].classList.remove("case-study-menu");
        }
    })
}

console.log(length);
