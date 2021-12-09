import React from "react";
import "./WidgetSm.css";
import {Visibility } from '@material-ui/icons';

const WidgetSm = () => {
  return <div className="widgetSm">
        <span className="widgetSmTitle">New Members</span>
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
           <img src="https://images.pexels.com/photos/8638223/pexels-photo-8638223.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Kendric</span>
              <span className="widgetSmUserTitle">Actress</span>
            </div>

            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon'/>
              Display
            </button>


          </li>
          <li className="widgetSmListItem">
           <img src="https://images.pexels.com/photos/8638223/pexels-photo-8638223.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Kendric</span>
              <span className="widgetSmUserTitle">Actress</span>
            </div> 

            <button className='widgetSmButton'>
              <Visibility  className='widgetSmIcon'/>
              Display
            </button>


          </li>
          <li className="widgetSmListItem">
           <img src="https://images.pexels.com/photos/8638223/pexels-photo-8638223.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Kendric</span>
              <span className="widgetSmUserTitle">Actress</span>
            </div>

            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon'/>
              Display
            </button>


          </li>
          <li className="widgetSmListItem">
           <img src="https://images.pexels.com/photos/8638223/pexels-photo-8638223.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Kendric</span>
              <span className="widgetSmUserTitle">Actress</span>
            </div>

            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon'/>
              Display
            </button>


          </li>
          <li className="widgetSmListItem">
           <img src="https://images.pexels.com/photos/8638223/pexels-photo-8638223.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Kendric</span>
              <span className="widgetSmUserTitle">Actress</span>
            </div>

            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon'/>
              Display
            </button>


          </li>
        </ul>
        
    </div>;
};

export default WidgetSm;
