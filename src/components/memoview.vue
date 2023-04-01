<template>
  <div class="px-4">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">Detail Memo</th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">Tanggal</th>
            <th scope="col" class="px-6 py-3">Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="record in records"
            :key="record.id"
            class="
              bg-white
              border-b
              dark:bg-gray-800 dark:border-gray-700
              hover:bg-gray-50
              dark:hover:bg-gray-600
            "
          >
            <td class="px-6 py-2">
              <div class="">
                <div class="text-base font-semibold">
                  {{ record.fields.judul }}
                </div>
                <div class="font-normal text-gray-500">
                  <span
                    v-for="value in record.fields.direksi"
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
                  | {{ record.fields.dept }}
                </div>
              </div>
            </td>
            <td class="px-6 py-2 text-right">
              <div class="text-right">
                <div v-if="record.fields.status === 'proses'">
                  <div
                    class="
                      text-black
                      font-medium
                      w-max
                      px-3
                      py-1
                      rounded-full
                      shadow-lg
                      bg-yellow-300
                    "
                  >
                    Proses
                  </div>
                </div>
                <div v-else-if="record.fields.status === 'selesai'">
                  <div
                    class="
                      text-white
                      font-medium
                      w-max
                      px-3
                      py-1
                      rounded-full
                      shadow-lg
                      bg-green-500
                    "
                  >
                    Selesai
                  </div>
                </div>
                <div v-else-if="record.fields.status === 'tolak'">
                  <div
                    class="
                      text-white
                      font-medium
                      w-max
                      px-3
                      py-1
                      rounded-full
                      shadow-lg
                      bg-red-500
                    "
                  >
                    Tolak
                  </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-2 flex">
              <div class="w-1/2">
                <div class="text-base font-semibold">
                  {{ record.fields.nmasuk }}
                </div>
                <div class="font-normal text-gray-500">
                  {{ record.fields.tmasuk }}
                </div>
              </div>
              <div class="w-1/2">
                <div v-if="record.fields.ambil === 'sudah'">
                  <div class="text-base font-semibold">
                    {{ record.fields.nkeluar }}
                  </div>
                  <div class="font-normal text-gray-500">
                    {{ record.fields.tkeluar }}
                  </div>
                </div>
                <div v-else-if="record.fields.ambil === 'belum'">
                  <button
                    type="button"
                    @click="openModal"
                    class="
                      mt-1
                      rounded-md
                      bg-red-500
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-white
                      hover:bg-opacity-30
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-white
                      focus-visible:ring-opacity-75
                    "
                  >
                    Ambil
                  </button>
                </div>
                <div v-else-if="record.fields.ambil === 'proses'"></div>
              </div>
            </td>
            <td>
              {{ record.fields.ket }} <br />
              <button
                @click="editRecord(record)"
                class="btn btn-sm btn-primary"
              >
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import api from '@/stores/api.js';

export default {
  data() {
    return {
      records: [],
      mode: 'create',
    };
  },
  async created() {
    try {
      const response = await api.get(
        '/tblVPlqco0kra9Gap?maxRecords=10&sort%5B0%5D%5Bfield%5D=auto&sort%5B0%5D%5Bdirection%5D=desc'
      );
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
};
</script>
