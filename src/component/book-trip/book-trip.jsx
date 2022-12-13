import React from 'react'
import './style.css'
export default class BookTrip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [
                { name: 'Iran', towns: ['tehran', 'qom', 'isfahan', 'mashhad'] },
                { name: 'Usa', towns: ['washinton', 'newYork', 'chiacogo', 'californi'] },
                { name: 'Turkey', towns: ['ankara', 'istanbol', 'antalia', 'ترکیه'] }
            ],
            firstName:'',lastName:'',
            SelectedCoun: '',
            SelectedTown: '',
            AllValid: false,
        }
    }
    SelectedCountry(event) {
        this.setState({
            SelectedCoun: event.target.value
        })
    }
    printSom(event) {
        event.preventDefault();
    }
    optionHandler(event) {
        this.setState({
            SelectedTown: event.target.value
        })
    }
    BtnHandler() {
        (this.state.SelectedCoun !== '' && this.state.SelectedTown !== '' && (
            this.setState({
                AllValid:true
            })
        )
        )
    }

    render() {
        return (
            <div className='contianer'>
                <form onSubmit={(event) => this.printSom(event)}>
                    {this.state.AllValid === true && (
                        <div>
                            <p>hello world</p>
                        </div>
                    )}
                    <input type="text" placeholder="firstname" />
                    <input type="text" placeholder="last name" />
                    <input type="text" placeholder="phone number" />
                    <input type="text" placeholder="email" />
                    <select name="" id="countrie" onChange={(event) => this.SelectedCountry(event)}>
                        <option>please select</option>
                        {
                            this.state.countries.map((element, index) => (
                                <option key={index}>{element.name}</option>
                            ))
                            
                        }
                    </select>
                    <select name="" id="town">
                        <option >Please Select</option>
                        {this.state.countries.map((country) => (
                            (country.name === this.state.SelectedCoun && (
                                country.towns.map((town, index) => (
                                    <option key={index} onClick={(event) => this.optionHandler(event)}>{town}</option>
                                ))
                            ))
                        ))}
                    </select>
                    <div className="button">
                    
                    <input type="submit" value="book a trip" onSubmit={() => this.BtnHandler()} />
                    </div>
                </form>
            </div>
        )
    }

}