import GithubIcon from "../assets/icons/GithubIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";
import LinkedInIcon from "../assets/icons/LinkedInIcon";
import User from "../data/data";

const Navbar = ( ) =>{
    return(
        <div className="w-full py-6">
            <div className="h-full px-5 flex justify-between  items-center text-white">
                <h1 className="text-2xl font-bold"></h1>
                <div className="flex gap-4">
                    <a 
                    href={User.linkedIn}
                    target="_blank"
                    aria-label="LinkedIn"
                    >
                        <LinkedInIcon size={24} />
                    </a>
                    <a 
                    href={User.github}
                    target="_blank"
                    aria-label="Github"
                    >
                        <GithubIcon size={24} />
                    </a>
                    <a 
                    href={User.instagram}
                    target="_blank"
                    aria-label="Instagram"
                    >
                        <InstagramIcon size={24} />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;