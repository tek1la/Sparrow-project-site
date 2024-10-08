import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import './ContactForm.css'
import {
    createTheme,
    ThemeProvider,
    Theme,
    useTheme,
} from '@mui/material/styles'
import { Grid } from '@mui/material'

const customTheme = (outerTheme: Theme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '--TextField-brandBorderColor': '#141A29',
                        '--TextField-brandBorderHoverColor': '#1818ED',
                        '--TextField-brandBorderFocusedColor': '#1818ED',
                        '& label.Mui-focused': {
                            color: 'var(--TextField-brandBorderFocusedColor)',
                            fontSize: '13px',
                            fontFamily: 'Montserrat',
                            fontWeight: '500',
                        },
                        '& label': {
                            fontSize: '16px',
                            fontFamily: 'Montserrat',
                            fontWeight: '500',
                            color: 'var(--TextField-brandBorderColor)',
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        borderColor: 'var(--TextField-brandBorderColor)',
                    },
                    root: {
                        '& span': {
                            fontSize: '14px',
                        },
                        color: '#141A29',
                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor:
                                'var(--TextField-brandBorderHoverColor)',
                        },
                        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]:
                            {
                                '& span': {
                                    fontSize: '11px',
                                },
                                borderColor:
                                    'var(--TextField-brandBorderFocusedColor)',
                            },
                    },
                },
            },
            MuiFilledInput: {
                styleOverrides: {
                    root: {
                        '&::before, &::after': {
                            borderBottom:
                                '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom:
                                '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom:
                                '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiInput: {
                styleOverrides: {
                    root: {
                        '&::before': {
                            borderBottom:
                                '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom:
                                '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom:
                                '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
        },
    })

type Props = {}
const ContactForm = (props: Props) => {
    const outerTheme = useTheme()
    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        // Додаткові дії при відправленні форми
    }

    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <Box>
                <form
                    className="contact-form-wraper"
                    onSubmit={handleFormSubmit}
                >
                    <Grid container gap={1.2}>
                        <Grid item sm={3.9}>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Ваше ім’я"
                                multiline
                                maxRows={1}
                                className="form-input first-input"
                                inputProps={{ type: 'name' }}
                            />
                        </Grid>
                        <Grid item sm={3.9}>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Номер телефону"
                                multiline
                                maxRows={1}
                                className="form-input second-input"
                                inputProps={{ type: 'tel' }}
                            />
                        </Grid>
                        <Grid item sm={3.9}>
                            <Button type="submit" className="contact-form-btn">
                                замовити дзвінок
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </ThemeProvider>
    )
}
export default ContactForm
