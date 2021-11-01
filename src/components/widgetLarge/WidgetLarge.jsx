import "./widgetLarge.css";

export default function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLargeImg"
            />
            <span className="widgetLargeName">Susan Carol</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2021</td>
          <td className="widgetLargeAmount">$138.00</td>
          <td className="widgetLargeStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?cs=srgb&dl=pexels-vazhnik-7562313.jpg&fm=jpg"
              alt=""
              className="widgetLargeImg"
            />
            <span className="widgetLargeName">Collin Wiggins</span>
          </td>
          <td className="widgetLargeDate">9 Jun 2021</td>
          <td className="widgetLargeAmount">$390.30</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?cs=srgb&dl=pexels-mikotoraw-photographer-3991140.jpg&fm=jpg"
              alt=""
              className="widgetLargeImg"
            />
            <span className="widgetLargeName">Kristina Taylor</span>
          </td>
          <td className="widgetLargeDate">13 Jun 2021</td>
          <td className="widgetLargeAmount">$1,071.93</td>
          <td className="widgetLargeStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?cs=srgb&dl=pexels-marcio-bordin-1840608.jpg&fm=jpg"
              alt=""
              className="widgetLargeImg"
            />
            <span className="widgetLargeName">Cathy Hurst</span>
          </td>
          <td className="widgetLargeDate">20 Jun 2021</td>
          <td className="widgetLargeAmount">$397.15</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}