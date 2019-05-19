import React, { Component } from 'react';

import Day from '../Day/Day';

export default class Week extends Component {
    renderWeek() {
        return this.props.week.slice(1, 8).map((day, index) => {
            return (
                <Day key={index} data={day.time} icona={day.icon} max={day.apparentTemperatureMax.toFixed(0)} min={day.apparentTemperatureMin.toFixed(0)}/>
            )
        })
    }

    render(props) {
        return (
            <div className="week">
                {this.renderWeek()}
            </div>
        )
    }
} 