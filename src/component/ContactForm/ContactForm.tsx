import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import './ContactForm.css'

type Props = {}
const ContactForm = (props: Props) => {
    return (
        <Box sx={{ width: 407 }}>
            <form className="contact-form-wraper">
                <p className="contact-lable">ПІБ</p>
                <TextField
                    fullWidth
                    placeholder="Мельник Дмитро Ігорович"
                    variant="standard"
                    className="form-input"
                />
                <p className="contact-lable">E-mail</p>
                <TextField
                    fullWidth
                    placeholder="email_name@hotmail.com"
                    variant="standard"
                    className="form-input"
                />
                <p className="contact-lable">Телефон</p>
                <TextField
                    fullWidth
                    placeholder="+38 (068) 123 45 67"
                    variant="standard"
                    className="form-input"
                />
                <p className="contact-lable">Компанія</p>
                <TextField
                    fullWidth
                    placeholder="ТОВ, ПрАТ, ФОП або ін."
                    variant="standard"
                    className="form-input"
                />
                <p className="contact-lable">Повідомлення</p>
                <TextField
                    fullWidth
                    multiline
                    rows={6.5}
                    placeholder="Опис Вашого звернення або уточнення певних деталей."
                    variant="standard"
                    className="form-input"
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
