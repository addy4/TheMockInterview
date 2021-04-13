import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">Author : Aadhaar Bhatia | Email ID : aadhaarbhatia.99@gmail.com</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
