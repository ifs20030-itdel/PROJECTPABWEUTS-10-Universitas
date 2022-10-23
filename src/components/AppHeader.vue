<template>
    <section id="home" class="header_area">
        <div id="header_navbar" class="header_navbar">
        <div class="container">
            <div class="row">
            <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">
                    <img id="logo" src="assets/img/logo.png" alt="Logo" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                    <ul id="nav" class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="page-scroll active" href="#home">Beranda</a>
                    </li>
                    <!-- <li class="nav-item dropdown"><a href="#"><span>Fasilitas</span> <i class="bi bi-chevron-down"></i></a>
                        <ul>
                        <li><a href="#">Laboratorium dan Kelas</a></li>
                        <li><a href="#">Akomodasi</a></li>
                        <li><a href="#">Kantin</a></li>
                        <li><a href="#">Perpustakaan</a></li>
                        <li><a href="#">Hiburan dan Olahraga</a></li>
                        <li><a href="#">Ruang Terbuka</a></li>
                        <li><a href="#">Klinik</a></li>
                        </ul>
                    </li> -->
                    <li class="nav-item dropdown"><a href="#"><span>Tentang</span> <i class="bi bi-chevron-down"></i></a>
                        <ul>
                        <li><a class="page-scroll" href="#features">Landasan</a></li>
                        <li><a class="page-scroll" href="#about">Sejarah</a></li>
                        <li><a class="page-scroll" href="#visimisi">Visi Misi</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="page-scroll" href="#blog">Berita</a>
                    </li>
                    <li class="nav-item">
                        <a class="page-scroll" href="#faculty">Pendidikan</a>
                    </li>
                    <li class="nav-item">
                        <a class="page-scroll" href="#prestasi">Prestasi</a>
                    </li>
                    <li class="nav-item">
                        <router-link to = "/dataDosen">
                        <p class="page-scroll">Dosen</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="page-scroll" href="#alumni">Alumni</a>
                    </li>
                    <li class="nav-item">
                        <a class="page-scroll" href="#contact">Kontak</a>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
            </div>
        </div>
        </div>
    </section>
</template>