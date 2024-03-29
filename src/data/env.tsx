export const BASE_URL = process.env.NODE_ENV === 'production' ? '' : ''

export const ROUTES = [
    {
        label: 'Lavori',
        url: `${BASE_URL}/lavori`
    },
    {
        label: 'Profilo',
        url: `${BASE_URL}/profilo`
    },
    {
        label: 'Contatti',
        url: `${BASE_URL}/contatti`
    }
]
