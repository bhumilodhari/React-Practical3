import React, { Component } from 'react'
import TodoDateStyle from '../../styled/TodoDate/todoDateStyle';
import InnerTodoDateStyle from '../../styled/TodoDate/innerTodoDateStyle';
import DateStyle from '../../styled/TodoDate/dateStyle';
import MonthYearStyle from '../../styled/TodoDate/monthYearStyle';
import Month from '../../styled/TodoDate/month';
import Year from '../../styled/TodoDate/year';
import Day from '../../styled/TodoDate/day';
import { day , month , year, date } from '../../Util/util';

class TodoDate extends Component {
    render() {
    return (
        <TodoDateStyle>
            <InnerTodoDateStyle>
                <DateStyle>{date}
                    <MonthYearStyle>
                        <Month>{month}</Month>
                        <Year>{year}</Year>
                    </MonthYearStyle>
                </DateStyle>
            </InnerTodoDateStyle>
            <Day>{day}</Day>
        </TodoDateStyle>
    )}
}

export default TodoDate;