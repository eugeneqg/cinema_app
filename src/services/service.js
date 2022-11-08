import React, { Component } from "react";

class Service extends Component {
        getData = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`There was an error in ${res}`);
        } else {
            return res.json()
        }
    }

}

export default Service;