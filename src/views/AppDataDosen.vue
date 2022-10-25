<template>
  <div class="pseudoheader p-5 mb-2"></div>
   <div class="main-panel m-5 p-5">
    <div class="content-wrapper">
      <div class="row">
        <div class="col-lg-12 grid-margin stretch-card">
          <div class="card shadow rounded">
            <div class="card-body">
              <h4 class="card-title text-center">Daftar Dosen Institut Teknologi Del</h4>
              <div class="text-center mt-5">
              <input
                type="text"
                class="border-2 mb-5 rounded h-10 p-2"
                placeholder="Cari dosen"
                @input="onSearch"
                size = "50"
              />
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th
                    v-for="(column, index) in columns"
                    v-bind:key="index"
                    class="border-2 p-2 text-left"
                    v-on:click="sortRecords(index)"
                  >
                    {{column}}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, index) in rows"
                  v-bind:key="index"
                >
                  <td
                    v-for="(rowItem, itemIndex) in row"
                    v-bind:key="itemIndex"
                    class="border-2 p-2"
                  >
                    {{rowItem}}
                  </td>
                </tr>
              </tbody>
            </table>
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
</template>

<script>
const performSearch = (rows, term) => {
  const results = rows.filter(
    row => row.join(" ").toLowerCase().includes(term.toLowerCase())
  )

  return results;
}

export default {
  name: 'AppDataDosen',
  data () {
    return {
      term: '',
      rawRows: [
        [
          "Arie Satia Dharma, S.T, M.Kom.", "0927028002", "2013-09-19", "Dosen Non-PNS", "S1 Informatika"
        ],
        [
          "Dr. Arlinta Christy Barus, ST., M.InfoTech.", "0117027901", "2002-11-29", "Dosen Non-PNS", "S1 Informatika"
        ],
      ],
      rows: [],
      columns: [
        'Nama',
        'NIDN',
        'Aktif Sejak',
        'Status',
        'Prodi'
      ],
      sortIndex: null,
      sortDirection: null
    }
  },
  methods: {
    sortRecords (index) {
      if (this.sortIndex === index) {
        switch (this.sortDirection) {
          case null:
            this.sortDirection = 'asc';
            break;
          case 'asc':
            this.sortDirection = 'desc';
            break;
          case 'desc':
            this.sortDirection = null;
            break;
        }
      } else {
        this.sortDirection = 'asc'
      }

      this.sortIndex = index;

      if (!this.sortDirection) {
        this.rows = performSearch(this.rawRows, this.term);
        return;
      }

      this.rows = this.rows.sort(
        (rowA, rowB) => {
          if (this.sortDirection === 'desc') {
            return rowB[index].localeCompare(rowA[index]);
          }

          return rowA[index].localeCompare(rowB[index]);
        }
      )
    },
    onSearch (e) {
      this.term = e.target.value;
      this.rows = performSearch(this.rawRows, this.term);
    }
  },
  mounted () {
    this.rows = [...this.rawRows];
  }
}
</script>