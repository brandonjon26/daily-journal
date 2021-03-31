import { getEntries, useEntryArray } from "./data/dataManager.js"
import { journalEntryList } from "./journal/journalEntryList.js"
import { showEntryForm } from "./forms/entryForm.js"

// variable referencing global container (use for event listeners)
const applicationElement = document.querySelector(".dailyJournal")

// this function initializes our entries data and renders the entries to the dom
const showPastEntries = () => {
    // getEntries is an asynchronous function: .then required
    getEntries()
        // wait for the response from the API
        .then(() => {
            // only concerned with rendering recieved entry data to the dom
            const entries = useEntryArray().reverse()
            //after response is recieved, we can render data to the dom
            journalEntryList(entries)
    })
}

const startDailyJournal = () => {
    // this function should invoke all of the necessary functions for the application to begin
    showPastEntries()
    showEntryForm()
}

//parent component that starts everything
startDailyJournal();