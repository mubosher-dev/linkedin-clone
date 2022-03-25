export const changePage = (title) => {
    const pageTitle = title;

    document.title = pageTitle;

    return () => {
        document.title = pageTitle
    }
}