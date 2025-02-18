import fbLogo from "/facebook-color.svg";
import linkedinLogo from "/linkedin-color.svg";
import githubLogo from "/github.svg";
import mailLogo from "/protonmail-color.svg";

function ContactDetails() {
    return (
        <div className="mt-5 mb-2 px-5 py-2 md:w-1/2">
            <h1 className="text-xl md:text-3xl font-bold text-center">
                Connect With Me Through
            </h1>
            <div className="flex flex-col mt-16 gap-5">
                <a
                    href="https://www.facebook.com/dominique.magat08/"
                    className="contactLinks"
                    target="_blank"
                >
                    <img src={fbLogo} alt="" className="h-5 w-5 bg-white rounded-full" />
                    Facebook
                </a>
                <a
                    href="https://www.linkedin.com/in/dominique-louise-magat/"
                    className="contactLinks"
                    target="_blank"
                >
                    <img src={linkedinLogo} alt="" className="h-5 w-5" />
                    LinkedIn
                </a>
                <a
                    href="https://github.com/doomsx"
                    className="contactLinks"
                    target="_blank"
                >
                    <img src={githubLogo} alt="" className="h-5 w-5" />
                    Github
                </a>
                <a
                    href="mailto:dlmagat08@gmail.com"
                    className="contactLinks"
                    target="_blank"
                >
                    <img src={mailLogo} alt="" className="h-5 w-5" />
                    dlmagat08@proton.me
                </a>
            </div>
        </div>
    );
}

export default ContactDetails;
