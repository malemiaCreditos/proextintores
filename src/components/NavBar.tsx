export const NavBar = () => {
  return (
    <>
      <header id="header" className="header fixed-top">
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="#">proextintor.mz@gmail.com</a>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>+258 85 524 0453 </span>
              </i>
            </div>
            <div className="languages d-none d-md-flex align-items-center">
              <ul>
                <li>PT</li>
                <li>
                  <a href="#">En</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="branding d-flex align-items-center">
          <div className="container position-relative d-flex align-items-center justify-content-between">
            <a
              href="#hero"
              className="logo d-flex align-items-center me-auto me-xl-0"
            >
              <svg
                version="1.1"
                viewBox="0 0 1280 876"
                width="40"
                height="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  transform="translate(615)"
                  d="m0 0h65v2h26l45 4 30 4 35 6 29 6 32 8 28 8 36 12 26 10 20 8 15 7 19 9 22 12 20 11 12 8 9 5 22 15 12 9 13 10 11 9 10 9 8 7 4 3v2l4 2 20 20 7 8 9 10 11 14 9 12 11 16 11 18 9 16v2l-6 4-4-2-7-8v-2h-2l-7-8-11-12-9-9-2-1v-2l-4-2-7-7-11-9-3-2v-2l-4-2-13-10-18-13-12-8-17-11-22-13-14-7-17-9-16-7-15-7-30-12-33-11-22-7-22-6-36-8-33-6-27-4-39-4-32-2h-74l-43 3-43 5-35 6-29 6-32 8-23 7-36 12-29 11-15 7-20 9-24 12-14 8-17 10-19 12-18 13-12 9-10 8-11 9-11 10-8 7-21 21-1 2h-2l-2 4-9 10-11 14-10 14-12 18-10 17-8 16-8 18-6 15-8 26-6 29-3 27v42l3 28 6 28 9 29 9 22 10 21 12 21 8 12 10 14 10 13 9 11 10 11v2h2l7 8 11 11 2 1v2l4 2 7 7 9 7v2l4 2 16 13 17 12 14 10 23 14 17 10 23 12 7 4-3 9-4-1-26-9-35-14-15-7-23-11-19-10-18-10-15-9-33-22-12-9-13-10-11-9-11-10-8-7-5-4v-2l-4-2-14-14v-2h-2l-7-8-9-10-11-14-10-13-18-27-9-16-12-23-10-24-9-27-5-19-4-21-2-14v-13h-2v-52h2v-12l4-25 6-26 12-36 11-24 13-25 13-21 8-11 9-13h2l2-4 14-18h2l2-4 16-17 15-15 8-7 10-9 11-9 18-14 18-13 23-15 15-9 36-20 23-11 20-9 23-9 12-5 29-10 26-8 29-8 26-6 43-8 26-4 37-4 24-2h27z"
                  fill="#FB0000"
                />
                <path
                  transform="translate(685,111)"
                  d="m0 0 7 6 12 15 14 19 14 21 12 20 9 17 9 21 5 19 1 13-3 16-6 16-11 21-12 18-10 14-12 17-11 16-10 15-8 14-9 17-9 22-4 12-2 10v27l4 18 6 15 10 17 13 17 2 4h2v2h2l6 8 1 4h-6l-17-6-15-7-16-9-18-12-11-8v-2l-4-2-16-16-11-15-9-16-6-17-2-11v-23l3-17 7-21 10-19 33-55 11-18 12-20 10-17 8-14 7-12 7-14 7-15 8-20 4-14 2-14v-14l-3-14-6-12-9-11-3-5z"
                  fill="#FB0000"
                />
                <path
                  transform="translate(241,570)"
                  d="m0 0h17v2l16 4 12 6 8 8 3 8v130l-1 1h-94l-1-128 3-10 6-7 10-6 9-3 9-2zm-25 26-4 2v15l4 3h65l4-3v-14l-4-3zm23 37v2h-3l-2 10-6 7v2h-2v-2l-4 1-1 2-2 12-1-5h-2l-1 6h-2l-1 3 1 9 6 8 8 7 7 4 2 1h19l8-3 4-5 6-10v-3h-3l2-5 1-11-4-4-4 8v-15l-2-7-5 1-1 4-1-6h-2l-1 6h-2l-1 4-1-10h-5l-1-7-2-4z"
                  fill="#FA0101"
                />
                <path
                  transform="translate(840,317)"
                  d="m0 0 5 5 11 18 11 19 6 15 2 10 1 20-1 17-4 17-5 13-8 15-10 14h-2l-2 4-12 13-13 13-8 7-3 1v2h-2v2l-11 9-14 15-9 12-8 14-4 1-2-21v-8l4-20 8-20 9-15 4-5h2l2-4 9-11 13-15 10-12 9-13 8-16 7-19 4-17 2-12v-19l-4-16-5-10z"
                  fill="#FB0101"
                />
                <path
                  transform="translate(788,266)"
                  d="m0 0h2l10 17 7 16 5 17 2 16-1 17-5 19-6 15-12 22-8 12-13 17-14 18-7 10-8 13-7 14-5 14-1 4v17l3 6v4l-4-2-10-10-8-14-4-11-2-11v-9l3-15 4-9 13-22 13-20 12-17 13-18 7-11 8-13 8-16 6-16 4-17v-15l-2-12-3-7z"
                  fill="#FB0202"
                />
                <path
                  transform="translate(306,514)"
                  d="m0 0 7 3 7 5 11 1 11 7 35 24 17 12 22 15v3l-1 2h-2v2l-8 7-3 3h-2v2l-7 6h-3v-2l-4-2-10-9-8-7-28-24-10-9-11-9-4-4-2-10-5-4-7 1-11 8-16 11-9 6h-5l-1-6 4-4 15-10 14-10 11-7z"
                  fill="#FA0303"
                />
                <path
                  transform="translate(624,609)"
                  d="m0 0h16l10 58v3h2v-61h11v120h-13l-13-75v-4h-2v79h-11z"
                  fill="#460000"
                />
                <path
                  transform="translate(1046,609)"
                  d="m0 0h23l7 3 4 5 3 10v25l-2 8-4 6 2 4 3 7 1 6 1 46h-12l-1-5-1-39-2-6-10-2v52h-12zm12 17v32l1 2h7l4-4 1-4v-20l-3-5-1-1z"
                  fill="#990202"
                />
                <path
                  transform="translate(758,609)"
                  d="m0 0h23l7 3 4 5 2 5 1 6v24l-3 10-3 4 2 4 4 13 1 46h-12l-1-3-1-40-2-8h-9l-1 51h-12zm12 17v32l1 2h7l4-4 1-4v-19l-2-5-2-2z"
                  fill="#FA0101"
                />
                <path
                  transform="translate(354,609)"
                  d="m0 0h23l6 3 5 6 2 7v29l-4 10-2 4 4 5 2 7 1 43 1 6h-13l-1-6-1-39-2-5-9-2v52h-12zm12 17v34h7l4-4 1-2v-23l-2-4-2-1z"
                  fill="#FA0101"
                />
                <path
                  transform="translate(415,607)"
                  d="m0 0 8 1 6 4 5 8 2 10v78l-3 12-7 8-3 2h-11l-6-4-5-7-2-7-1-11v-65l2-15 6-9 5-4zm1 17-4 3-1 3v78l2 4 7 1 3-4 1-3v-74l-2-5-4-3z"
                  fill="#FB0606"
                />
                <path
                  transform="translate(729,607)"
                  d="m0 0 8 1 6 4 5 8 2 9v80l-3 11-4 6-6 4h-11l-6-4-5-7-2-8v-85l3-9 7-8zm2 17-5 3-1 3v78l2 4 7 1 3-3 1-4v-74l-2-5z"
                  fill="#950303"
                />
                <path
                  transform="translate(1216,607)"
                  d="m0 0 8 1 6 4 5 10 1 3v88l-4 9-5 6-4 2h-11l-6-4-5-9-2-11v-74l2-12 6-9 5-3zm0 17-4 4-1 12v64l2 7 2 2 7-1 2-3v-80l-4-5z"
                  fill="#FB0101"
                />
                <path
                  transform="translate(232,509)"
                  d="m0 0h12l21 6 3 3 2 6v9l-1 1h-8l-1 4-1 1-12 1-5 5v8l5 5 10 1 1 4-4 1h-10l-5-3-2-5h-21l-14 3-16 8-9 7-9 8-3-1v-9l4-8 9-8 21-11 9-6 8-3 15-2h6l-1-6-4-2h-11l-16 6-10 3h-12l-7-2-1-3 24-8 10-4 19-8z"
                  fill="#F80404"
                />
                <path
                  transform="translate(1172,607)"
                  d="m0 0 8 1 6 4 5 10 1 4v23h-11l-2-21-3-3-5 1-2 6v75l1 5h9l1-7 1-21h11v27l-3 10-5 7-3 2h-4v6h5v2h2v12l-5 4h-12l-4-4-1-7 1-1h7l3 5 2 1v-8l-3-1v-9l-6-1-6-7-3-8-1-5v-81l3-11 3-5h2v-2z"
                  fill="#FB0202"
                />
                <path
                  transform="translate(513,609)"
                  d="m0 0h13l8 36 8-34 1-2h11l-1 9-11 47 1 9 12 52v3h-13l-6-26-2-13h-2l-1 8-7 31h-12l2-11 11-47v-7l-12-51z"
                  fill="#690303"
                />
                <path
                  transform="translate(1089,609)"
                  d="m0 0h12l2 16 6 67 1-2 7-76 1-5h11l-2 26-9 93-1 1h-16l-1-1-11-112z"
                  fill="#F90404"
                />
                <path
                  transform="translate(1260,607)"
                  d="m0 0 8 1 7 6 3 7 2 6v15l-1 1h-11l-1-12-2-5-7-1-1 3v16l7 14 6 8 8 16 2 7v22h-2l-1 7-4 7-6 5h-12l-7-6-4-8-1-5v-17h11l1 2 1 14 2 2h6l2-3v-17l-4-9-6-10-7-10-5-14-1-7v-10l2-11 5-9 5-4z"
                  fill="#FA0606"
                />
                <path
                  transform="translate(310,609)"
                  d="m0 0h22l7 3 5 6 2 6 1 8v25l-2 11-5 8-7 4h-11v49h-12zm12 17v37h8l4-3v-31l-3-3z"
                  fill="#FA0202"
                />
                <path
                  transform="translate(978,607)"
                  d="m0 0 8 1 6 4 5 10 1 4v17h-11l-2-15-1-2h-7l-2 5v10l4 11 9 13 8 16 2 7v23l-4 11-5 6-4 2h-11l-8-7-4-10v-19h11l2 18h7l2-1 1-3v-14l-5-13-11-16-5-11-2-8v-18l3-10 6-8z"
                  fill="#680404"
                />
                <path
                  transform="translate(859,607)"
                  d="m0 0 8 1 6 4 5 10 1 4v17h-11l-2-15-1-2-4-1-4 2-1 5v8l3 10 7 11 6 9 5 10 2 9v22l-4 11-5 6-4 2h-10l-6-4-4-5-3-9v-18h11l2 18h8l2-4v-14l-5-13-11-16-5-11-2-10v-14l2-10 6-9 4-3z"
                  fill="#670303"
                />
                <path
                  transform="translate(1e3 609)"
                  d="m0 0h34v17h-21v32h17v17h-17v37h21v17h-34z"
                  fill="#960000"
                />
                <path
                  transform="translate(804,609)"
                  d="m0 0h33v17h-21v32h17v17h-17v37h21v17h-33z"
                  fill="#910001"
                />
                <path
                  transform="translate(905,609)"
                  d="m0 0h33v17h-21v32h17v17h-17v37h21v17h-33z"
                  fill="#210000"
                />
                <path
                  transform="translate(475,609)"
                  d="m0 0h33v17h-21v32h17v17h-17v37h21v17h-33z"
                  fill="#910001"
                />
                <path
                  transform="translate(669,609)"
                  d="m0 0h38v17h-13v103h-12v-103h-13z"
                  fill="#910101"
                />
                <path
                  transform="translate(558,609)"
                  d="m0 0h38v17h-13v103h-12v-103h-13z"
                  fill="#1F0101"
                />
                <path
                  transform="translate(1135,609)"
                  d="m0 0h12v120h-12z"
                  fill="#FA0000"
                />
                <path
                  transform="translate(602,609)"
                  d="m0 0h12v120h-12z"
                  fill="#2B0000"
                />
                <path
                  transform="translate(652,609)"
                  d="m0 0h11v120h-13l-1-8 1-17h2v-16h-2v-18h2z"
                  fill="#700202"
                />
                <path
                  transform="translate(1074,611)"
                  d="m0 0 5 4 3 7 1 5v25l-2 8-4 6 2 4 3 7 1 6 1 46h-12l-1-5-1-39-1-5 1-6-2-1 2-5h-2v-2h2v-2h-2l-1-4 4-4h2l-2-4-1-20-1-7 2-10z"
                  fill="#F00101"
                />
                <path
                  transform="translate(759,609)"
                  d="m0 0h22l7 3 4 5 2 5 1 6v19l-2 3v-2h-3l-1 2-5-1-1 3-1-19-2-5-1-1-9-1v22l-3 1h-7l-1 3z"
                  fill="#920101"
                />
                <path
                  transform="translate(638,609)"
                  d="m0 0h2l10 58 1 4v11l-1 6h2v16h-2v17l-2-3-11-64v-4h-2l-1 4v-38-3l1-2z"
                  fill="#540506"
                />
                <path
                  transform="translate(749,629)"
                  d="m0 0h1v80l-6 3v-2h-2l-1 2h-3l-1-6 1-52 1-5h9z"
                  fill="#FB0000"
                />
                <path
                  transform="translate(1e3 609)"
                  d="m0 0h33v1h-27v22l-2 1 2 3v22l-1 4 1 2v14l1 6-1 3-1 17h2l1 6-2 4 1 8-1 6h14v1h-20z"
                  fill="#7B2B2B"
                />
                <path
                  transform="translate(978,607)"
                  d="m0 0 8 1 6 4 5 10 1 4v17h-11l-2-15-1-2h-7l-2 5h-1l-2-9-1-5h-3l-2 1 2-5 6-5z"
                  fill="#550506"
                />
                <path
                  transform="translate(859,607)"
                  d="m0 0 8 1 6 4 5 10 1 4v17h-11l-2-15-1-2-4-1-5 3h-3v-2h2l-4-10-1-4 5-4z"
                  fill="#6B0808"
                />
                <path
                  transform="translate(540,672)"
                  d="m0 0h2l4 15 9 39v3h-13l-6-26-1-11h2l1-4 2-12z"
                  fill="#530607"
                />
                <path
                  transform="translate(849,613)"
                  d="m0 0 4 5 2 8h-2v2h3v17l-1 3v10l-1 3v5l2 1-3 3-8-16-2-10v-14l2-10z"
                  fill="#950505"
                />
                <path
                  transform="translate(543,609)"
                  d="m0 0h11l-1 9-9 39-5-1-1-7 1-5 1-4h-4l2-11 4-18z"
                  fill="#530304"
                />
                <path
                  transform="translate(969,615)"
                  d="m0 0 4 3v6l1 2 1 20-2 2 1 8-2 4-1 5h-2l-5-11-2-8v-18l3-10z"
                  fill="#3B0303"
                />
                <path
                  transform="translate(973,644)"
                  d="m0 0 3 1 6 12 8 11 1 6-2-1v13h-2v7h-2l-5-12-10-14 1-8 2-3v-8l-2-1h2z"
                  fill="#510203"
                />
                <path
                  transform="translate(443,660)"
                  d="m0 0h24v17h-24z"
                  fill="#FB0000"
                />
                <path
                  transform="translate(843,694)"
                  d="m0 0h11l2 17h-2v3h-2l1 4h2l1 4h-2v2l2 1v3l-5-1-5-6-3-9z"
                  fill="#910202"
                />
                <path
                  transform="translate(962,694)"
                  d="m0 0h11l1 18v8h-2l-1 7-6-5-3-9z"
                  fill="#380303"
                />
                <path
                  transform="translate(986,709)"
                  d="m0 0 1 4 3 7 1 6-6 4h-11l-3-2v-6l1-2h2l-1-8 2-2v2h7z"
                  fill="#500405"
                />
                <path
                  transform="translate(783,686)"
                  d="m0 0h1v26h10l-1-26 2 1 1 42h-12l-1-3z"
                  fill="#940303"
                />
                <path
                  transform="translate(989,612)"
                  d="m0 0 4 1 4 9 1 4v17h-11l1-9 1-10-1-2v-6l-2-1z"
                  fill="#6D0E0E"
                />
                <path
                  transform="translate(759,709)"
                  d="m0 0 1 3 2-1h8v18h-11z"
                  fill="#920101"
                />
                <path
                  transform="translate(458,660)"
                  d="m0 0h9v17h-24v-1h14v-12z"
                  fill="#920101"
                />
                <path
                  transform="translate(669,609)"
                  d="m0 0h37v1h-34l2 4v5l-2 6-3 1z"
                  fill="#620101"
                />
                <path
                  transform="translate(558,609)"
                  d="m0 0 5 2 2 7-1 8h-6z"
                  fill="#440101"
                />
                <path
                  transform="translate(877,691)"
                  d="m0 0h2v20l-1 2-4-1 1-6h2l-2-7v-5l1 2h2z"
                  fill="#4A0102"
                />
                <path
                  transform="translate(877,624)"
                  d="m0 0 2 2v16h-4v-2h2v-7l-3-1 1-6h2z"
                  fill="#4E0001"
                />
                <path
                  transform="translate(852,660)"
                  d="m0 0 2 1v5l2 1-3 3-4-8z"
                  fill="#911"
                />
                <path
                  transform="translate(878,705)"
                  d="m0 0h1v6l-1 2-4-1 1-6z"
                  fill="#52090A"
                />
                <path
                  transform="translate(540,659)"
                  d="m0 0 2 1v12h-2l-2-11z"
                  fill="#64090A"
                />
                <path
                  transform="translate(514,718)"
                  d="m0 0 2 2 1 6-1 2h-4z"
                  fill="#9F1313"
                />
              </svg>
              {/* <h1 className="sitename">Pro Extintores</h1> */}
            </a>

            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <a href="#hero" className="active">
                    Home
                    <br />
                  </a>
                </li>
                <li>
                  <a href="#about">Sobre</a>
                </li>
                <li>
                  <a href="#menu">Menu</a>
                </li>
                <li>
                  <a href="#specials">Specials</a>
                </li>
                <li>
                  <a href="#events">Serviços</a>
                </li>
                <li>
                  <a href="#gallery">Galeria</a>
                </li>
                <li>
                  <a href="#contact">Contactos</a>
                </li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <a
              className="btn-book-a-table d-none d-xl-block"
              href="#book-a-table"
            >
              Solicitar Serviço
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
