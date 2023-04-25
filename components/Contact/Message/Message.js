

const Message = () => {
  return (
    <section
      className="max-w-5xl mx-auto   w-full bg-cover bg-center bg-no-repeat text-white bg-fixed"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1606914469276-31bc4103c50c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
      }}
    >
      <div className="w-full h-full py-12 bg-black/40 ">
        <h1 className="text-3xl font-mono uppercase text-center">
          Send Your Message
        </h1>
        <div className="flex justify-center">
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="">Your Name:</label>
                <input
                  name="name"
                  className="w-full bg-transparent border outline-0 px-2 text-sm py-1 rounded"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="">Your Email</label>
                <input
                  name="email"
                  className="w-full bg-transparent border outline-0 px-2 text-sm py-1 rounded"
                  type="email"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="">Phone Number:</label>
                <input
                  name="phone"
                  className="w-full bg-transparent border outline-0 px-2 text-sm py-1 rounded"
                  type="tel"
                />
              </div>
              <div>
                <label htmlFor="">Query Question:</label>
                <input
                  name="question"
                  className="w-full bg-transparent border outline-0 px-2 text-sm py-1 rounded"
                  type="text"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="">Your Message:</label>
              <textarea
                className="w-full outline-0  bg-transparent border rounded px-2 py-1"
                name="ans"
                id=""
                rows="3"
              ></textarea>
            </div>
            <div>
              <input className="border px-4 py-1 rounded mt-4 cursor-pointer hover:bg-gray-900 duration-500" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Message;
