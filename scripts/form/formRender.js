import { Form } from "./form.js"

const contentTarget = document.querySelector(".form")

export const FormRender = () => {
    contentTarget.innerHTML = Form()
}