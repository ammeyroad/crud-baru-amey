<template>
  <div class="p-4 rounded-xl bg-gray-200">
    <form
      v-if="mode === 'edit'"
      @submit.prevent="createRecord"
      class="space-y-4"
    >
      <div id="judul">
        <label
          class="block text-sm -pb-2 font-medium text-gray-900 dark:text-white"
          >Judul Memo</label
        >
        <div class="relative">
          <div
            class="
              absolute
              inset-y-0
              left-0
              flex
              items-center
              pl-3
              pointer-events-none
            "
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              ></path>
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="judul"
            v-model="judul"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              pl-10
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            placeholder="Judul Memo Anda"
          />
        </div>
      </div>

      <div id="direksi">
        <span class="label-text-alt capitalize"
          >Persetujuan Kepada:
          <span
            v-for="value in direksi"
            class="
              bg-blue-100
              text-blue-800 text-xs
              font-medium
              mr-1
              px-2.5
              py-0.5
              rounded
              dark:bg-blue-900 dark:text-blue-300
            "
          >
            {{ value }}</span
          >
        </span>
        <div class="bg-black/10 p-4 rounded-lg mt-1">
          <div class="space-x-4 w-full flex">
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                class="checkbox checkbox-primary border-0 bg-black/10"
                value="HTO"
                id="HTO"
                v-model="direksi"
              />
              <span class="label-text-alt uppercase font-bold">hto</span>
            </div>
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                class="checkbox checkbox-primary border-0 bg-black/10"
                value="JWA"
                id="JWA"
                v-model="direksi"
              />
              <span class="label-text-alt uppercase font-bold">jwa</span>
            </div>
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                class="checkbox checkbox-primary border-0 bg-black/10"
                value="EGB"
                id="EGB"
                v-model="direksi"
              />
              <span class="label-text-alt uppercase font-bold">egb</span>
            </div>
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                class="checkbox checkbox-primary border-0 bg-black/10"
                value="YIM"
                id="YIM"
                v-model="direksi"
              />
              <span class="label-text-alt uppercase font-bold">yim</span>
            </div>
          </div>
          <hr class="my-4 bottom-1 border-black opacity-10" />
          <div class="space-x-4 w-full flex">
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                class="checkbox checkbox-primary border-0 bg-black/10"
                value="DTW"
                id="DTW"
                v-model="direksi"
              />
              <span class="label-text-alt uppercase font-bold">dtw</span>
            </div>
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                class="checkbox checkbox-primary border-0 bg-black/10"
                value="HLM"
                id="HLM"
                v-model="direksi"
              />
              <span class="label-text-alt uppercase font-bold">hlm</span>
            </div>
          </div>
        </div>
      </div>
      <div id="Nama Anda">
        <label
          class="block text-sm -pb-2 font-medium text-gray-900 dark:text-white"
          >Nama Anda</label
        >
        <div class="relative">
          <div
            class="
              absolute
              inset-y-0
              left-0
              flex
              items-center
              pl-3
              pointer-events-none
            "
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              ></path>
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="nmasuk"
            v-model="nmasuk"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              pl-10
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            placeholder="Nama Anda"
          />
        </div>
      </div>
      <div id="dept">
        <label
          class="block text-sm -pb-2 font-medium text-gray-900 dark:text-white"
          >Departemen</label
        >
        <div class="relative">
          <div
            class="
              absolute
              inset-y-0
              left-0
              flex
              items-center
              pl-3
              pointer-events-none
            "
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              ></path>
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              ></path>
            </svg>
          </div>
          <select
            id="dept"
            v-model="dept"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              pl-10
            "
          >
            <option v-for="option in deptlist" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
      </div>
      <div id="Keterangan">
        <label
          class="block text-sm -pb-2 font-medium text-gray-900 dark:text-white"
          >Keterangan</label
        >
        <div class="relative">
          <div
            class="
              absolute
              inset-y-0
              left-0
              pt-2.5
              flex
              pl-3
              pointer-events-none
            "
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              ></path>
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              ></path>
            </svg>
          </div>
          <textarea
            rows="4"
            type="textarea"
            id="ket"
            v-model="ket"
            class="
              pl-10
              p-2.5
              w-full
              text-sm text-gray-900
              bg-gray-50
              rounded-lg
              border border-gray-300
              focus:ring-blue-500 focus:border-blue-500
            "
            placeholder="keterangan tambahan"
          />
        </div>
      </div>
      <button
        type="submit"
        class="
          text-white
          bg-gradient-to-r
          from-blue-500
          via-blue-600
          to-blue-700
          hover:bg-gradient-to-br
          focus:ring-4 focus:outline-none focus:ring-blue-300
          w-full
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2.5
          text-center
          mr-2
          mb-2
          shadow-lg
        "
      >
        Tambahkan Memo
      </button>
    </form>
  </div>
</template>

<script>
import api from '@/stores/api.js';

export default {
  data() {
    return {
      records: [],
      judul: '',
      status: 'proses',
      dept: '',
      direksi: [],
      nmasuk: '',
      nkeluar: '',
      ambil: 'sudah',
      ket: '',
      email: '',
      mode: 'create',
      deptlist: [
        { text: 'Corporate secetrary', value: 'corsec' },
        { text: 'abs', value: 'tnd' },
        { text: 'marketing', value: 'mkt' },
      ],
    };
  },

  methods: {
    editRecord(record) {
      this.nmasuk = record.fields.nmasuk;
      this.ket = record.fields.ket;
      this.ambil = record.fields.ambil;
      this.nkeluar = record.fields.nkeluar;
      this.recordId = record.id;
      this.mode = 'edit';
    },
    async updateRecord() {
      try {
        const response = await api.patch(
          `/tblB7xBeCO3xzW9SQ/${this.recordId}`,
          {
            fields: {
              nmasuk: this.nmasuk,
              nkeluar: this.nkeluar,
              nket: this.nket,
              ambil: this.ambil,
            },
          }
        );
        const index = this.records.findIndex(
          (record) => record.id === response.data.id
        );
        this.records.splice(index, 1, response.data);
        this.nmasuk = '';
        this.nkeluar = '';
        this.ambil = '';
        this.ket = '';
        this.recordId = '';
        this.mode = '';
      } catch (error) {
        console.error(error);
      }
    },
    async deleteRecord(record) {
      try {
        await api.delete(`/tblB7xBeCO3xzW9SQ/${record.id}`);
        const index = this.records.findIndex((r) => r.id === record.id);
        this.records.splice(index, 1);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
