import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Heading from "../Login-and-SignUp/Heading"
import "./Calendar.css";

export default function Calendar({ toggleTheme }) {
  const location = useLocation();
  const encodedEmail = location?.state?.encodedEmail;

  const [currentDate, setCurrentDate] = useState(new Date());

  const navigateToPreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const prevMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
      return prevMonth;
    });
  };

  const navigateToNextMonth = () => {
    setCurrentDate((prevDate) => {
      const nextMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
      return nextMonth;
    });
  };

  const navigateToPreviousYear = () => {
    setCurrentDate((prevDate) => {
      const prevYear = new Date(prevDate.getFullYear() - 1, prevDate.getMonth(), 1);
      return prevYear;
    });
  };

  const navigateToNextYear = () => {
    setCurrentDate((prevDate) => {
      const nextYear = new Date(prevDate.getFullYear() + 1, prevDate.getMonth(), 1);
      return nextYear;
    });
  };

  const getMonthName = (date) => {
    return date.toLocaleString("default", { month: "long" });
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div className="calendar-day empty" key={`empty-${i}`}></div>);
    }

    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    for (let i = 1; i <= daysInMonth; i++) {
      const isCurrentMonth = currentDate.getMonth() === currentMonth && currentDate.getFullYear() === currentYear;
      const isToday = isCurrentMonth && i === currentDay ? "today" : "";
      days.push(
        <div className={`calendar-day ${isToday}`} key={i}>
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <>
      <Navbar hb={true} toggleTheme={toggleTheme} encodedEmail={encodedEmail} />
      <div className="cal">
        <Heading heading="Calendar" />
        <hr />
        <Card>
          <div className="calendar">
            <div className="calendar-header">
              <button onClick={navigateToPreviousYear}>&#8249;</button>
              <button onClick={navigateToPreviousMonth}>&#8249;</button>
              <h2>{getMonthName(currentDate)}</h2>
              <h2>{currentDate.getFullYear()}</h2>
              <button onClick={navigateToNextMonth}>&#8250;</button>
              <button onClick={navigateToNextYear}>&#8250;</button>
            </div>
            <div className="calendar-body">
              <div className="calendar-days">
                <div className="day">Sun</div>
                <div className="day">Mon</div>
                <div className="day">Tue</div>
                <div className="day">Wed</div>
                <div className="day">Thu</div>
                <div className="day">Fri</div>
                <div className="day">Sat</div>
              </div>
              <div className="calendar-dates">{renderCalendarDays()}</div>
            </div>
          </div>
        </Card>
        <div className="reminders">
          <Heading heading="Reminders" />
          <hr />
        </div>
      </div>
    </>
  );
};

// export default Calendar;
