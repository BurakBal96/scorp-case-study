export interface Option {
  value: string|number
  label: string|number
  labelLowerCase?: string
}

export interface Error {
  message: string
}

export interface ErrorDictionary {
  [name: string]: Error
}

export interface FormInterface {
  register?: Function
  onSubmit?: Function
  errors?: ErrorDictionary
  setValue?: Function
  defaultValues?: Object
  watch?: Function
}
