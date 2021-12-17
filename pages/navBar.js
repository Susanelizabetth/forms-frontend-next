import Link from 'next/link'
import Image from 'next/image'
function NavBar({ formData }) {
    return(
        <nav class="navbar is-transparent">
            <div class="navbar-brand">
                
                    <Image src="/utp.jpg"
                           width={70}
                           height={70}/>
                    <a class="navbar-item title is-3">DICOMES</a>
              
                
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                    <Link href='/'>
                        
                        <a class="navbar-item" href="/">Inicio</a>
                    </Link>
                    
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
                        Formularios de Servicios
                        </a>
                        <div class="navbar-dropdown is-boxed">
                            {formData.map((link, index) =>{
                                return(
                                    <Link href={link.path}>
                                        <a class="navbar-item" key={index}>{link.name}</a>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <p class="control">
                                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                                    <span class="icon">
                                        <i class="fab fa-twitter"></i>
                                    </span>
                                    <span>
                                        Tweet
                                    </span>
                                </a>
                            </p>
                            <p class="control">
                                <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip">
                                    <span class="icon">
                                        <i class="fas fa-download"></i>
                                    </span>
                                    <span>Download</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default NavBar