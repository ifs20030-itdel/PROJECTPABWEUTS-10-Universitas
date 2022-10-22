<template>
    <header id="header" class="fixed-top d-flex align-items-center header-transparent">
    <a href="index.html" class="logo"><img src="../../public/assets/img/logo.png" alt="logodel" class="img-fluid"></a>
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center">
        <div class="mb-2 col-xl-13 d-flex align-items-center justify-content-between">
          <div class="row justify-content-center">
          <h1><a href="index.html">Institut Teknologi Del</a></h1> 
          <p1 style="color: rgb(255, 255, 255); font-family: Montserrat, sans-serif; font-size:small;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MarTuhan-Marroha-Marbisuk</p1>
          <br>  
          </div>

          <Script>
            var navbar = new navbar();
            alert('foo');
          </Script>

          <nav id="navbar" class="navbar p-5">
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a class="nav-link scrollto" href="#about">Tentang IT Del</a></li>
              <li class="dropdown"><a href="#"><span>Pendidikan</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Fakultas Informatika dan Elektro</a></li>
                  <li><a href="#">Fakultas Vokasi</a></li>
                  <li><a href="#">Fakultas Bioteknologi</a></li>
                  <li><a href="#">Fakultas Teknologi Industri</a></li>
                  <li><a href="#">Kalender Akademik</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Prestasi</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li>
                    <router-link to="/datadosen">Dosen IT Del</router-link></li>
                  <li><a href="#">Staf IT Del</a></li>
                  <li><a href="#">Mahasiswa IT Del</a></li>
                </ul>
              </li>
              <li><a class="nav-link scrollto" href="#team">Sivitas</a></li>
              <li><a class="nav-link" href="#">Lembaga</a></li>
              <li class="dropdown"><a href="#"><span>Fasilitas</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Laboratorium dan Kelas</a></li>
                  <li><a href="#">Akomodasi</a></li>
                  <li><a href="#">Kantin</a></li>
                  <li><a href="#">Perpustakaan</a></li>
                  <li><a href="#">Hiburan dan Olahraga</a></li>
                  <li><a href="#">Ruang Terbuka</a></li>
                  <li><a href="#">Klinik</a></li>
                </ul>
              </li>
              <li><a class="nav-link scrollto" href="#contact">Search</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav><!-- .navbar -->
        </div>
      </div>

    </div>
  </header>
</template>