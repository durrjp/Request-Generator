
const contentTarget = document.querySelector(".form")
const eventHub = document.querySelector(".container")

export const FormRender = () => {
    render()
}

const render = () => {
    let numbers = [];
    for (var i = 1; i <= 100; i++) {
        numbers.push(i);
    }
    contentTarget.innerHTML = `
        <form>
            <fieldset>
                <label>Request:</label>
                <textarea id="requestText" cols="40" rows="4"></textarea><br>
            </fieldset>
            <fieldset>
                <label>Multiplier:</label>
                <select class="dropdown" id="numberSelect">
                    <option value="0">Please select a number...</option>
                    ${
                        numbers.map(number => {
                            return `<option value="${number}">${number}</option>`
                        })
                    }
                </select><br>
            </fieldset>
        </form>
        <button id="saveRequest">Show Request</button>
    `
}

contentTarget.addEventListener("click", event => {
    if (event.target.id === "saveRequest") {

        const requestText = document.querySelector("#requestText").value
        const requestMultiplier = document.querySelector("#numberSelect").value
       
        const numberSelectEvent = new CustomEvent("numberSelected", {
            detail: {
                text: requestText,
                multiplier: requestMultiplier
            }
        })
            

        eventHub.dispatchEvent(numberSelectEvent)

    }
})

