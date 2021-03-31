/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

// concerned only with accepting a single entry object and generating it into an HTML representation of that object through string interpolation
export const JournalEntryComponent = (entry) => {
    return `
    <hr>
        <section id="entry--${entry.id}" class="journalEntry">
            <p> date: ${entry.date}</p>
            <p> concept: ${entry.concept}</p>
            <p> entry: ${entry.entry}</p>
            <p> mood: ${entry.mood}</p>
        </section>
    </hr>
    `
}