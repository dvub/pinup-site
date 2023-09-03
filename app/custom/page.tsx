"use client";
import ImageDisplay from "../components/imageDisplay";
import Navbar from "../components/navbar";
import { comfortaa, cormorantGaramond } from "../layout";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}
export default function Custom() {
  // the process of ordering custom PANTS
  // custom pants start at 300USD + any fabric costs + design complexity, I.E. The total increases as the complexity of the design increases.
  // fabric is sourced for each pair individually based on your ideal specifications and you can expect the fabric to cost 20-50USD.
  //
  // form requirements
  // waist, hips, rise, thigh, inseam, leg opening
  // if you're not sure about any of these, contact me through ... and I'll get back to you ASAP.

  // include any specific design aspects you want and a reference/inspiration photo. I draft the pattern based on everything YOU provide, so please be thorough.
  // Expect a turn-around time of a few weeks to a month based on the number of orders other than yours. I will keep you updated on everything and move as quickly as possible.
  // include anything else you feel is important to your design; Again, don't be afraid to be thorough.
  // Custom garments come with free repairs for life :)

  // if you're interested in anything other than pants:
  // please contact me here  ....
  // I'll get back to you ASAP.
  return (
    <main className={comfortaa.className}>
      <Navbar />
      <div className="pt-24 px-5">
        <h1 className={`${cormorantGaramond.className} text-6xl`}>
        
          Custom Inquiry
        </h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form>
            <br />
            <label htmlFor="firstName">First Name</label>
            <br />
            <Field id="firstName" name="firstName" placeholder="John" />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <br />
            <Field id="lastName" name="lastName" placeholder="Doe" />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <Field
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
            />
            <br />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </main>
  );
}
