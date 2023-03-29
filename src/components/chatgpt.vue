<template>
  <div>
    <form>
      <label for="query">Search Query:</label>
      <input type="text" id="query" v-model="query" />
      <button type="button" @click="search">Search</button>
    </form>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.createdTime }} {{ item.id }} | {{ item.fields.status }}
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';
import 'moment/locale/id';
import axios from 'axios';

export default {
  data() {
    return {
      query: 'filterByFormula=status%3D"selesai"',
      items: [],
    };
  },
  methods: {
    search() {
      axios
        .get(
          `https://api.airtable.com/v0/appTjJ62VlXlQygqr/memo?${this.query}`,
          {
            headers: {
              Authorization: 'Bearer keyR8rYGOyxgPY76u',
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          const data = response.data.records;
          this.items = data.map((item) => {
            const createdTime = moment(item.createdTime).locale('id');
            const formattedDate = createdTime.format('DD-MMMM-YYYY hh:mm');
            item.createdTime = formattedDate;
            return item;
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
