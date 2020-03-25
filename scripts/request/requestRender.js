import { Request } from "./request.js";

const contentTarget = document.querySelector(".response")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("numberSelected", event => {
    const requestText = event.detail.text
    const multiplier = event.detail.multiplier

    contentTarget.innerHTML = ""
    for(var i=0;i<multiplier;i++) {
        contentTarget.innerHTML += Request(requestText)
    }
})
