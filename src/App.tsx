import { ThemeProvider } from '@mui/material'
import { Navbar } from './components/molecules/Navbar'
import './styles.css'
import theme from './utils/theme'
import { EqPage } from './pages/EqPage'
import { AboutBox } from './components/molecules/AboutBox'



export const App = () => {
    return <>
    <ThemeProvider theme={theme}>
    <Navbar/>
    </ThemeProvider>
    </>
}