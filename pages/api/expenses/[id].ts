import type { NextApiRequest, NextApiResponse } from "next";
import { getExpenseById } from "../../../services/expensesService";

const getExpense = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query as { id: string };
  // console.log("Expenses API", id);
  const expenses = await getExpenseById(id);
  // console.log("Expenses API", expenses.data);
  if (!expenses.data) {
    console.log("No expenses found");
    return res.status(404).end();
  }
  res.status(200).json(expenses.data);
};

export default getExpense;
