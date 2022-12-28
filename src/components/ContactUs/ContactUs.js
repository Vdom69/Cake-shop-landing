import React from 'react';
import {Link} from "react-router-dom";
import pngegg from "../../img/pngegg.png";
const ContactUs = () => {
    return(
<div className='mt-32'>
<div className="w-60 h-96 mx-auto">
   <img src={pngegg}/>
   <h1 class="text-rose-700 font-bold text-2xl">Contact US</h1>
   <img class="mx-auto mt-2"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHElEQVR4nO3Vz0rDQBDH8XkBjbNePfgSgjADufiaPoUXadkJ4sU/VU+ePPgoLVNYiaG2IUqchd8XcitLP/zIhgghhBAKnCW5y6zPVHuWdO0P1Z4BEiwsEi0sEi0sEi0sEi0sEi0sEi0sEi0sEq3QixjrdU7y2qX27K8gfpaxvBtLprnKSW78z2XWj0OYMRA/w88y/y3rguZqyVdNZnnYYpJ8dk17PhXyHSEv940yzdlYzD7IEHF7fJnoPxqD+QkSBjEWswsSDtHHGMvjLswQ0kf4zRcGcQjTh4RH7MMUSDWIkl+fxroq35kC6X0nVrNfsVPrmvbEWJ8K4guT9G15dHFKNdUNMFUiSv4e+PUa6or9zTL+TD4AIYQQBW4D5uAz7wyI5DEAAAAASUVORK5CYII="/>
  </div>
    <div className='w-full h-60 bg-rose-400'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 mx-auto'>
            <ul class="d-flex">
                <Link to="#instagram"><li class="mt-20 ml-20"><img class="w-10 h-10"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADYklEQVR4nO2Zy04UQRSGe4GK4TouYauCcSGK7lTiTmIi+gSEiLyAF3QNsiUYlhJ8AS+JKxm87tS9gG4U3CoKiCv5TMlfsTKZ6a7u6Z4ek/mTSTrTVaf+03Xq3CoIGmggfwA9wDiwCCwBW6QHI8vILAI3gcNZKHASeEbtsQj0p6HAHmAW2JHgr8A94KJ2pyWVL7W7VotkDgFzWgutfRdoSiq4ADyXsJ/ABNCeFnGP9duBSWDb2Z3OJDthTemLMa3MGEdzOQZ8EpdXwN44k405GawCXZky9ePTBayJ00ycg70jczoe1AmAEzKz3+bZZ4I1qYmgzgDcEbdi1MAexzvV7GA761/QmTRmNFjmfQfwTRwPhQkywc5gLmvSFdZfc2LIaoUx83p/I0yQiaoGQ1kSrlKRy3q/ECZoRYMSpweKPyPAY2BZqceWnh/pXaHC3EEpY7zl+QjzXw4jsaFBbQkU2A/cBr57pB7rwC2gOcE6bZKxETboLxL6+XcO0afAqE1j9OvVfwvOuLdJ4hRRPJMoIiVW7XYDpz3mnHHMOHbQJW1FZE52J17EyYV0ll5q7ps4ZkYGipgzgeqIeAndP2XszoznoohI2IMdaU4hcgYcB1DIQ5ERe7Bj8I6KX8N5KGJigsGVGJwryboqWQ/yUMTadk8MzpVk9VqvF+SgyKaGt8bgXElWq2Rt/u+KmLLW4Ifn+IZphR320aBKAGN5HvaRyHTaE+qQ5OZ+CwpiBmdj8C6Vc04yjKzOmitSkqKs+EblMh/jQ2TFVwNFmpWKowTQWxngAPC6LpLGMmm8+boDgZ85faybNL5EGfNVLYryREcU7Fr1POYcbLsTmRRWG1WUus3qwlgHEIZ1XR3sy6rUXUmh+dBp3CjwUHXKpn5L+m84Se0St/mQazvIB047qHL5oO3OrUHnA+C+OF6r25ZpFLxbphpsvcpkUGcApiLNyhncr2uFba/2fY3A7nXHL10r9PlOMnd2qH3ZnTnLaD7dTl94Os7EJsfETJv/VKZMw7n0AZ+dQNuUJB5YZbZ1ydKRGePyB3tK5oRarcnij3ZmRnaJPIa5n7ikhkHVZa6zlkljehUn5h3vZNaeTnw9XbLIUeAJtUcxE4djfLepG7TNNv1IC0bWe3XyrwMHU1eggQaC2PgDcoKh50PBZGwAAAAASUVORK5CYII="/></li></Link>
                <Link to="#facebook"><li class="mt-20"><img class="w-10 h-10"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlUlEQVR4nO2ZvUoDQRSFx15BxU7BxsZCxTyBT2ARsLSwEiyDrQ8RLAK+go1RUBubBO3TWgnWij+F2PjJ7N5AFHZ3dpOZ3Oh8bfaenJMzmQuJMZF/CLABHAE3wAPwTsob8Aw8AvfAHXAO7BtNAJvAFeX5NFoA9oAPMfYCHAPbwDIwLc/MAHPAIrAGbPWTGA0AuwOfrg0wW2I2wa9DNyPrA00cVJhP8OOunJGz1AqtivMJo3dWzsQq8CW30sIkBzkUHydDaCSM1ll5E5epDXZynlkCTmWHZGLGiSw1y0pOiCeK6YR3/9Oo3dJkXbfShOXC7g6jFdIvumUq4/X+cdIbwlJ0vlWcfxdiEG0wSUcLuC26O3NmXemECFLZBNB1DPIaLIgn7ZrI93zohwxSF/m2D/2QQRoi3/ShHzJIU+QbPvRDBmmLfN2HfsggPZGv+dD//WZFdIfZQcJ8iCCFuyBn1oVrM25cgxjtEIMog9iIMoiNKIPYiDKIjSiD2IgyiI0og9iIMvhrjRRhtIPbb7vj/X8wYsLwDTis+csTR7V3AAAAAElFTkSuQmCC"/></li></Link>
                <Link to="#yotube"><li class="mt-20"><img class="w-12 h-12 -mt-1"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVElEQVR4nO2Za2hOcRzHj9k0irlsKyPXMKEVNoVSxkY0SniDZCkSikLai5GGpOTywuWFvFFIbk3Z9kopMblkc3slhAy5zHX76G/f086e9pxznvM8a+fF+dSp53nO9/f7/X//2/k9/2NZEREREREREf4AMoDxQBmwHtgFnAQuArXAXeA58A74qKuZjnx13HsNPJNdHXAZOAFUAusUpwgYAqQn2/gRwB7gIfCb7uMncMEkFiSJNcC3GIdv1PungSpgE7AcmKveywfygAG6+sT4zHLcGwyMk52xXwps0EifAq4BT2M68A+wJZEkzLC2yNgM+zwT3OoGgHRgmqawoRVY5MewJ/BSRgeAHlZIAA6qXfV+xAUSv016kaUYoK9jAxnmJV4i4XUrhAD1al+pl3CrhMesEAKcVfs2egkPS+h/d+hoXwNMCtpQL4Ddat9RL+EVCRd7eu3cHm2ZpkMGBvHhBrBCMWq8hLcknO4qjG/vpMlMAVMVBPHVGdqKDY+9hPclLHAVxre3ueT43ADMD+IvFmC0fL73Epp6yTDGVRjf/j/6XAw8ciRUbeq1IH5tgFz5+uv6jFMZYsizkkxE39OAVSom7TLjOJAT0H+mo2My3YSfJcpKRSKO3/sD+1QAogp4O9ArQIxf8tHPTWQXaRmpTMRxP19TLPD6AT7INrc7ExkLXHUkYirchQnG+OJnRD5JNCCMU4u2arjVz2J/pUBDQ7rYs+WnyUtohtqQn2wiwGzggWMamfJlYhC/NuaxIF8vLDeAexJOdRXGt+/qB2Khr/8kwE0JiwMG6uoSpVS+67yE5yUsDxgo6XXgBrBWMc54CfdKWOUqjG+fdBnihnY+Q6WXsFzCaiuE0D5jVnoJZ0lonidpVsigfTOa4SXMcRwFFVohAugNfFf7sv0YmP3ecCOVO04Kj4Nq/RpMdhy73AEWBKlSUwFtJUmR47n0I6GjU+3Xdllhb6lPdAa7H9gMLANmAhOA4ToKTUuggYOAUcAUYI5ZwMA24JBOFhscJTuqesuC9IZZLzs0KqYn/NLiOHWPvezK1S/Nir/TtWxPIClT/I0ESoDVQAVwBDinNXUbaNTrArvR5jWC22uFRtnVyI/xVyH/JYoXup0zIiIiIiLCCjP/ADF/+rY5VVGSAAAAAElFTkSuQmCC"/></li></Link>
            </ul>
            <div>
        <h1 class="text-xl text-white mt-20">Address: Second december str.</h1>
        <h1 class="text-xl text-white font-bold mt-3">Phone: 800-000-000-000</h1>
        </div>
        </div>
    </div>
</div>
  )
}

export default ContactUs;