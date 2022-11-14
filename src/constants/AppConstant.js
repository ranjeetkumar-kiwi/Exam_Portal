export const validationConst = {
  FILE_SIZE: 512000,
  passwordRegex: /^(?=.*\d)(?=.*[@#$%])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  nameRegex: /^[A-Za-z0-9_@!£$%*./#&+-]+$/,
  socialIdRegex: /^((?!www|http|https|.com).)*$/,
  userNameRegex: /^[a-zA-Z0-9._]{2,24}\d*$/,
  websiteRegex: /^([a-zA-Z0-9]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
  numberRegex: /^[\d]*$/,
  emailRegex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  corpEmailRegex:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phoneNumberRegex: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
}

export const countryCode = [{ value: 1, label: 'India' }]
