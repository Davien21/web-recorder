import type { NextApiRequest, NextApiResponse } from "next";
import { getExpenses } from "../../../services/expensesService";

const getAllExpenses = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query as { id: string };
  const expenses = await getExpenses();
  // console.log("Expenses API", expenses.data);
  if (!expenses.data) {
    console.log("No expenses found");
    return res.status(404).end();
  }
  res.status(200).json(expenses.data);
};

export default getAllExpenses;
