import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import './ContactForm.css'

type Props = {}
const ContactForm = (props: Props) => {
    return (
        <Box sx={{ width: 407 }}>
            <form className="contact-form-wraper">
                <TextField
                    id="standard-multiline-flexible"
                    label="ПІБ"
                    multiline
                    maxRows={1}
                    variant="standard"
                    className="form-input"
                    inputProps={{ type: 'name' }}
                />
                <TextField
                    id="standard-multiline-flexible"
                    label="E-mail"
                    multiline
                    maxRows={1}
                    variant="standard"
                    className="form-input"
                    inputProps={{ type: 'email' }}
                />
                <TextField
                    id="standard-multiline-flexible"
                    label="Телефон"
                    multiline
                    maxRows={1}
                    variant="standard"
                    className="form-input"
                    inputProps={{ type: 'tel' }}
                />
                <TextField
                    id="standard-multiline-flexible"
                    label="Компанія"
                    multiline
                    maxRows={1}
                    variant="standard"
                    className="form-input"
                />
                <TextField
                    id="standard-multiline-static"
                    label="Повідомлення"
                    multiline
                    rows={5}
                    variant="standard"
                    className="form-input form-input-area"
                />
                <Button
                    type="submit"
                    sx={{ mt: 2 }}
                    className="contact-form-btn"
                >
                    Відправити<span className="btn-icon"></span>
                </Button>
            </form>
        </Box>
    )
}
export default ContactForm
