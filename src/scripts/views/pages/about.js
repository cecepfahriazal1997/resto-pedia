import profile from '../../../public/images/profile.jpg'
import github from '../../../public/images/github.svg'
import instagram from '../../../public/images/instagram.svg'
import linkedin from '../../../public/images/linkedin.svg'
import facebook from '../../../public/images/facebook.svg'

const About = {
    async render() {
        return `
        <div class="container about">
            <h2>About</h2>
            <div class="mb-5 description">
                Website ini dibuat untuk memenuhi submission pada Courses <br><b>Menjadi Front-End Web Developer Expert</b> <br />
            </div>
            <div class="content">
                <div class="photo">
                    <img src="${profile}"
                        class="img-fluid rounded" />
                </div>
                <div class="information">
                    <div class="form-group mb-3">
                        <div class="label">Name</div>
                        <h4>Cecep Rokani</h4>
                    </div>
                    <div class="form-group mb-3">
                        <div class="label">University</div>
                        <h4>Sekolah Tinggi Teknologi Bandung</h4>
                    </div>
                    <div class="form-group mb-3">
                        <div class="label">Study Program</div>
                        <h4>Teknik Informatika</h4>
                    </div>
                    <div class="form-group mb-3">
                        <div class="label">Email</div>
                        <h4 text-primary"><a
                                href="mailto:ceceprokani9712@gmail.com">ceceprokani9712@gmail.com</a></h4>
                    </div>
                    <div class="form-group mb-3">
                        <div class="label mb-3">Another Information</div>
                        <div class="social-media">
                            <a href="https://github.com/cecepfahriazal1997" target="_blank"><img
                                    src="${github}"
                                    class="me-3" width="50" height="50" /></a>
                            <a href="https://www.linkedin.com/in/cecep-rokani" target="_blank"><img
                                    src="${linkedin}"
                                    class="me-3" width="50" height="50" /></a>
                            <a href="https://www.facebook.com/ceceprokani1997" target="_blank"><img
                                    src="${facebook}"
                                    class="me-3" width="50" height="50" /></a>
                            <a href="https://www.instagram.com/cecepfahriazal1997" target="_blank"><img
                                    src="${instagram}"
                                    class="me-3" width="50" height="50" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    },
    async finishRender() {},
};

export default About;