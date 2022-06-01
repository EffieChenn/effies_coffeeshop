import React, { useState, useEffect } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import '../css/Main.css';

const Contact = () => {

    const [username, setUserName] = useState("");
    const [useremail, setUserEmail] = useState("");
    const [userMsg, setUserMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(username, useremail, userMsg);
            const response = await fetch("http://localhost:6005/api/v1/contact", {               //fetch = get reqests
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: username,
                    email: useremail,
                    message: userMsg,
                }),
            });

            //清空表單 並告知使用者訊息已傳送
            if(response.status === 200){
                setUserName("");
                setUserEmail("");
                setUserMsg("Your message sent.");
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div>
            <Header />
            <Navigation />
            <div className="main">
                <form onSubmit={handleSubmit}>
                    <h1>CONTACT US</h1>
                    Your Name :
                    <br /><br />
                    <input type="text" value={username}  onChange={(e) => setUserName(e.target.value)} required />
                    <br /><br />
                    Your Email :
                    <br /><br />
                    <input type="email" value={useremail}  onChange={(e) => setUserEmail(e.target.value)} required />
                    <br /><br />
                    Message :
                    <br /><br />
                    <textarea
                        rows={10} cols={30}
                        placeholder="Tell us something......"
                        value={userMsg}
                        onChange={(e) => setUserMsg(e.target.value)}
                        required></textarea>
                    <br /><br />
                    <button type="submit">SEND</button>
                </form>
            </div>

        </div>
    );
};

export default Contact;