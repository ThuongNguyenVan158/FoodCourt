import { Order, OrderItem, Customer } from '../models';
const ordering = async (req, res) => {
  const { customer_id, items, total_amount, payment_method, numItems } =
    req.body;
  console.log(req.body);
  const today = new Date();
  const order_date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  try {
    const newOrder = await Order.create({
      customer_id,
      order_date,
      total_amount,
      payment_method,
    });
    let array = [];
    await items.forEach(async (element) => {
      const item = await OrderItem.create({
        order_id: newOrder.id,
        quantity: element.quantity,
        total_amount: element.total_amount,
        food_id: element.food_id,
      });
      array.push(item);
    });
    // for (const element of items) {
    //   await OrderItem.create({
    //     order_id: newOrder.id,
    //     quantity: element.quantity,
    //     total_amount: element.total_amount,
    //     food_id: element.food_id,
    //   });
    // }

    res.status(201).send(newOrder, array);
  } catch (error) {
    res.status(500).send(error);
  }
};

const viewListOrder = async (req, res) => {
  try {
    const list = await Order.findAll({
      include: [
        {
          model: OrderItem,
        },
      ],
    });
    res.status(200).send(list);
  } catch (error) {
    res.status(500).send(error);
  }
};
const viewOrderByCustomer = async (req, res) => {
  const customer_id = req.user.id;
  try {
    const listOrder = await Customer.findAll({
      where: { id: customer_id },
      include: [
        {
          model: Order,
          include: [
            {
              model: OrderItem,
            },
          ],
        },
      ],
    });
    res.status(200).send(listOrder);
  } catch (error) {
    res.status(500).send(error);
  }
};
export { ordering, viewListOrder, viewOrderByCustomer };
