import { Food, Order, sequelize } from "../models";
const getCounTotalbyDay = async (req, res) => {
  const date = new Date();
  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();
  try {
    const [result] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where DAY(Orders.order_date) =${d}`
    );
    const [result1] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where MONTH(Orders.order_date) =${
        m + 1
      }`
    );
    const [result2] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where YEAR(Orders.order_date) =${y}`
    );
    const array = [];
    array.push(result[0]);
    array.push(result1[0]);
    array.push(result2[0]);
    res.status(200).send(array);
  } catch (error) {
    res.status(500).send(error);
  }
};
export { getCounTotalbyDay };
