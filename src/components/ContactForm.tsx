function ContactForm() {
    const submitForm = (e: any) => {
        e.preventDefault()
        console.log("things")
    }

    return (
        <div className="p-2 flex flex-col md:px-0 md:w-1/2">
            <h1 className="text-xl text-center font-semibold md:text-3xl md:font-bold md:mt-1">
                Send me a message
            </h1>
            <form onSubmit={(e) => submitForm(e)} className="w-full px-3 md:px-10 md:py-2 md:mt-8">
                <div className="flex flex-col gap-2 md:mb-4">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="ex. example@example.com"
                        className="bg-transparent border rounded-lg px-3 py-2 backdrop-blur-lg"
                    />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="Name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="ex. John Doe"
                        className="bg-transparent border rounded-lg px-3 py-2 backdrop-blur-lg"
                    />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        rows={2}
                        placeholder="ex. Nice"
                        className="bg-transparent border rounded-lg px-3 py-2 backdrop-blur-lg"
                    ></textarea>
                </div>
                <input
                    type="submit"
                    className="px-3 py-2 border bg-transparent rounded-lg w-full hover:bg-accent/20"
                    value="Send"
                />
            </form>
        </div>
    );
}

export default ContactForm;
