
import { JournalEntryComponent } from "./journalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

export const journalEntryList = (entries) => {
    // declaring a variable that will hold all HTML for every entry in the entries array
    let journalHTMLRep = ""
    // loop over array to access each entry in the array of entries
    entries.forEach(entry => {
        // for every entry, we are first invoking journalEntryComponent and passing that entry to it as an argument
        // journalEntryComponent returns an HTML representation of that entry
        // we append that HTML representation to the value of journalHTMLRep 
        journalHTMLRep += JournalEntryComponent(entry); 
    })
    // at this point, the value of journalHTMLRep is = all of the HTML reps for all of the entries
    // we replace the inner.HTML of entryLog with journalHTMLRep
    entryLog.innerHTML = journalHTMLRep;
}



// for (const entry of entries) {
//    journalHTMLRep += JournalEntryComponent(entry);      
// }