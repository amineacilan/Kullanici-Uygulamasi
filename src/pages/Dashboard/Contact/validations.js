import { object, string } from "yup";

const required_message = "Bu alan zorunludur !";
let contactSchema = object({
  firstName: string().required(required_message),
  lastName: string().required(required_message),
  email: string().email("Lütfen geçerli bir e-mail adresi giriniz !").required(required_message),
  message: string().required(required_message).min(5,"Minumum 5 karakter girilmelidir !"),
});
export default contactSchema;
