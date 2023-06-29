<template>
  <ul permanent>
    <ul density="compact" v-for="(item, i) in items" :key="i">
      <ul :value="item.value" v-if="item.children">
        <li
          v-for="(child, c) in item.children"
          :key="c"
          :title="child.title"
          :value="child.value"
          @click="selectedItem = child"
        ></li>
      </ul>

      <li
        v-else
        :key="i"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.value"
        @click="selectedItem = item"
      >{{ item.title }}</li>
    </ul>
  </ul>
</template>

<style>
.base-form-nav {
  top: 60px !important;
  z-index: 2000 !important;
  height: calc((100% - 60px) - 0px) !important;
}
</style>

<script>
export default {
  name: "BaseConfig",
  data: () => ({
    lovType: "",
    selectedItem: {},
    formData: {},
    results: [],
    dialog: false,
    category_id: null,
    items: [
      {
        value: "1",
        title: "Me",
      },
      {
        value: "12",
        title: "Mesdf",
      },
      {
        value: "13",
        title: "Mesdf",
      },
    ],
    headers: [
      {
        text: "Name",
        align: "start",
        value: "name",
      },
      {
        text: "Default",
        fieldType: "boolean",
        value: "default",
      },
    ],

    actionItems: [{ type: "edit" }, { type: "delete" }],
  }),
  methods: {
    addNew() {
      this.dialog = true;
      this.formData = {};
      this.editing = false;
      this.formData.category = this.$consts.LOV_TYPE[this.selectedItem.lovType];
    },
  },
  watch: {
    selectedItem: {
      handler(newValue, preVal) {
        // reset search and params
        this.$route.query.search = null;
        if (newValue?.title != preVal?.title) {
          this.$router.push({
            query: { page: 1 },
          });
          if (this.$refs.dt_table) {
            this.$refs.dt_table.search = "";
          }
        }
        if (newValue.params) {
          this.$router.push({
            query: { ...this.$route.query, ...newValue.params },
          });
        }
        if (newValue.lovType) {
          this.apiService = LOVService.byType(newValue.lovType);
          if (this.$refs.dt_table) {
            this.dialog = false;
            this.$refs.dt_table.reload();
          }
        }
      },
    },
  },
};
</script>
