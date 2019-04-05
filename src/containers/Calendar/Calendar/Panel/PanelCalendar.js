import React from 'react';
import './PanelCalendar.css';

export default class PanelCalendar extends React.Component {
  render() {
    return (
      <div className="panel-calendar">
        <div className="new-event-button">
          <p className="new-event-button-icon">
            <i className="far fa-calendar-plus"></i>
          </p>
          <p className="new-event-button-text">
            Add event
          </p>
        </div>

        <div className="panel-calendar-widget">
          <div className="date-selection">
            <p className="current-date-text">September 2019</p>
            <div className="date-selection-buttons">
              <span><i className="fas fa-chevron-circle-left"></i></span>
              <span><i className="fas fa-chevron-circle-right"></i></span>
            </div>
          </div>

          <div className="panel-calendar-widget-days">
            <div className="panel-calendar-widget-row" id="calendar-widget-day-names">
              <span className="widget-accent">S</span>
              <span className="widget-accent">M</span>
              <span className="widget-accent">T</span>
              <span className="widget-accent">W</span>
              <span className="widget-accent">T</span>
              <span className="widget-accent">F</span>
              <span className="widget-accent">S</span>
            </div>
            <div className="panel-calendar-widget-row">
              <span className="widget-dim">26</span>
              <span className="widget-dim">27</span>
              <span className="widget-dim">28</span>
              <span className="widget-dim">29</span>
              <span className="widget-dim">30</span>
              <span className="widget-dim">31</span>
              <span className="widget-dim">1</span>
            </div>
            <div className="panel-calendar-widget-row">
              <span className="widget-current">2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
            </div>
            <div className="panel-calendar-widget-row">
              <span>9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
              <span>14</span>
              <span>15</span>
            </div>
            <div className="panel-calendar-widget-row">
              <span>16</span>
              <span>17</span>
              <span>18</span>
              <span>19</span>
              <span>20</span>
              <span>21</span>
              <span>22</span>
            </div>
            <div className="panel-calendar-widget-row">
              <span>23</span>
              <span>24</span>
              <span>25</span>
              <span>26</span>
              <span>27</span>
              <span>28</span>
              <span>29</span>
            </div>
            <div className="panel-calendar-widget-row">
              <span>30</span>
              <span className="widget-dim">1</span>
              <span className="widget-dim">2</span>
              <span className="widget-dim">3</span>
              <span className="widget-dim">4</span>
              <span className="widget-dim">5</span>
              <span className="widget-dim">6</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}