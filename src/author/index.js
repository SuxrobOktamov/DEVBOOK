import React, { useEffect, useState } from 'react';
import './author.css';
import Img1 from '../images/book-1.png';
import Img2 from '../images/book-2.png';
import Img3 from '../images/book-3.png';
import Img4 from '../images/book-4.png';

function Author({Id, Datas}) {    

    const [wrap, setWrap] = useState(false);

    const [author, setAuthor] = useState([]);

    useEffect(()=>{
        setAuthor(Datas.filter(author => author.id === Id));
    }, [Datas])

    function wrapHandler() {
        setWrap(!wrap)
    }

  return (
    <section id='section'>
        {author.map(item => (
            <div className="author-details">
                <div className="author-logo">
                    <img src={item.img} alt="author" />
                    <div className="author-born">
                        <div className="author-may">
                            <small>Tavallud sanasi</small>
                            <h2>{item.year}</h2>
                            <small>Toshkent, Uzbekistan</small>
                        </div>
                        <div className="author-may">
                            <small>Vafot sanasi</small>
                            <h2>{item.year}</h2>
                            <small>Toshkent, Uzbekistan</small>
                        </div>
                    </div>
                </div>
                <div className="author-title">
                    <h2>{item.name}</h2>
                    <p>
                     {item.name} 1941 yil Toshkent viloyatining Zangiota (hozirgi Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika kulliyotida oʻqish bilan baravar gazeta tahririyatida ishladi. 1959 yildan 1963 yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”, “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih, tarjimon boʻlib ishladi. Soʻng “Toshkent haqiqati” gazetasida adabiy xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim mudiri (1966–1982), Gʻ. Gʻulom nomidagi Adabiyot va sanʼat nashriyotida bosh muharrir oʻrinbosari (1982–1985) boʻldi. 1985–1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005 yilgacha Oʻzbekiston Respublikasi Oliy Majlisining Matbuot va axborot qoʻmitasi raisi lavozimida ishladi. 2005 yildan “Teatr“ jurnalida bosh muharrir boʻlib ishladi.</p>
                    <div className="ijod">
                        <div className="ijod-logo">
                            <img src={item.imgB} alt="ijod" />
                            <h3>Ijodi</h3>
                        </div>
                        <p>
                            Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.</p>
                    </div>
                    <div className="Book-title">
                        <h2>ASARLARI</h2>
                        <p id="toggle" onClick={wrapHandler} >Barchasini ko'rish</p>
                    </div>
                    <div className={`Book-logo ${wrap ? 'wrap': ''}` } >
                        <div className="logo-card">
                            <img src={Img1} alt="asar" />
                            <h3>Dunyoning ishlari</h3>
                            <span>⭐️4.1 • 3400 ta fikrlar</span>
                        </div>
                        <div className="logo-card">
                            <img src={Img2} alt="asar" />
                            <h3>Dunyoning ishlari</h3>
                            <span>⭐️4.1 • 3400 ta fikrlar</span>
                        </div>
                        <div className="logo-card">
                            <img src={Img3} alt="asar" />
                            <h3>Dunyoning ishlari</h3>
                            <span>⭐️4.1 • 3400 ta fikrlar</span>
                        </div>
                        <div className="logo-card">
                            <img src={Img4} alt="asar" />
                            <h3>Dunyoning ishlari</h3>
                            <span>⭐️4.1 • 3400 ta fikrlar</span>
                        </div>
                        <div className="logo-card">
                            <img src={Img1} alt="asar" />
                            <h3>Dunyoning ishlari</h3>
                            <span>⭐️4.1 • 3400 ta fikrlar</span>
                        </div>
                        <div className="logo-card">
                            <img src={Img2} alt="asar" />
                            <h3>Dunyoning ishlari</h3>
                            <span>⭐️4.1 • 3400 ta fikrlar</span>
                        </div>
                        <div className="logo-card">
                            <img src={Img3} alt="asar" />
                            <h3>Dunyoning ishlari</h3>
                            <span>⭐️4.1 • 3400 ta fikrlar</span>
                        </div>
                        <div className="logo-card">
                            <img src={Img4} alt="asar" />
                            <h3>Dunyoning ishlari</h3>
                            <span>⭐️4.1 • 3400 ta fikrlar</span>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </section>
  )
}

export default Author;