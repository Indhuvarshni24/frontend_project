import React from "react";

const Createuser = () => {
    return <div>
        <h1>Create user</h1>
        <form>
            <label>Enter your name:</label>
            <input type="text" placeholder="Enter your name" />
            <label>Enter your emaail:</label>
            <input type="text" placeholder="Enter your email" />
            <label>Enter your address:</label>
            <input type="text" placeholder="Enter your address" />
            <button>Submit</button>
        </form>
    </div>;
};

export default Createuser;