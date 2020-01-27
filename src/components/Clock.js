import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            now: `${this.setTime()}`
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(()=>{
            const clockDisplay = this.setTime();
            this.setState({
                now: clockDisplay
            });
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render () {
        return (
            <div>{ this.state.now.toString() }</div>
        )
    }

    // 現在時刻を取得する
    setTime = () => {
        const now          = new Date();
        const nowYear      = now.getFullYear();
        const nowMonth     = now.getMonth() + 1;
        const nowDay       = now.getDate();
        const nowHour      = now.getHours();
        const nowMinutes   = now.getMinutes();
        const dayOfWeek    = now.getDay();
        const dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];
        const clockDisplay = `${nowYear}年 ${nowMonth}/${nowDay}(${dayOfWeekStr}) ${nowHour}:${nowMinutes}`;

        return clockDisplay;
    }
}

