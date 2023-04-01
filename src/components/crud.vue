<template>
  <div class="px-4">
    <form v-if="mode === 'create'" @submit.prevent="createRecord">
      <label for="ruang">Ruang:</label><br />
      <input
        class="input input-bordered w-full max-w-xs"
        type="text"
        v-model="ruang"
        name="ruang"
      /><br /><br />

      <label for="name">Nama:</label><br />
      <input
        class="input input-bordered w-full max-w-xs"
        type="text"
        v-model="name"
        name="name"
      /><br /><br />

      <label for="email">Email:</label><br />
      <input
        class="input input-bordered w-full max-w-xs"
        type="email"
        v-model="email"
        name="email"
      /><br /><br />

      <label for="agenda">Agenda:</label><br />
      <input
        class="input input-bordered w-full max-w-xs"
        type="text"
        v-model="agenda"
        name="agenda"
      /><br /><br />

      <label for="dept">Departemen:</label><br />
      <input
        class="input input-bordered w-full max-w-xs"
        type="text"
        v-model="dept"
        name="dept"
      /><br /><br />

      <label for="tanggal">Tanggal:</label><br />
      <input
        class="input input-bordered w-full max-w-xs"
        type="date"
        v-model="tanggal"
        name="tanggal"
      /><br /><br />

      <label for="jam">Jam:</label><br />
      <input
        class="input input-bordered w-full max-w-xs"
        type="text"
        v-model="jam"
        name="jam"
      /><br /><br />

      <label for="selesai">Selesai:</label><br />
      <input
        class="input input-bordered w-full max-w-xs"
        type="text"
        v-model="selesai"
        name="selesai"
      /><br /><br />

      <button type="submit" class="btn btn-primary">Tambahkan Data</button>
    </form>
    <form v-if="mode === 'edit'" @submit.prevent="updateRecord">
      <label for="ruang">Ruang:</label><br />
      <input
        class="input input-bordered w-full max-w-xs"
        type="text"
        v-model="ruang"
        name="ruang"
      /><br /><br />

      <label for="name">Nama:</label><br />
      <input
        class="input input-bordered w-full max-w-xs"
        type="text"
        v-model="name"
        name="name"
      /><br /><br />

      <label for="email">Email:</label><br />
      <input
        class="input input-bordered w-full max-w-xs"
        type="email"
        v-model="email"
        name="email"
      /><br /><br />

      <label for="agenda">Agenda:</label><br />
      <input
        class="input input-bordered w-full max-w-xs"
        type="text"
        v-model="agenda"
        name="agenda"
      /><br /><br />

      <label for="dept">Departemen:</label><br />
      <input
        class="input input-bordered w-full max-w-xs"
        type="text"
        v-model="dept"
        name="dept"
      /><br /><br />

      <label for="tanggal">Tanggal:</label><br />
      <input
        class="input input-bordered w-full max-w-xs"
        type="date"
        v-model="tanggal"
        name="tanggal"
      /><br /><br />

      <label for="jam">Jam:</label><br />
      <input
        class="input input-bordered w-full max-w-xs"
        type="text"
        v-model="jam"
        name="jam"
      /><br /><br />

      <label for="selesai">Selesai:</label><br />
      <input
        class="input input-bordered w-full max-w-xs"
        type="text"
        v-model="selesai"
        name="selesai"
      /><br /><br />
      <button type="submit">Simpan Perubahan</button>
    </form>
    <ul>
      <li
        v-for="record in records"
        :key="record.id"
        class="flex space-y-4 items-center"
      >
        {{ record.formattedDate }} --

        <p>{{ record.fields.agenda }}</p>
        <p>{{ record.fields.dept }}</p>
        <p>{{ record.fields.tanggal }}</p>
        |
        <p>{{ record.fields.jam }}</p>
        |
        <p>{{ record.createdTime }}</p>
        <p>{{ record.fields.selesai }}</p>
        |

        <button @click="editRecord(record)" class="btn btn-sm btn-primary">
          Edit
        </button>
      </li>
    </ul>
    <button @click="mode = 'create'">Tambah Data</button>
  </div>
</template>

<script>
import moment from 'moment';
import api from './api.js';

export default {
  data() {
    return {
      records: [],
      ruang: '',
      name: '',
      email: '',
      agenda: '',
      dept: '',
      tanggal: '',
      jam: '',
      selesai: '',
      recordId: '',
      mode: 'create',
    };
  },
  async created() {
    try {
      const response = await api.get('/tblB7xBeCO3xzW9SQ');
      this.records = response.data.records;
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    formattedrecords() {
      return this.records.map((record) => {
        const d = moment(record.createdTime);
        const formattedDate = d.format('YYYY-MM-DD HH:mm');
        return {
          formattedDate: formattedDate,
        };
      });
    },
  },
  methods: {
    async createRecord() {
      try {
        const response = await api.post('/tblB7xBeCO3xzW9SQ', {
          fields: {
            ruang: this.ruang,
            name: this.name,
            email: this.email,
            agenda: this.agenda,
            dept: this.dept,
            tanggal: this.tanggal,
            jam: this.jam,
            selesai: this.selesai,
          },
        });
        this.records.push(response.data);
        this.name = '';
        this.email = '';
        this.ruang = '';
        this.agenda = '';
        this.dept = '';
        this.tanggal = '';
        this.jam = '';
        this.selesai = '';
      } catch (error) {
        console.error(error);
      }
    },
    editRecord(record) {
      this.name = record.fields.name;
      this.email = record.fields.email;
      this.ruang = record.fields.ruang;
      this.agenda = record.fields.agenda;
      this.dept = record.fields.dept;
      this.tanggal = record.fields.tanggal;
      this.jam = record.fields.jam;
      this.selesai = record.fields.selesai;
      this.recordId = record.id;
      this.mode = 'edit';
    },
    async updateRecord() {
      try {
        const response = await api.patch(
          `/tblB7xBeCO3xzW9SQ/${this.recordId}`,
          {
            fields: {
              ruang: this.ruang,
              name: this.name,
              email: this.email,
              agenda: this.agenda,
              dept: this.dept,
              tanggal: this.tanggal,
              jam: this.jam,
              selesai: this.selesai,
            },
          }
        );
        const index = this.records.findIndex(
          (record) => record.id === response.data.id
        );
        this.records.splice(index, 1, response.data);
        this.name = '';
        this.email = '';
        this.ruang = '';
        this.agenda = '';
        this.dept = '';
        this.tanggal = '';
        this.jam = '';
        this.selesai = '';
        this.recordId = '';
        this.mode = 'create';
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
