// export const getJournalEntries = () => {
//     const sortedByDate = journalEntries.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }
// // console.log(getJournalEntries());
let entryArray = [];

export const useEntryArray = () => {
    return [...entryArray]
}

export const getEntries = () => {

    return fetch("http://localhost:8090/entries")
    .then(response => response.json())
    .then(parsedResponse => {
        entryArray = parsedResponse
        return parsedResponse;
    })
}

const loggedInUser = {
	id: 1,
	name: "Brandon",
	email: "brandon@myjournal.com"
}

export const getLoggedInUser = () => {
	return loggedInUser;
}