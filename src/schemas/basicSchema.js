import * as yup from 'yup';

const passwordRules =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
// Minimum eight characters, at least one letter, one number and one special character

export const basicSchema = yup.object().shape({
  userFirstName: yup.string,
  userLastName: yup.string,
  userEmail: yup.string().email('Please enter a vaild email').required(),
  userConfirmEmail: yup
    .string()
    .oneOf([yup.ref('userEmail'), null], 'Emails must match')
    .required(),
  userPassword: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: 'Please create a stronger password' })
    .required(),
  userCondirmPassword: yup
    .string()
    .oneOf([yup.ref('userPassword'), null], 'Passwords must match')
    .required(),
  dayOfBirth: yup.number().positive().integer().min(1).max(31).required(),
  monthOfBirth: yup.number().positive().integer().min(1).max(12).required(),
  yearOfYear: yup.number().positive().integer().min(1900).max(2023).required(),
});
