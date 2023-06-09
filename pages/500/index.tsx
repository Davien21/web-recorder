import { Error500Icon } from "assets/images";
import { Button, Breadcrumbs } from "components";
import React from "react";
import styles from "./500.module.css";

export default function ServerErrorPage() {
  return (
    <div>
      <Breadcrumbs />
      <main className={`${styles["container"]}`}>
        <section className="py-10 mt-20">
          <div className="pb-7 flex justify-center">
            <Error500Icon />
          </div>
          <h2 className="text-2xl font-bold text-center pb-1">
            {`Oops!, Something went wrong.`}
          </h2>
          <p className="text-center app-text-grey text-sm">
            {`There was a problem with the server but don't worry, we're working to fix it as soon as possible.`}
          </p>
          <Button href="/" className="mt-8 mx-auto" form="plain">
            Go to HomePage
          </Button>
        </section>
      </main>
    </div>
  );
}
