
export function getCookieValue(name: string) {
    if (!document) return ''
    const cookies = document?.cookie.split(';')
    const res = cookies.find(c => c.trim().startsWith(name + '='))
    if (res) {
        return res.substring(res.indexOf('=') + 1)
    }
}
