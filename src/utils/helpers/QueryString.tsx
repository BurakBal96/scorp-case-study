// import queryString from 'qs'
import queryString from 'query-string'

export class qs {
  static parse = (
    search: string,
    defaults: Object = {},
    options: Object = {ignoreQueryPrefix: true}
  ): Object => {
    // const params = qs.parse(location.search)
    const params = queryString.parse(search, options)
    return {...defaults, ...params} // !IMPORTANT for deps
  }

  static stringify = (
    parsed: Object,
    options: Object = {skipNull: true, skipEmptyString: true}
  ): string => {
    return queryString.stringify(parsed, options)
  }
}
