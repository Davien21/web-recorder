import { Input, Button, Select, TextArea, Breadcrumbs } from "components";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import styles from "./home.module.scss";
import { AddExpense } from "services/expensesService";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { UpIcon } from "assets/images";
import { IButtonState } from "interfaces";
import { expenseCategories } from "utils/categories";

interface IFormValues {
  price: string;
  currency: "NGN" | "USD";
  category: string;
  remark: string;
}

const validationSchema = Yup.object({
  price: Yup.number().required().label("Price"),
  currency: Yup.string()
    .required("Please select a currency")
    .oneOf(["NGN", "USD"], "Currency must be NGN or USD")
    .label("Currency"),
  category: Yup.string().required("Please select a category").label("Category"),
  remark: Yup.string().label("Remark"),
});

export default function HomePage() {
  const [buttonState, setbuttonState] = useState<IButtonState>("idle");

  const initialValues: IFormValues = {
    remark: "",
    price: "",
    currency: "NGN",
    category: "",
  };

  const handleSubmit = async (values: IFormValues) => {
    setbuttonState("loading");
    try {
      const body = { ...values, price: Number(values.price) * 100 };
      await AddExpense(body);
      toast.success("Expense added successfully");
      formik.resetForm();
    } catch (error) {
      setbuttonState("error");
      const axiosError = error as AxiosError<any>;
      if (axiosError.response?.data.success) return;
      toast.error(axiosError.response?.data.message);
    } finally {
      setTimeout(() => {
        setbuttonState("idle");
      }, 500);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <main className={`${styles["container"]}`}>
      <section className={`container`}>
        <div className={`${styles["body"]}`}>
          <div className="mb-4 flex justify-between items-center">
            <Breadcrumbs />
          </div>
          <div className={`${styles["stats"]} w-full inline-grid grid-cols-2 mb-4`}>
            <div className={`${styles["stat"]}`}>
              <div className={`${styles["stat-title"]} text-sm sm:text-base`}>
                Monthly Budget
              </div>
              <div className={`${styles["stat-value"]} text-xl sm:text-3xl`}>
                $500
              </div>
              <div className={`${styles["stat-actions"]}`}>
                <Button className="text-xs mt-3">Edit budget</Button>
              </div>
            </div>

            <div className={`${styles["stat"]}`}>
              <div className={`${styles["stat-title"]} text-sm sm:text-base`}>
                Current balance
              </div>
              <div className={`${styles["stat-value"]} text-xl sm:text-3xl`}>
                $200
              </div>
              <div className={`${styles["category"]} mt-auto`}>Miscellaneous</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
