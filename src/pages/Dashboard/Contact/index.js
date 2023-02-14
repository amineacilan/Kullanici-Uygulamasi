import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import validations from "./validations";
import "./styles.css";

function Contact() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000));  //buton 1sn boyunca ayarlandı
      /* console.log(values); */
      /* console.log(bag); */
     
      if (values.email === "amineacilan@gmail.com"){
        return bag.setErrors({email: "Bu mail adresi zaten kullanılıyor !"})
      }
       console.log(values);
       bag.resetForm(); //form elementlerini resetler.
    },
    validationSchema: validations /* validasyonları ekleme */,
  });
 /*  console.log(touched); */
  return (
    <div>
      <h2>İletişim</h2>

      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Jane"
            onChange={handleChange("firstName")}
            disabled={isSubmitting}
            onBlur={handleBlur("firstName")}
          />
          {errors.firstName && touched.firstName && (
            <div className="error">{errors.firstName}</div>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            onChange={handleChange("lastName")}
            disabled={isSubmitting}
            onBlur={handleBlur("lastName")}
          />
          {errors.lastName && touched.lastName && (
            <div className="error">{errors.lastName}</div>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            onChange={handleChange("email")}
            disabled={isSubmitting}
            onBlur={handleBlur("email")}
          />
          {errors.email && touched.email && (
            <div className="error">{errors.email}</div>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message.."
            onChange={handleChange("message")}
            disabled={isSubmitting}
            onBlur={handleBlur("message")}
          />
          {errors.message && touched.message && (
            <div className="error">{errors.message}</div>
          )}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {" "}
          {/* buton 1 sn boyunca tıklanamaz olsun (isSubmitting ile) */}
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
