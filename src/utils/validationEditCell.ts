const generateFieldConfig = (fields: { [key: string]: any }) => {
  const config: any = {};

  Object.keys(fields).forEach((key) => {
    const fieldType = fields[key];
    switch (fieldType) {
      case Number:
        config[key] = {
          inputType: "number",
          rules: [
            { required: true, message: `${key} is required!` },
            {
              validator: (_: any, value: any) => {
                const isValidNumber =
                  !isNaN(value) &&
                  Number.isFinite(Number(value)) &&
                  !/e/i.test(value); // Không chứa ký tự 'e' hoặc 'E'

                if (
                  value === undefined ||
                  value === null ||
                  value === "" ||
                  !isValidNumber
                ) {
                  return Promise.reject(
                    new Error(`${key} must be a valid number!`)
                  );
                }
                return Promise.resolve();
              },
            },
          ],
        };
        break;
      case String:
        config[key] = {
          inputType: "text",
          rules: [
            { required: true, message: `${key} is required!` },
            {
              validator: (_: any, value: any) => {
                if (typeof value !== "string" || value.trim().length === 0) {
                  return Promise.reject(
                    new Error(`${key} must be a valid string!`)
                  );
                }
                return Promise.resolve();
              },
            },
          ],
        };
        break;
      case Date:
        config[key] = {
          inputType: "Date",
          rules: [{ required: true, message: `${key} is required!` }],
        };
        break;
      default:
        break;
    }
  });

  return config;
};

export default generateFieldConfig;
