class Animation {
    constructor(leftPart, midPart, rightPart, btn){
        this.leftblock = document.querySelector(leftPart)
        this.midblock = document.querySelector(midPart)
        this.rightblock = document.querySelector(rightPart)
        this.btn = document.getElementById(btn)

        console.log(this.leftblock)

        this.btn.addEventListener("click", () => {
            event.preventDefault()
            this.leftblock.classList.add("left-part-after")
            this.midblock.classList.add("mid-part-after")
        })
    }
}

let myAnimation = new Animation(".left-part",".mid-part",".right-part", "btn")
