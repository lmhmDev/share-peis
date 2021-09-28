export const storage = {
    set: (key: string, value: string) => {
        localStorage.setItem(key, value);
        return value;
    },

    get: (key: string) => {
        const value: string | null = localStorage.getItem(key)
        if (value) {
            return value
        }
        return null
    },

    delete: (key: string) => {
        localStorage.removeItem(key)
    }
}

export default storage