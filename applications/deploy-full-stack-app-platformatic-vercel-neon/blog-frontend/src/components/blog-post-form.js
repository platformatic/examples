export default function BlogPostForm({ submitLabel, handleFormData, saveError, loadError = false, values = {} }) {
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = {
      title: event.target.title.value,
      body: event.target.body.value,
    }

    handleFormData(formData)
  }

  return (
    <>
      {saveError && <p className="bg-red-200 p-4">There was an error saving the post. Please try again.</p>}
      {loadError && <p className="bg-red-200 p-4">There was an error loading the post. Please try again.</p>}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <label htmlFor="title" className="block">
          <span>Title</span>
          <input type="text" id="title" name="title" defaultValue={values.title} required="required" maxLength="255" className="mt-1 w-full" />
        </label>
        <label htmlFor="quote" className="block">
          <span>Post</span>
          <textarea id="body" name="body" defaultValue={values.body} required="required" className="mt-1 w-full"></textarea>
        </label>
        <input type="submit" value={submitLabel} disabled={loadError && "disabled"} className="bg-green-400 text-gray-800 rounded p-3" />
      </form>
    </>
  )
}
