<template>
  <div class="pseudoheader p-5 mb-2"></div>
   <div class="main-panel m-5 p-5">
           <div class="content-wrapper">
             <div class="row">
              <input type="text" placeholder="Filter by Nama or Prodi" v-model="filter" />
               <div class="col-lg-12 grid-margin stretch-card">
                 <div class="card shadow rounded">
                   <div class="card-body">
                     <h4 class="card-title text-center">Daftar Dosen Institut Teknologi Del</h4>
                     <div class="table-responsive pt-3">
                      <div id="app">
                       <table class="table table-bordered">
                         <thead>
                           <tr>
                             <th>#</th>
                             <th>Nama</th>
                             <th>NIDN</th>
                             <th>Aktif Start</th>
                             <th>Aktif End</th>
                             <th>Prodi</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr v-for="(row, index) in filteredRows" :key="`row-${index}`">
                            <td v-html="highlightMatches(row.id)"></td>
                            <td v-html="highlightMatches(row.titleName)"></td>
                            <td v-html="highlightMatches(row.titleNIDN)"></td>
                            <td v-html="highlightMatches(row.titleStart)"></td>
                            <td v-html="highlightMatches(row.titleStatus)"></td>
                            <td v-html="highlightMatches(row.titleProdi)"></td>
                           </tr>
                         </tbody>
                       </table>
                      </div>
                     </div>
                   </div>
                 </div>
               </div>
               <div class="col-lg-12 grid-margin stretch-card mt-60">
                 <div class="card shadow rounded">
                   <div class="card-body">
                     <h4 class="card-title text-center">Matakuliah </h4>
                     <div class="table-responsive pt-3">
                       <table class="table table-dark">
                         <thead>
                           <tr>
                             <th>#</th>
                             <th>Name</th>
                             <th>Matakuliah</th>
                             <th>Bobot SKS</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>1</td>
                             <td>Arie Satia Dharma, S.T, M.Kom.</td>
                             <td>11S3109 - Web Based Application Development</td>
                             <td>4 SKS</td>
                           </tr>
                           <tr>
                             <td>2</td>
                             <td>Dr. Arlinta Christy Barus, ST., M.InfoTech.</td>
                             <td>11S3112 - Software Quality Assurance and Testing</td>
                             <td>3 SKS</td>
                           </tr>
                           <tr>
                             <td>3</td>
                             <td>Dr. Johannes Harungguan Sianipar, S.T., M.T.</td>
                             <td>11S3105 - Information Security and Cryptography</td>
                             <td>3 SKS</td>
                           </tr>
                           <tr>
                             <td>4</td>
                             <td>Iustisia Natalia Simbolon, S.Kom., M.T.</td>
                             <td>12S2102 - Database</td>
                             <td>4 SKS</td>
                           </tr>
                           <tr>
                             <td>5</td>
                             <td>Nenni Mona Aruan, S.Pd., M.Si</td>
                             <td>FIS1202 - Physics</td>
                             <td>3 SKS</td>
                           </tr>
                           <tr>
                             <td>6</td>
                             <td>Tahan HJ Sihombing, S.Pd., M. App Ling (TESOL)</td>
                             <td>KUS1201 - English</td>
                             <td>2 SKS</td>
                           </tr>
                           <tr>
                             <td>7</td>
                             <td>Asido Saragih, S.Pd., M.Sc.</td>
                             <td>10S1201 - Basic Programming</td>
                             <td>4 SKS</td>
                           </tr>
                           <tr>
                             <td>8</td>
                             <td>Marojahan MT. Sigiro, ST., M.Sc</td>
                             <td>10S2202 - Computer Networks</td>
                             <td>3 SKS</td>
                           </tr>
                           <tr>
                             <td>9</td>
                             <td>Ardiles Sinaga, S.T., M.T.</td>
                             <td>11S2110 - Object-Oriented Programming</td>
                             <td>4 SKS</td>
                           </tr>
                           <tr>
                             <td>10</td>
                             <td>Herimanto, S.Kom., M.Kom</td>
                             <td>10S3109 - Artificial Intelligence</td>
                             <td>3 SKS</td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
  </template>

<script>
  const app = new Vue({
  el: "#app",
  data: {
    filter: "",
    rows: [
    {
          id: 1,
          titleName: 'Arie Satia Dharma, S.T, M.Kom.',
          titleNIDN: '0927028002',
          titleStart: '2013-09-19',
          titleStatus: 'Dosen Non-PNS',
          titleProdi: 'S1 Informatika'
        },
        {
          id: 2,
          titleName: 'Dr. Arlinta Christy Barus, ST., M.InfoTech.',
          titleNIDN: '0117027901',
          titleStart: '2002-11-29',
          titleStatus: 'Dosen Non-PNS',
          titleProdi: 'S1 Informatika'
        },
        {
          id: 3,
          titleName: 'Dr. Johannes Harungguan Sianipar, S.T., M.T.',
          titleNIDN: '0116047301',
          titleStart: '2002-09-01',
          titleStatus: 'Dosen Non-PNS',
          titleProdi: 'S1 Informatika'
        },
        {
          id: 4,
          titleName: 'Iustisia Natalia Simbolon, S.Kom., M.T.',
          titleNIDN: '0114129002',
          titleStart: '2019-08-05',
          titleStatus: 'Dosen Non-PNS',
          titleProdi: 'S1 Informatika'
        },
        {
          id: 5,
          titleName: 'Nenni Mona Aruan, S.Pd., M.Si',
          titleNIDN: '0128109001',
          titleStart: '2016-09-01',
          titleStatus: 'Dosen Non-PNS',
          titleProdi: 'S1 Informatika'
        },
        {
          id: 6,
          titleName: 'Tahan HJ Sihombing, S.Pd., M. App Ling (TESOL)',
          titleNIDN: '0102069002',
          titleStart: '2019-04-23',
          titleStatus: 'Dosen Non-PNS',
          titleProdi: 'S1 Informatika'
        },
        {
          id: 7,
          titleName: 'Asido Saragih, S.Pd., M.Sc.',
          titleNIDN: '0624109301',
          titleStart: '2022-09-30',
          titleStatus: 'Dosen Non-PNS',
          titleProdi: 'S1 Informatika'
        },
        {
          id: 8,
          titleName: 'Marojahan MT. Sigiro, ST., M.Sc',
          titleNIDN: '0108098301',
          titleStart: '2007-03-19',
          titleStatus: 'Dosen Non-PNS',
          titleProdi: 'DIII-Teknologi Komputer'
        },
        {
          id: 9,
          titleName: 'Ardiles Sinaga, S.T., M.T.',
          titleNIDN: '0420098501',
          titleStart: '2022-02-02',
          titleStatus: 'Dosen Non-PNS',
          titleProdi: 'S1 Informatika'
        },
        {
          id: 10,
          titleName: 'Herimanto, S.Kom., M.Kom',
          titleNIDN: '0220042501',
          titleStart: '2022-08-30',
          titleStatus: 'Dosen Non-PNS',
          titleProdi: 'S1 Informatika'
        }
    ]
  },
  methods: {
    highlightMatches(text) {
      const matchExists = text.toLowerCase().includes(this.filter.toLowerCase());
      if (!matchExists) return text;

      const re = new RegExp(this.filter, "ig");
      return text.replace(re, matchedText => `<strong>${matchedText}</strong>`);
    }
  },
  computed: {
    filteredRows() {
      return this.rows.filter(row => {
        const titleNama = row.titleNama.toString().toLowerCase();
        const titleProdi = row.titleProdi.toLowerCase();
        const searchTerm = this.filter.toLowerCase();

        return (
          titleNama.includes(searchTerm) || titleProdi.includes(searchTerm)
        );
      });
    }
  }
});
</script>