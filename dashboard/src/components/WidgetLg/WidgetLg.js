import React from "react";
import "./WidgetLg.css";

const WidgetLg = () => {

  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}
     >{type} </button>
  }
  return <div className="widgetLg">
    
    <h3 className="widgetLgTitle">
      Latest Transactions
    </h3>

    <table className="widgetLgTable">
      <tr className="widgetLgtr">
        <th className="widgetLgTh">Customer</th>
        <th className="widgetLgTh">Date</th>
        <th className="widgetLgTh">Amount</th>
        <th className="widgetLgTh">Status</th>

      </tr>
      <tr className="widgetLgtr">
         <td className="widgetLgUser">
           <img src="https://images.pexels.com/photos/4939461/pexels-photo-4939461.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="widgetLgimg" />
          <span className="widgetLgName">
            bella hadid
          </span>
         </td>
         <td className="widgetLgDate">2 jun 2021</td>
         <td className="widgetLgAmount">$150</td>
         <td className="widgetLgStatus"><Button type='Approved'/></td>
      </tr>
      <tr className="widgetLgtr">
         <td className="widgetLgUser">
           <img src="https://images.pexels.com/photos/4939461/pexels-photo-4939461.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="widgetLgimg" />
          <span className="widgetLgName">
            bella hadid
          </span>
         </td>
         <td className="widgetLgDate">2 jun 2021</td>
         <td className="widgetLgAmount">$150</td>
         <td className="widgetLgStatus"><Button type='Declined'/></td>
      </tr>
      <tr className="widgetLgtr">
         <td className="widgetLgUser">
           <img src="https://images.pexels.com/photos/4939461/pexels-photo-4939461.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="widgetLgimg" />
          <span className="widgetLgName">
            bella hadid
          </span>
         </td>
         <td className="widgetLgDate">2 jun 2021</td>
         <td className="widgetLgAmount">$150</td>
         <td className="widgetLgStatus"><Button type='Pending'/></td>
      </tr>
      <tr className="widgetLgtr">
         <td className="widgetLgUser">
           <img src="https://images.pexels.com/photos/4939461/pexels-photo-4939461.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="widgetLgimg" />
          <span className="widgetLgName">
            bella hadid
          </span>
         </td>
         <td className="widgetLgDate">2 jun 2021</td>
         <td className="widgetLgAmount">$150</td>
         <td className="widgetLgStatus"><Button type='Declined'/></td>
      </tr>
    </table>
    </div>;
};

export default WidgetLg;
