import { IAPIResponse, ILogin, ILoginResponse } from "interfaces";
import httpService from "./httpService";

const route = `/expenses`;

export interface IExpense {
  _id?: string;
  price: number;
  currency: "NGN" | "USD";
  category: string;
  remark: string;
}

export async function AddExpense(body: IExpense) {
  return await httpService.post<IAPIResponse>(`${route}`, body);
}

export async function EditExpense(body: IExpense) {
  return await httpService.put<IAPIResponse>(`${route}/${body._id}`, body);
}

export async function DeleteExpense(id: string) {
  return await httpService.delete<IAPIResponse>(`${route}/${id}`);
}

export async function getExpenses() {
  return await httpService.get<IAPIResponse<IExpense[]>>(`${route}`);
}

export async function getExpenseById(id: string) {
  return await httpService.get<IAPIResponse<IExpense>>(`${route}/${id}`);
}