import React from "react";

export default function Contact() {
    return (
        <div className="page">
            <h1>Contact</h1>
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="John Doe"/>
                </div>
                <div class="mb-3">
                    <label for="email" className="form-label">Email address:</label>
                    <input type="email" className="form-control" id="email" placeholder="john-doe@email.com"/>
                </div>
                <div class="mb-3">
                    <label for="message" className="form-label">Message:</label>
                    <textarea className="form-control" id="message" rows="3" placeholder="Write message"></textarea>
                </div>
                <button type="submit" className="btn-custom">Submit</button>
            </form>
        </div>
    )
}