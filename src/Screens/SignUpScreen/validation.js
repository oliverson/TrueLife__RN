import * as yup from "yup";

const validationSchema = (i18n) => {
    return yup
        .object({
            userName: yup
                .string()
                .nullable()
                .required("Vui lòng nhập tên người dùng"),

            password: yup.string().nullable().required("Vui lòng nhập mật khẩu"),
        })
        .required();
};

export default validationSchema;
