import { Error404Icon } from "assets/images";
import { Button, Breadcrumbs } from "components";
import React from "react";
import styles from "./404.module.css";

export default function NotFoundPage() {
  return (
    <div>
      <Breadcrumbs />
      <main className={`${styles["container"]}`}>
        <section className="py-10 mt-20">
          <div className="pb-7 flex justify-center">
            <Error404Icon />
          </div>
          <h2 className="text-2xl font-bold text-center pb-1">
            {`Uh oh!, We can't find this page.`}
          </h2>
          <p className="text-center app-text-grey text-sm">
            Looks like this page has been moved or deleted, try contacting the
            owner of this page.
          </p>
          <Button href="/" className="mt-8 mx-auto" form="plain">
            Go to HomePage
          </Button>
        </section>
      </main>
    </div>
  );
}
