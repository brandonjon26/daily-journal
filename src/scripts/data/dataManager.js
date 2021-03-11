// export const getJournalEntries = () => {
//     const sortedByDate = journalEntries.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }
// // console.log(getJournalEntries());

export const getEntries = () => {

    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
}