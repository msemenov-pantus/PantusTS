export type ValueCheck = {
  value1: string;
  value2: string;
  valueSet: string;
};
export type ValidateParamsAll = {
  MinLength?: number;
  MaxLength?: number;
  RegExp?: RegExp;
  ValueTrue: ValueCheck;
  ValueFalse: ValueCheck;
};
export type ErrorObject = {
  text: string;
  active: boolean;
  type?: "server";
};
export type regulations =
  | "RegExp"
  | "Undefined"
  | "ValueTrue"
  | "ValueFalse"
  | "MinLength"
  | "MaxLength";
export type FormDataInput = {
  regulations: regulations[];
  regulationsServer?: any;
  error: {
    [item: string]: ErrorObject;
  };
  value: string;
  params?: ValidateParamsAll;
};
export type FormData = {
  [item: string]: FormDataInput;
};
