import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>

            <main>
                <h1>Contact us</h1>

                <form>
                    <div>
                        <label>Name</label>
                        <input type='text' required placeholder='Enter Name' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='text' required placeholder='abc@xyz.com' />
                    </div>
                    <div>
                        <label>Message</label>
                        <input type='text' required placeholder='Tell us about your query...'/>
                    </div>
                    <button type='submit'>Send</button>
                </form>
            </main>

        </div>
    )
}

export default Contact