import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import home from "../../homecacke/home.json";
const Home = () => {
    const [show, setShow] = useState(false);
    const productListHome = home.productListHome;
    const products = () => {
        return productListHome
      }
  return(
  <div className=''>
  <header>
  <div class="w-full flex justify-center row row-cols-1 row-cols-md-2 mt-40 mx-auto">
      <div class="col-sm-8">
          <div class="w-full px-5 mx-auto">
          <h1 class="text-rose-700 text-7xl font-bold text-left">Delicious Cakes</h1>
          <h2 class="text-rose-700 text-xl font-medium text-left">in Dubai</h2>
          <p class="mt-3 text-rose-400 text-2xl text-left">Every cake has a texture and flavor story to tell your taste buds. From fluffy sponges and silky-smooth cheesecakes to fruity, fudgy, nutty, coffee, chocolatey, vanilla and confetti, consider yourself covered.</p>
          </div>
      </div>
      <div class="col-sm-8">
          <div class="w-full col-sm-8 mx-auto">
          <img class="ml-20"src="https://t4.ftcdn.net/jpg/02/37/19/23/360_F_237192304_aPVUq8NxqGEi5MpwDYxRXix7CKc4bfh2.jpg" alt=""/>
          </div>
      </div>
      <>
      <div class="col-sm-8 mt-8">
      <button  onClick={() => setShow(true)} class="-mt-20 float-left -ml-72 w-44 h-14 boder-2 rounded-xl bg-rose-700 text-white text-2xl">Order now</button>
      </div>
      <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            <p class="text-left text-3xl text-rose-700 px-5 mt-4">Fill in the data</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body class="py-5">
          <div class="w-64 mx-auto">
            <input class="w-64 py-2 text-left px-2 border-2 border-rose-400 outline-none text-rose-700 text-xl font-bold"placeholder='Name'/>
            <input class="w-64 py-2 text-left px-2 border-2 border-rose-400 outline-none text-rose-700 text-xl font-bold mt-3"placeholder='800-000-000-000'/>
            <input class="w-64 py-2 text-left px-2 border-2 border-rose-400 outline-none text-rose-700 text-xl font-bold mt-3"placeholder='Address'/>
            <textarea class="w-64 h-20 border-2 border-rose-400 mt-4 outline-none px-2 text-rose-700 text-base pt-2 font-bold" placeholder='I want to order 2 cupcakes (strawberry and chocolate)...'></textarea>
            <button class="w-64 h-12 bg-rose-700 text-white border-none rounded-lg text-2xl mt-4 "><Link to="/menu" class="text-white">Order</Link></button>
          </div>
          </Modal.Body>
        </Modal>
      </>
  </div>    
  </header>
            <main>
                <div class="mt-5">
                    <div class="row row-cols-1 row-cols-md-3 pt-5 px-32 mx-auto">
                    <div class="col-sm-8">
                        <div class="flex justify-center">
                            <img class=""src="data:image/png;base64,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"/>
                            <h3 class="text-rose-700 text-base font-bold mt-3 ml-3">Ideal with the right diet</h3>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="flex justify-center">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0ElEQVR4nO1aaYgcVRB+3uCxM1U9u+uJRzyCUQyu6E5XTUYxARXjAeaHEAko/vH4pyYgGsSDeECIMegfT1AhIkqUxc10vbchXoEIIhgV8UIUb6KJGpUYqdfda+/oOLNxtqcT5oOBPeq9ru9Vdb06xpg++ug9JAhPscBLBSgS4Pcs0HaLvKsrH6DtuqcANyzwLY0Kn9x1Ai4Iz7JA0jWlO/wIUGQrPPK/CWw2IwcI8EOC/Gey+feCtCYq08INUDtG/9+VkzLGjA8vOMRbPKhdaoEf1Wd5MvpsoAedqe+/WxtvLDFYYJuczK8W+dZXg/AwkxPG8OwBAbpLgH9JreNK9fK0NtGTniSB9LEAzTE9gq3wiAB9PklmOpZRd0pc6SOH9aNNj7E+CI/MkFnV8Ysd+yX/LGU6wxQEUaV2ZuJmO/Xntgsy0el2UzAI0N2xVbjx34IaNZLopFHEFAwNmF8S5B9Ux4nKvJNaCgrQsoTIw6agsECPxVap3dxSyN+qKhSEl5iCIkK6PM4EeH1LIQv0gQq5Uv04U1BI6v7A77cWAtqmQmvNqQeagsIN1g9NwvC2lkJpjmMKDttOz72eiEMaFQgvMjlifLg6JMiLoqFzhrtGRJCeFaRPZkDf1roEfL7qEiEt+Mf/+kRwL7ZIA8KqBdokyI+kBZbWEBbpPov8qU86gT+0yPe/MjCK2bUuqM62QE9pRqu1jgB9qcXU+HB1KFciLqBzNY5rfZAWW3r3CNCbgvy7BV4twNcK0r0JoTfGzAUH+bWD9cOTSlPrnGVeLqlCBeiF3IhEQBdqOi1Az6XKxQ+m6+P1tKRp7dU+W0C+wq9HusEnfTDv9KZnr7PAX+RCJMlzftM8Z61ZtF+zIoL0TXMFp2S1ylNLpCV0o8Qn7DJmn1TGDY6eKEjvWOCvZ56I+jLSHxb4KwH+qTkfs0DvCvLGlptn9wOao++SIE0I0rd+X+TvciGilZkg3+igelpsFZLsqSoRi/RaOxIu4MvivWjCIl2jl602FXznBPKwSOZlF6TbvGyZr5v8G9CLFmnruiNGDp6ytlw9Vmt/CfiqmDBv1sx1uTH7Tnk28PO5E/FdFuS3NXJtKNWOj9fSkqQP9UAqpxbTIk1dRwbCWbHC9JZGrGyGHQXheRZph1Z/uRKZbAaogsBOFdYT1kiWtD83WeAn9QVOGhlLm6tQAdpikZ6xyK/HUZBdIrt65ogAX5lVJoUr82JBXqFRR39XQhpmBfgJQXpZ74eoHNaya7xMmRdb5KcF6SV96XW9Bg/RgwC+8+9Ixiv+rTbvp/FFg23nWno/qEBz5CkSxnw+52v2H9s2HzRkmj27+cC+HaSXlil+O2i8pZBOipIO/BpTUAjQ40n4vqmDlilt1baL2VNbpgo/7oqjwnJTMFjge9q61ZTBih+10Y7mmqGXcDruiCdnO10pnNvRIp3ZJVb5TIcspseIcPSodNBjgVd2vFCLo9TFdIOOBiszBFcK5+qBpnORaQ9FtUbIkNEGwR15BoAGzC/pO5G4k+++T3sY2mSZVeqX6W2qabkr88XaCenmMEgPyQXV2XpPaIhNo5N/NvDK3R5PN5emcaaa9xcGuDEjbq2xWydFaub46xbxGKI7Svv20hYNrXrZpaVBH32Y3uIvPF8q7DP9baUAAAAASUVORK5CYII="/>
                            <h3 class="text-rose-700 text-base font-bold mt-3 ml-3">Low calorie and healthy</h3>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="flex justify-center">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC30lEQVR4nNWaz2sUMRTHgyKICNuXtUpVEMWL53qo+97Yi6CiXgTviuDFf0BBEdSrePAmindB0ArC2CbTjoJQe1EP3jyoVw9SRYpK5c1mYC37Y5LJZGe+EHYZku/MJy/JJG9XaEmpBlqJdx3ZKRyVAJ1QgF+0pHWboiR+5rbChzTQcteUPrjC8APZQvTCeAFJt9Okkvg+MwX6uLQjmrL1yB8qVLvKYGoDUhamViAsniM8V2znjMtE9z5HfMAsAJ7UQF+tIbgDIDouqlLsAKMl3jcPOHdDiE2D6j0W5zZroDirC3RXVK3YAmZRHj2kJf7RQD+LQM+36ICWtMaFv4u6wCigB2a83ynqrYEemqjcEyEUj4B51SJQgL84Iomc3VvUN2l3DndB8Mc8HGuJEEqHLM0a6JLp2We2vgroLbdNZHRehFI8IDJK4iJfW5jAM7aeWuJF0wmxCKl4A4wZHn+1pG8rYnqLrd/c1PQ2XiCUxN9lNq3lYbK5kX0+cnPLXqZPs6i08bIIrV4Ys1qddfVSki4YnxdiHPKxa847hVc8BbjqMjxrBaMkvu56RB0RWsnkzMEyG81eaaCbZoheE6GlJD5XEq/7iEwyQafNMvxEhJaS+Cl7f8iZPWUjs9SK9ncnPL4ToZUvvcm+2a35NVcY9jDL+KoIrUGnO9dhVtlpscyNXWBqCeICU1sQW5hag9jA1B6kKEwjQIrANAZk5EmzSSDDYBoHMgimkSD9tjONBdkYmUaD9Ds2x6GTED570NdJ00m+h8LYYHQFYzodB4xvkPy8noaG8Q3Sm3xIQ8JUAaJ7/ILBVA0SDCYESBCYUCCVw4QEqRSGc1Bs+rLd2V3Wi5N8JtP4fVi9SmA0kDZJtStlvZTEq10QVKPq+sg198/XSlpjGJfIcCQMBP9Uva4hOlWknXcYBXi7dwteqgDdsrn3f7tmoOVSIKwsMoAqnzM2JWsDqIpGoh8M/2lOAb35B8vswh/2V0IKAAAAAElFTkSuQmCC"/>
                            <h3 class="text-rose-700 text-base font-bold mt-3 ml-3">Don't contain milk fat</h3>
                        </div>
                    </div>
                </div>
            </div>
    <div class="mt-20">
        <h1 class="mt-3 text-rose-400 text-7xl text-center font-bold">Just look at these cakes</h1>
            <div class="w-full mx-auto">
                <div class="w-full row row-cols-1 row-cols-md-3 pt-5 mx-auto">
                {products().map(product => {
                    return (
                    <div class="col-sm-8 mt-2">
                        <div class="w-96 border-2 border-rose-400 rounded-3xl shadow-lg py-16 bg-rose-50 mx-auto"key={product.id}>
                            <img class="w-60 h-60 mx-auto object-contain"src={product.image}/>
                            <h1 class="text-center text-rose-700 text-2xl font-bold">{product.name}</h1>
                            <p class="text-center text-rose-400 font-bold mt-3 border-b-2 mx-auto border-rose-700 w-20">Compound:</p>
                            <div class="w-60 h-10 mx-auto">
                            <p class="text-rose-400 text-center text-lg">{product.description}</p>
                            </div>
                            <p class="text-rose-400 text-center font-bold text-4xl mt-5">{product.price}</p>
                            <div class="mx-auto w-40 h-14">
                                <button class="w-40 h-14 boder-2 rounded-xl bg-rose-700 text-white text-2xl mt-4 text-center font-bold">Buy</button>
                            </div>
                        </div>
                    </div>
                 )})}
                </div>
            </div>
        </div>
        
            </main>
                  <footer>
                  <div class="w-full bg-rose-400 mt-32 py-10 mx-auto">
                      <h1 class="mt-3 text-white text-7xl text-center font-bold">Secret of our cakes is in natural ingredients</h1>
                      <img class="mt-4 mx-auto"src="https://pngimg.com/uploads/cake/cake_PNG97017.png" alt=""/>
                      <p class="text-center text-white font-bold mt-5">Dubai daily deliveries from 10am till 10pm.Sharjah and Abu Dhabi deliveries on Monday, Wednesday and Saturday from 11am till 4pm</p>
                      <div class="mx-auto w-44 h-14 mt-5">
                         <Link to="/learnMore"><button class="mx-auto w-44 h-14 boder-2 rounded-xl bg-rose-700 text-white text-2xl">Learn more</button></Link>
                      </div>
              </div>
              </footer>
            </div>
)};

export default Home;
