import Cookies from 'js-cookie'


export const saveTokensStorage = (data) => {
	Cookies.set('accessToken', data.accessToken, { expires: 1 })
	Cookies.set('refreshToken', data.refreshToken, { expires: 1 })
}

export const saveToStorage = (data) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user),)
}

export const removeTokensStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}
