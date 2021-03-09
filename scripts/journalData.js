const journalEntries = [
    {
        id: 1,
        date: "03/07/2021",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Happy"
    },
    {
        id: 2,
        date: "03/08/2021",
        concept: "Java Script",
        entry: "I've been trying to get better with more practice with java script, it's not going well.",
        mood: "Sad"
    },
    {
        id: 3,
        date: "03/09/2021",
        concept: "JSON server",
        entry: "started learning about JSON and working with it. I'm getting the hang of it.",
        mood: "Happy"
    }
]


export const getJournalEntries = () => {
    const sortedByDate = journalEntries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}
// console.log(getJournalEntries());