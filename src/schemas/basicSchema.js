import * as yup from "yup"

export const basicSchema = yup.object().shape({
  userFirstName: yup.string().min(3).max(20),
  userLastName: yup.string().min(3).max(20),
  userEmail: yup.string().email('Please enter a vaild email').required("Please enter your email"),
  userConfirmEmail: yup
    .string()
    .oneOf([yup.ref('userEmail'), null], 'Emails must match'),
  userPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      {
        message: 'Please create a stronger password',
      }
    )
    .required("A password is required"),
  userCondirmPassword: yup
    .string()
    .oneOf([yup.ref('userPassword'), null], 'Passwords must match'),
  dayOfBirth: yup.number().positive().integer().min(1).max(31),
  monthOfBirth: yup.number().positive().integer().min(1).max(12),
  yearOfYear: yup
    .number()
    .positive()
    .integer()
    .min(1900)
    .max(2023)
});




