// import { FormDataInput } from "@/composition/validate/validate-type.ts";
export function ValidateInput(FormData: any, NameInput: string): any {
  const ErrorUndefined = (name: string) => {
    FormData[name].error.Undefined.active = FormData[name].value === "";
  };
  const ErrorRegExp = (name: string) => {
    FormData[name].error.RegExp.active = !FormData[name].params.RegExp.test(
      FormData[name].value
    );
  };
  const ErrorValueTrue = (name: string) => {
    FormData[FormData[name].params.valueTrue.valueSet].error.valueTrue.active =
      FormData[FormData[name].params.valueTrue.value1].value !==
      FormData[FormData[name].params.valueTrue.value2].value;
  };
  const ErrorValueFalse = (name: string) => {
    FormData[FormData[name].params.valueFalse.valueSet].error.valueTrue.active =
      FormData[FormData[name].params.valueFalse.value1].value ===
      FormData[FormData[name].params.valueFalse.value2].value;
  };
  const ErrorMinLength = (name: string) => {
    FormData[name].error.MinLength.active =
      FormData[name].value.length <= FormData[name].params.MinLength;
  };
  const ErrorMaxLength = (name: string) => {
    FormData[name].error.maxLength.active =
      FormData[name].value.length >= FormData[name].params.MaxLength;
  };
  const OnSwitch = () => {
    for (const keyReg in FormData[NameInput].regulations) {
      switch (FormData[NameInput].regulations[keyReg]) {
        case "Undefined":
          ErrorUndefined(NameInput);
          break;
        case "RegExp":
          ErrorRegExp(NameInput);
          break;
        case "ValueTrue":
          ErrorValueTrue(NameInput);
          break;
        case "ValueFalse":
          ErrorValueFalse(NameInput);
          break;
        case "MinLength":
          ErrorMinLength(NameInput);
          break;
        case "MaxLength":
          ErrorMaxLength(NameInput);
          break;
        default:
          break;
      }
    }
    const emitGet = () =>{

    }
  };
  return { OnSwitch };
}
