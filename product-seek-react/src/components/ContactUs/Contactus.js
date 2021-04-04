import React from 'react';
import './contact.css';


function Contact() {
    return (
        <>
            <main className="container-main">
                <section className="section-book">
                    <div className="row">
                        <div className="book">
                            <div className="book__form">
                                <form>
                                    <div className="u-margin-bottom-medium">
                                        <h2 className="heading-secondary">Feedback Form</h2>
                                    </div>
                                    <div className="form__group">
                                    <label for="subject"className="form__group">FullName</label>
                                        <input type="text"
                                            className="form__input"
                                            placeholder="Fullname"
                                            id="fullname" required />
                                    </div>
                                    <div className="form__group">
                                    <label for="subject"className="form__group">Email</label>
                                        <input type="Email"
                                            className="form__input"
                                            placeholder="Email"
                                            id="email" required />
                                    </div>
                                    <div className="form__group">
                                        <label for="country" className="form__group">Country</label>
                                        <select className="form__input" id="country" name="country">
                                        <option value="choose an option" choosen>-Choose an Option-</option>
                                            <option value="Nepal">Nepal</option>

                                            <option value="India">India</option>
                                            <option value="China">China</option>
                                        </select>
                                    </div>
                                    <div className="form__group">
                                        <label for="subject"className="form__group">Subject</label>
                                        <textarea className="form__input" id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>
                                    </div>
                                    <div className="form__group">
                                        <input type="submit" value="submit" className="my-btn" />
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Contact;