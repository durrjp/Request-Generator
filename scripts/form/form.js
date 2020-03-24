
export const Form = () => {
    return `
    <form>
        <fieldset>
            <label>Request:</label><textarea id="noteText" cols="40" rows="4"></textarea><br>
        </fieldset>
        <fieldset>
            <label>Criminal:</label>
            <select class="dropdown" id="criminalSelect">
                <option value="0">Please select a number...</option>
                <option value="number">1</option>
            </select><br>
        </fieldset>
    </form>
    <button id="saveRequest">Show Request</button>
    `
}