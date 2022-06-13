export const ipv4Regex = /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/

export const isValidIpv4 = (string: string): boolean => {
  return ipv4Regex.test(string)
}

export const extractIpv4FromString = (string: string): string => {
  const match = string.match(ipv4Regex)
  return match ? match[0] : null
}
