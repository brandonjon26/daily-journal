const entryForm = () => {
    return `
        <form action="">
                <fieldset>
                    <label for="journalDate">Date of entry</label>
                    <input type="date" name="journalDate" id="journalDate">
                    <label for="journalConcept">Concepts covered</label>
                    <input type="text">
                    <label for="journalEntry">Journal Entry</label>
                    <textarea id="journalEntry" name="journalEntry"></textarea>
                    <label for="moodDropDown">Mood</label>
                    <select name="moods" id="mood-select">
                        <option value="">--Mood for today--</option>
                        <option value="empowered">EMPOWERED</option>
                        <option value="ecstatic">Ecstatic</option>
                        <option value="happy">Happy</option>
                        <option value="indifferent">Indifferent</option>
                        <option value="sad">Sad</option>
                        <option value="lost">Lost</option>
                        <option value="frustrated...">frustrated...</option>
                    </select>
                </fieldset>
            <button>Record Todays Entry</button>
        </form>
    `
}

export const showEntryForm = () => {
    const entryFormTarget = document.querySelector(".entryForm")
    entryFormTarget.innerHTML = entryForm()
}
    