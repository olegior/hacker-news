import parse from 'html-react-parser'


export const parseText = (text: string): React.ReactNode => {
    try {
        return parse(text)
    }
    catch (err) {
        console.error(err)
        return null
    }
}