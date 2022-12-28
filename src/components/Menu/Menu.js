import React, { useState } from 'react';
import dats from "../../data/dats.json";
const  ASSORTMENT = {
  CUPCAKE: 'Cupcake',
  ICECREAM: "Ice cream",
  COOKIE: "Cookie",
  CAKE: "Cake",
}
const Menu = () => {
const productList = dats.productList;
  const [assortment, setMaterial] = useState([]);

  const handleFilterByMaterial= (event) => {
    const { defaultValue  } = event.target
    if (assortment.includes(defaultValue )) {
      return setMaterial(assortment.filter((_assortment) => _assortment !== defaultValue ))
    }
    setMaterial([...assortment, defaultValue ])
  }

  const products  = () => {
    const withFilterByMaterial = assortment.length > 0 ? productList.filter((product) => assortment.includes(product.assortment)) : productList
    return withFilterByMaterial
  }
return(

<div className='mt-20 mb-3 py-10'>
    <div className='filter w-full h-40 mx-auto mt-10'>
            <div className="row row-cols-4 row-cols-sm-2 row-cols-md-4 mx-auto">
                <div className="w-30 h-28 mt-4">
                <img className="mx-auto w-10 h-10"src="data:image/png;base64,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"/>
                <label className="text-lg text-rose-700 font-bold"htmlFor={ASSORTMENT.CUPCAKE}>{ASSORTMENT.CUPCAKE}</label>
                <br/>
                <input className="accent-rose-400 mt-3 w-4 h-4 ring-2 ring-rose-700"id={ASSORTMENT.CUPCAKE} type="checkbox" checked={assortment.includes(ASSORTMENT.CUPCAKE)} value={ASSORTMENT.CUPCAKE} onChange={handleFilterByMaterial}/>
            </div>
            <div className="w-30 h-28 mt-4">
                <img className="mx-auto w-10 h-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFeklEQVR4nN1aa2gcVRS+1fqO2T1nE2sxWvH9fhCNyZ4zWdBKK0JRsfgArVRUEAX/FJ8QFMSi9QXFF/jACqUVrGiJaXfvncRIW1HEKIovxEdLrcUntWqtRs7MHTM7u5PMpjOb1A/yI3PvnXu+ufecc893V6kmoE+pfUyBLzDAj2qgTRpoq0bepZG+10Afa6A1BvjGIXCOVNMRHgGkRRrpS4M8muDvb420YrCt93g1XeBiqUMjvRUYqYE+M8h9Js+lymHnzXJVaWb50HMLg9h7skZarIFeNkh/eH2R/jLId48qNWNKSQxC7+kGeJs16hsDxSuSGOViqcMgP2mQdlvyr742u/NgNRUo5/gYA/ydJTEw0NqNjb7DRZ6rkbZbMmtki2ZjbZwBqjTTIG+wJN5YrU7Zf9Lvau8+ToKB/y5eqpoJk+ebrU987eZK+T19XxmKPQb5T/EZF3pOU83Au6pzPyEgRCpIl07mHRpok6xo1TPkZd7HAV6XmrHjG8FX2W3wYdJoo5GH5S/439gIF+5Thrk5jfSTRv5H/C8L26uNAt7oOyffkHRM1HBTh4j3HOg56/h3pGlzrUFt3GlX48douKzki45GWum2lw6fLBFdKC4IAkiGNLy9/bwlsqzGWOBnvbYCX1OnbYv/pZ2iASbrC5uj/cptfILfRp9mRsJtKbVpoN/leFFvDwckXXSuqyGC/ED0mKKB7o/229DRfZAl+VtmRGTf2mV/Paa9hkiQJCXPeGRkZYA3C4l6uUeOMpbItkxIrFYL9w1CrgFnXhIiBvkuWT0XiJPO4xZ6TrJEPknT/jEjkS4LJogLuVEiGviFuK0WB4mEduutUlnAABvr5LfG9pETrzViMNd7tjhs3FaLg1ev+Nt3sUobGuhUSVIa+Nd+7GqN6+fmSkdLn6hTJ91qZaCj/CKMdw21ObNTJ+Ift70EuHyivpU8nyFfVQO/Y4A+qt5q8VFNoJEetquxQqUNORAaoB2yIuKIjYyt9Zl4Iv3Y1WqQfpZ22ZYqbVSQbrNOvr7RsXHOLyWxqunrLLGrXlZpQ4ocDfy5n62LCxodH+f8Ou/0Rk/TGuhbjzTw/FRJeIaAc7E15CvJI42O1/meOVHn10jvieEqPA/SokZP0w3BIPfb89GSyb4jcH6DNGKQnpDMHW4fVWqGQX6/0XzTUPnpSTbAO6OTpwkDzjzrg1v2pFyOhQZ+zDrmMypDGOD1lsjtqb/cbS+1BKFQ5+lMlaGUpG2iTaPuH0dYoKHUXx6eB+hFW3s8kskEGukDG0UWZjKBl5+6jxDVRAS6TOpzXXDOD6q3aJhMEwbpQRuOV2YzAfArdoJ7Mpngv3lohxdyC8VzMpkgSGBS/FeALspKwjQx4kNq0ED3WoU8yMZSFfaJ6LxXERFILaCR7jTIX4wRot0aaa1b4EtE91UNCnJTQqSOjvW0qBoh9UNuoZbq1uKxkzXUNJtIlboB9Hb1AVCSGVXkTqRfzT9gryDSL4VPUGABX+nVFuFVQtouFZ7cSk1rIgboJlv4uGHR2TsFhAjZlRqOGppExG4KvBrc94+rq54XiicG5yWN/JQB/iVMqlHtN1O4ueJZduIf3DmlA8NtBvmh8Cl53awLDxEpZ1oS0cDL7Wo8Hn7uyaD2IrSCTle4Lc7wiUTszCCisly++PV09ZWYi3y5XY2R6Lg4IhOJ2JlBI11rnXxjnbYBfzXoluREaGQ8ETszGCBtDbg+qioGpfBwjqFm3HTwiTCC0Bqt2w3wfeOpgtOPCPpXCeHiR7J4oEPJzzTqjkt4Q9U0jF210aD8AObNFm4PFMPxdKikN1RNg6eQA22tNYp3ypeOG5f0hqqpsHL/S955ysvgtFaSZHOtUP8//Av/YfKr4LIS8QAAAABJRU5ErkJggg=="/>
                <label className="text-lg text-rose-700 font-bold"htmlFor={ASSORTMENT.ICECREAM}>{ASSORTMENT.ICECREAM}</label>
                <br/>
                <input className="accent-rose-400 mt-3 w-4 h-4 ring-2 ring-rose-700"id={ASSORTMENT.ICECREAM} type="checkbox" checked={assortment.includes(ASSORTMENT.ICECREAM)} value={ASSORTMENT.ICECREAM} onChange={handleFilterByMaterial}/>
            </div>
            <div className="w-30 h-28 mt-4">
                <img className="mx-auto w-10 h-10"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5ElEQVR4nO1Z3W9UVRA/RhQ/qHvn7BJjojYxkhhAULCmuzPblUSTEl/R/8F/QkVEKyKgUaNv6iMJFGtEce+cW0R5AjWiiK9WTJCKiD7QaqyZe86lrezu/dzdPuwk96E998yc352v35lVaiADGUhP5KgaX+2Xa9sYcCcDTjLgWdZ0iTXNG01zrPEiAz0Tp8dA/UkD9DMDzviA23tzeqWUX6lvMZreZY2/G00LnR4GejNOHwPOXHtf409dBxCUag+xxk+WHVTjV6xpb6Bph+/RphMlglNq600GkGVd9qwYICfvHr3VAO03Gv9xX/mK0bgnKFcfaLfHAP4l78reOP0+4HYBIyACoHHVDZmujK0zmr6xX4vm5evLV4/bZwB/DPd4uFn1W3xdf1QS1noBz6Y5lAHaFYYL0KEFpW5QfQUB+KcDMXnsziduT7M/KDU8A3TOgTl8HOr3qF7LdGVs3aIn6L2D6qkbs+hpAt5rAE/bRMbjqpdyUhI7ygnAyawgImHAFzuVYQP0khQGBtydx04rxfujnEgbTq1EynNYhjWOtlyHKHzpiiq4T/wdPgVVG6Pxsu0nDa/VOgPuFjDiuSLsWaWu2UmJTXXYDuFhew4tBGsba7Key2j8kjWdSEM7pML8kaRPJA0PA/i9rEkVTKNzqQgIo+lzlUSEOzma8GpqQx3CY0nOva56wWLZEcBOtCOLMOAGS23wate7vF+ubYsIYDf0G8A3nFdmugqGAXd2SvKDav3NrPEVBvzFAJ1nTRPyv6T6hQ0zUNM1xqsCTMqxFICg1PAY6jXpM5IHuRgAAx6xtZ52tFzXNHHdPUPTRBobAtx6xjLotg/Q4czcTJqfKJmGsQdbrYsXWhg8n9HWBgO4jzWdsdUOLxugUyHJjOgM0CHpaVN3bb1tujT2MGt8K8lNUyrWrCj49I5R3W0g8dyMLNG8LgLw1yRA5uTldnHfKrSMppe7wZ2a8HjJAL0QApLLmbtpyhlzA7HJThOhZ2KSvWjudFSNr46KROLQag6NlPMaLpo7BWsaFRdaF3Mnez+FPdzsQuu7+JcBJzuV334KAz4dVbLcDbGfYhxXM5qejX05KONjDsjXaoUJazoTsmevVk9IGulSEtLYy/Emh4Qz9Mas0JxkmzS9k4TGZ5kKslcdZkDf9hdqSuNLdiZ8zZXet1VSsVSA/pX6367DZwYiIJazgs/i9jSHRsphGZczpWXMRtPH1hDuK3K8GTXJJYPt2GbJQAfc+1OpQISH9GhTNHxIMnxOKosUPplH/Ep9iz0HzQdQ3ZjNqItLBvohz8BgmU6vOiyHDz0DdKxTjnxRrg1Fc2MZlGc2Ggw3bpEy7G50RwLVWJVZWVrbqrFKQsmF92mppvkUrh29X2izC4P3ewEmEBCAHzibF5oluq8Qxc1ydSSaSRmgD4sKs7bhpK0nxGZQrj1SqIEQzKJnzkmJLtRANE8DlxNAFwoH8b8wC+e3UkmE+xRB922foAOhTpcThYVTTAHYGxkV98vfvqb1WWiHVMZrFzAtvwDjntyJnUbkvsIaP5Juu6S7fyteErotvUdYgdwe5ZGvHg7GhYrLO44AOgCiY0qAqX6JHE74j9H0W9zP0y2e2XAqshJ+W4xEvrrQawZ8Xi4+cotz1+Y598yGXrBrzwWAlJjFDmQgA1F55T9wHofvFe4cXAAAAABJRU5ErkJggg=="/>
                <label className="text-lg text-rose-700 font-bold"htmlFor={ASSORTMENT.COOKIE}>{ASSORTMENT.COOKIE}</label>
                <br/>
                <input className="accent-rose-400 mt-3 w-4 h-4 ring-2 ring-rose-700"id={ASSORTMENT.COOKIE} type="checkbox" checked={assortment.includes(ASSORTMENT.COOKIE)} value={ASSORTMENT.COOKIE} onChange={handleFilterByMaterial}/>
            </div>
            <div className="w-30 h-28 mt-4">
                <img className="mx-auto w-10 h-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFDklEQVR4nO1Za2hdRRDeKvXVtPfOnLTB+qiPH4qCCkFMzszxUjEq+KhSLAhatEUUUSu2igoaX6AgPn7pD/9U9IdUxT6wNMnZOU0rVWyqLaKYqn8Ua6tt1aZaxeqVOXdPck1ye8+5abknkIGBw9md3Zmd2d35Zo05CtTT1jXDAq2wwFsF6KAg/SpANizS9Ukf6/k3CLC4toMC/InKrD21/RSTB7Kz/HMFaFCQy+OxBV4pwG/Uahfgr/oKfE5Tjehp65qRGGGBQilySVe4p61zjiDfb4EPVBl0wCLft6mFZyuHSF3qtcSYpnpGgB9OjFhlbj5+dLsFujA2FGhQv0e3q0wl3OIxVphmkQBti5UoBpfX6tNtzHHKNccocsl5bKtpFlmgIVViImERh2fFI0OmWZTsgWh2qaXRMT70/JnJHjLNIov8mSoRev78hsfwgisqG562HV3tsigB9JQ7daRszLRGxhDkte5k6zbNIj1mk/CywHdmlbdIS9xC/Ba1lFqPjZapleE7YkOQ/rZAi1LLAS0SpMPxHsPgdpMHEuTuxBgBuqte/xD8u+O+lZB6wuSJLNCzVWnHy+PdHfpP26r6PWPySLYS83+5e+H9Lad3nJy0rTfXnGiR3x72XJHvMXmm0PPnC/I+p/DGqFAqKuu388S+iRzXmUnDwCIt1sTOIu+vmb0eY7bI+zWXi4p865FSndrHKvLmZikvtXmTZs6pjNC4tkifutD4OU7Hi53zGr3wJkJlY6bp3IK0TJD3JhlANK90Ul1hC/SkO1F2W88/z+SEIq/zfAHe4xb48boCVZ2XpF01AV5jkdZliWG3B9dZoNVpZQRpabLIKTonm4w26l5JC65cmvLKeABrNGkf7TsS+7SsnszmAoMA9yQyqQ1xxvxikV4UCK7u9fy5un+U+4DOFAwWCvIHTpHDAvy7i+EvKoWIwA/nXNam8ays3/qv0kZfupVVmX/cvbM6RLqpH4Izknl0zgj5Sov8vNuv5eyGAK9JdTwCDVmPb4uA+EhFiDEMNBjLIC21wH+kO4ppQ2ZD9Dss8kWC/Jwg9QvwDzphzEjf6aAWgof6Zl7qVYdMVOTrBPk1AR6wQLss0CHHu/SfIL0qEFxbHYKVLJoeEeBeC/R9ZZ6KjLsGXpBWbh+tX2pD8kgyZUjOSKY8kjOSKY9MNo+UNWfyggU5SNXLqdgLFozJyDfM6kC9jJquHGZk4B7NwUawNNDHecAfDeET5C2rzAUnaMw9lkf8kRGfPKpp+O4s+CMhzUwruRNvjwqls0yD1F8IztYxdKxez5+bRTbBJxbox8z4IwZEwLdUp9Xx8wLQcn0iyPjatTx5mnC8VzPpNABtDD5Jgz8SXCDAT1ugnSMG8Mr4jfD/8m9qCVSz1dF4RP9pidUivxU/io7Iva54REZ0+UYLfhb9q0LsOC0VPsmKP5wBX0ce35isjtapLHCfRf439RjaF7g3qXHFGxlpsSB/m36MKnxSD39o5dAi/WSBP1JvKcqrdaIpcgyR7lWvCNKO+ABxeMTtxe3apn0UCdYK3VCLfEAvxVhkGAfVwSfVhkxGkilDckYy5ZH8eoT+1I8B0z7dTDIaMO3T3YV8SN8AP3f3CJlJRlFcF1OP0A7NtR50huzR2pIt0sX6wprX7DdqKbVGBf8SVweLk8YQ6QFXh6V3m44tGmQL9M5wsS9Gh1rLBX5Pc6lmvlClSG30BWtnZfGDhUnk/AcSnwyYCyGc8wAAAABJRU5ErkJggg=="/>
                <label class="pl-2 text-lg text-rose-700 font-bold"htmlFor={ASSORTMENT.CAKE}>{ASSORTMENT.CAKE}</label>
                <br/>
                <input className="accent-rose-400 mt-3 w-4 h-4 ring-2 ring-rose-700" id={ASSORTMENT.CAKE} type="checkbox" checked={assortment.includes(ASSORTMENT.CAKE)} value={ASSORTMENT.CAKE} onChange={handleFilterByMaterial} />
            </div>
            </div>
            </div>
        <div class="w-full container text-center mx-auto mt-10">
        <div class="">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {products().map(product => {
                    return (
                    <div className="col-sm-8">
                        <div className="pb-3 border-2 border-rose-400 rounded-3xl p-2 mt-1" key={product.id}>
                            <img className="img w-full h-80 border border-none rounded-3xl"src={product.image}/>
                            <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mt-3 px-3">
                                <p className="card-text text-left text-2xl text-rose-700">{product.name}</p>
                                <p className="card-text text-2xl text-rose-700 text-left">{product.price}$</p>
                            </div>  
                            <div className="w-full h-24">
                                <p className="card-text text-left pl-2 text-rose-400 mt-2">{product.description}</p>
                            </div>
                            </div>          
                        </div>
                    </div>
                        )})}
            </div>
        </div>
    </div>
</div>
  )
}

export default Menu;