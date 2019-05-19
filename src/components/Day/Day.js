import React, { Component } from 'react';
import { connect } from 'react-redux';

/*Usando Create-React-App questo è l'unico modo che conosco per leggere dinamicamente un'immagine statica nel progetto - Vedi riga 27*/
const images = require.context('../../assets', true);

class Day extends Component {
    render(props) {
        
        const data = this.props.data;
        var a = new Date(data * 1000);
        var days = ['DOM', 'LUN', 'MAR', 'MER', 'GIO', 'VEN', 'SAB'];
        var dayOfWeek = days[a.getDay()];
        var daynumber = a.getDate()
        const icon = this.props.icona;
        const max = this.props.max;
        const min = this.props.min;

        this.findIcona = (el) => {
            return el.id === icon;
        }
        const immagine = this.props.icon.find(this.findIcona).href;

        return(
            <div className="day">
                <header>
                    {dayOfWeek} {daynumber}
                </header>
                <div className="icon-weather">
                    <img src={images(`.${immagine}`)} alt="Weather Rome" />
                </div>
                <div className="maxmin-temperature">
                    {max}°-{min}°
                </div>
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        icon: state.icon
    }
}

export default connect(mapStateToProps)(Day);