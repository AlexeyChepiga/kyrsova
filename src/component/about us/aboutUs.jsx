import './aboutUs.css'

import profile from '../../img/3NWGKcjHRZc.jpg'

export default function AboutUs ( ) {
    return (
        <>
        <div className='about_main' id='about_main'>
            <div className='about_all conteiner'>
                <div className='about_section_one'>
                    <img src={profile} alt="#" />
                    <div className='about_section_one_text'>
                        <p>Алексей Чепига</p>
                        <p>Разработчик</p>
                    </div>
                </div>
                <div className='about_section_two'>
                    <div className='about_section_two_all'>
                        <h3>Остались вопросы?</h3>
                        <p>Будем рады ответить на них в рабочее время </p>
                        <p>Вы можете связаться со мной в мессенджерах </p>
                        <div className='about_section_btn_all'>
                            <button className='about_section_btn'>
                                <a href="#">Telegram</a>
                            </button>
                            <button className='about_section_btn'>
                                <a href="https://vk.com/konushnyaviper">VK</a>
                            </button>
                        </div>
                        <p>Нажимая на кнопку отправки, вы даете согласие на обработку своих персональных данных</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}