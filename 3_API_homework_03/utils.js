export const updateHeaders = () => {
    return {
        headers: {
            authorization: `Bearer ${localStorage.getItem("unsplashToken")}`
        }
    }
}
