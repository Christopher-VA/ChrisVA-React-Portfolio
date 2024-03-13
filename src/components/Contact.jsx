import React from "react";

function Contact() {
    return (
        <container>
            <div>
                <h2>Contact Me</h2>
            </div>
            <div>
                <form>Name:
                    <input type="text" />
                </form>
                <form>Email:
                    <input type="text" />
                </form>
                <form>Message:
                    <input type="text" />
                </form>
            </div>
        </container>
    )
}

export default Contact;