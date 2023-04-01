<template>
  <div class="p-4 rounded-xl bg-gray-200">
    <div
      v-show="showModal"
      tabindex="-1"
      class="
        fixed
        top-0
        left-0
        right-0
        z-50
        w-full
        p-4
        overflow-x-hidden overflow-y-auto
        md:inset-0
        h-[calc(100%-1rem)]
        md:h-full
      "
    >
      <div class="relative w-full h-full max-w-2xl md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="
              flex
              items-start
              justify-between
              p-4
              border-b
              rounded-t
              dark:border-gray-600
            "
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Terms of Service
            </h3>
            <button v-on:click="showModal = !showModal">tutup</button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <p
              class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
            >
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p
              class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
            >
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
          <!-- Modal footer -->
          <div
            class="
              flex
              items-center
              p-6
              space-x-2
              border-t border-gray-200
              rounded-b
              dark:border-gray-600
            "
          >
            <button
              type="button"
              class="
                text-white
                bg-blue-700
                hover:bg-blue-800
                focus:ring-4 focus:outline-none focus:ring-blue-300
                font-medium
                rounded-lg
                text-sm
                px-5
                py-2.5
                text-center
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
              "
            >
              I accept
            </button>
          </div>
        </div>
      </div>
    </div>

    <form
      v-if="mode === 'create'"
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
      <div id="checkbox" class="flex">
        <div class="flex items-center h-5">
          <input
            value="true"
            v-on:click="showText = !showText"
            aria-describedby="helper-checkbox-text"
            type="checkbox"
            class="
              w-4
              h-4
              text-blue-600
              bg-gray-100
              border-gray-300
              rounded
              focus:ring-blue-500
              dark:focus:ring-blue-600 dark:ring-offset-gray-800
              focus:ring-2
              dark:bg-gray-700 dark:border-gray-600
            "
          />
        </div>
        <div class="ml-2 text-sm">
          <label
            for="helper-checkbox"
            class="font-medium text-gray-900 dark:text-gray-300"
            >Notifikasi Via email</label
          >
          <p
            id="helper-checkbox-text"
            class="text-xs font-normal text-gray-500 dark:text-gray-300"
          >
            check jika ingin mendapat update memo Anda
          </p>
        </div>
      </div>
      <div v-show="showText">
        <div id="email">
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
              type="email"
              id="email"
              v-model="email"
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
              placeholder="email@clipan.co.id"
            />
          </div>
        </div>
      </div>
      <div v-show="!showText"></div>
      <button
        v-on:click="showModal = !showModal"
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
      showText: false,
      showModal: false,
      records: [],
      judul: '',
      status: 'proses',
      dept: '',
      direksi: [],
      nmasuk: '',
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
    async createRecord() {
      try {
        const response = await api.post('/tblVPlqco0kra9Gap', {
          fields: {
            judul: this.judul,
            status: this.status,
            dept: this.dept,
            direksi: this.direksi,
            nmasuk: this.nmasuk,
            ket: this.ket,
            ket: this.email,
          },
        });
        this.records.push(response.data);
        this.judul = '';
        this.status = '';
        this.dept = '';
        this.direksi = '';
        this.nmasuk = '';
        this.ket = '';
        this.email = '';
        this.$forceUpdate();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
