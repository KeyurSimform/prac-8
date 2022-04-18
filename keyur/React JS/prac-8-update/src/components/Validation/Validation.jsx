import * as Yup from "yup";

//  Here are the validation constant which will be used in the YUP validation

const PhoneValidation = /^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/;
const ProfilePicture = "Please set your profile picture";
const ProfilePictureSize = "Please select the Image less than 2 MB";
const NameLength = "Minmum 15 characters are required";
const NameRequired = "Please Enter the name";
const EmailValidation = "Please enter the valid email";
const EmailRequired = "Please enter the email";
const PhoneInvalid = "Please enter the valid Phone Number";
const PhoneNumberRequired = "Please enter the Phone number";
const PasswordLength = "Please Enter atleast 6 characters of password";
const PasswordRequired = "Please enter the Password";
const ConfirmPasswordMatches = "Password doesn't Matches";
const confirmPasswordRequired = "Please Confirm the Password";

// This will be the valiadation object which will validate the form , and handle the errors in the form validation


export const validation = Yup.object({
  profilePicture: Yup.mixed()
    .required(ProfilePicture)
    .test("fileSize", ProfilePictureSize, (value) => {
      return !value || value.size <= 2000000;
    })
    .test("fileType", ProfilePictureSize, (value) => {
      return (
        !value ||
        (value !== null &&
          ["image/jpg", "image/png", "image/jpeg"].includes(value.type))
      );
    }),
  name: Yup.string().min(15, NameLength).required(NameRequired),
  email: Yup.string().email(EmailValidation).required(EmailRequired),
  phone: Yup.string()
    .matches(PhoneValidation, PhoneInvalid)
    .required(PhoneNumberRequired),
  password: Yup.string().min(6, PasswordLength).required(PasswordRequired),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], ConfirmPasswordMatches)
    .required(confirmPasswordRequired),
});
