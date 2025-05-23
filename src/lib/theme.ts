// -- theme - toggle -- //
export const toggleTheme = (): void => {
    const html = document.documentElement
    const isDark = html.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
}

export const initTheme = (): void => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}
