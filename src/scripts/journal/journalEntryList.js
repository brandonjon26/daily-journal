/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */
import { getEntries } from "../data/dataManager.js"
import { JournalEntryComponent } from "./journal.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

export const EntryListComponent = () => {
    // Use the journal entry data from the data module component
    const entries = getEntries()
    let journalHTMLRep = ""
    for (const entry of entries) {
        journalHTMLRep = JournalEntryComponent(entry);        
        entryLog.innerHTML += journalHTMLRep;
    }

    // for (const entry of entries) {
    //     /*
    //         Invoke the component that returns an
    //         HTML representation of a single entry
    //     */
    // }
}