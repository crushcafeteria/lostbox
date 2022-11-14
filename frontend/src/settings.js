const settings = {
    API_URL: 'http://127.0.0.1:8000',
    categories: [
        {
            label: 'Document',
            value: 'DOCUMENT'
        },
        {
            label: 'Keys',
            value: 'KEYS'
        },
        {
            label: 'Phone',
            value: 'PHONE'
        },
    ]
}

// Export individual values
export const {API_URL} = settings

// Export all settings by default
export default settings;