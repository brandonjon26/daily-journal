export const journalEntry = () => {
    return `
    <form class="newEntry">
        <div>
            <input value=""
                   name="EntryTitle"
                   class="newEntry__input"
                   type="text"
                   placeholder="Title" />
        </div>
        <div>
            <input value=""
                   name="postURL"
                   class="newEntry__input"
                   type="text"
                   placeholder="URL of gif" />
        </div>

        <textarea name="entryDescription"
            class="newEntry__input newEntry__description"
            placeholder="Story behind your gif..."></textarea>

        <button id="newPost__submit">Save</button>
        <button id="newPost__cancel">Cancel</button>
    </form>
    `
}