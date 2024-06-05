import * as yup from "yup";

const usernameSchema = yup
  .string()
  .required("Votre nom d'utilisateur doit contenir au minimum 3 caractères")
  .matches(
    /^[a-zA-Z0-9]+$/,
    "Seuls les caractères alphanumériques sont autorisés"
  )
  .min(3, "Votre nom d'utilisateur doit contenir au minimum 3 caractères")
  .max(15, "Maximum 15 caractères");

const emailSchema = yup
  .string("Un email valide est requis")
  .email("Un email valide est requis")
  .required("Un email valide est requis");

const passwordSchema = yup
  .string()
  .required("Veuillez renseigner un mot de passe")
  .matches(
    /^[a-zA-Z0-9.@$]+$/,
    "Seuls les caractères alphanumériques, le point, l'arobase et le signe dollar sont autorisés"
  )
  .min(6, "Votre mot de passe doit contenir 6 caractères minimum")
  .max(20, "Maximum 20 caractères")
  .test(
    "startsWithCapital",
    "Le mot de passe doit commencer par une majuscule",
    (value) => /^[A-Z]/.test(value)
  );

export const formSchema = yup.object({
  fullName: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export const formSchemaLogin = yup.object({
  email: emailSchema,
  password: passwordSchema,
});

export const formSchemaHomeScreen = yup.object({
  firstname: usernameSchema,
  lastname: usernameSchema,
});

export const formSchemaModifyPassword = yup.object({
  actualpassword: passwordSchema,
  newPassword: passwordSchema,
  newPasswordConfirmation: yup
    .string()
    .oneOf(
      [yup.ref("newPassword")],
      "Les deux mots de passe doivent être identiques"
    )
    .matches(
      /^[a-zA-Z0-9.@$]+$/,
      "Seuls les caractères alphanumériques, le point, l'arobase et le signe dollar sont autorisés"
    )
    .min(6, "Votre mot de passe doit contenir 6 caractères minimum")
    .max(20, "Maximum 20 caractères")
    .test(
      "startsWithCapital",
      "Le mot de passe doit commencer par une majuscule",
      (value) => /^[A-Z]/.test(value)
    ),
});
